import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {isLoggedInSelector} from "src/app/auth/store/selectors";

@Component({
  selector: 'vl-feed-toggler',
  templateUrl: './feed-toggler.component.html'
})
export class FeedTogglerComponent implements OnInit {
  @Input('tagName') tagNameProps: string | null

  isLoggedIn$: Observable<boolean>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValues()
  }

  private initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}
