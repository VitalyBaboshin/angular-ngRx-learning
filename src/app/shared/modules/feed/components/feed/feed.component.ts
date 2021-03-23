import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {getFeedAction} from "src/app/shared/modules/feed/store/actions/get-feed.action";
import {Observable} from "rxjs";
import {GetFeedResponseInterface} from "src/app/shared/modules/feed/types/get-feed-response.interface";
import {errorSelector, feedSelector, isLoadingSelector} from "src/app/shared/modules/feed/store/selectors";
import {environment} from "src/environments/environment";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {parseUrl, stringify} from "query-string"

@Component({
  selector: 'vl-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<GetFeedResponseInterface> | null
  limit = environment.limit
  baseUrl: string
  currentPage: number

  constructor(private store: Store,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
    this.baseUrl = this.router.url.split('?')[0]
  }

  initializeListeners(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params.page || '1')
      this.fecthFeed()
    })
  }

  fecthFeed(): void {
    const offset = this.currentPage * this.limit - this.limit
    const parsedUrl = parseUrl(this.apiUrlProps)
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
    this.store.dispatch(getFeedAction({url: apiUrlWithParams}))
  }
}
