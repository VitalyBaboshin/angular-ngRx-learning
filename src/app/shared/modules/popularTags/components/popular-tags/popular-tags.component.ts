import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";

import {errorSelector, isLoadingSelector, popularTagsSelector} from "src/app/shared/modules/popularTags/store/selectors";
import {getPopularTagsAction} from "src/app/shared/modules/popularTags/store/actions/get-popular-tags.action";
import {PopularTagType} from "src/app/shared/types/popular-tag.type";


@Component({
  selector: 'vl-popular-tags',
  templateUrl: './popular-tags.component.html'
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[]> | null
  isLoading$: Observable<boolean>
  error$: Observable<string | null>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction())
  }
}
