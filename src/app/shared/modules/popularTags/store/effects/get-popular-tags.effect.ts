import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";

import {PopularTagsService} from "src/app/shared/modules/popularTags/services/popular-tags.service";
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from "src/app/shared/modules/popularTags/store/actions/get-popular-tags.action";
import {PopularTagType} from "src/app/shared/types/popular-tag.type";

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() => this.actions$.pipe(
    // сокращаем стрим до одного экшена
    ofType(getPopularTagsAction),
    // получаем содержимое этого экшена
    switchMap(() => {
      return this.popularTagsService.getPopularTags().pipe(
        map((popularTags: PopularTagType[]) => {
          return getPopularTagsSuccessAction({popularTags})
        }),

        catchError(() => {
          return of(getPopularTagsFailureAction())
        })
      )
    })
  ))

  constructor(private actions$: Actions,
              private popularTagsService: PopularTagsService) {
  }
}
