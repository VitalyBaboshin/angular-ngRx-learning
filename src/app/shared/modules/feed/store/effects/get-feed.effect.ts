import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";

import {FeedService} from "src/app/shared/modules/feed/services/feed.service";
import {getFeedAction, getFeedFailureAction, getFeedSuccessAction} from "src/app/shared/modules/feed/store/actions/get-feed.action";
import {GetFeedResponseInterface} from "src/app/shared/modules/feed/types/get-feed-response.interface";

@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() => this.actions$.pipe(
    // сокращаем стрим до одного экшена
    ofType(getFeedAction),
    // получаем содержимое этого экшена
    switchMap(({url}) => {
      return this.feedService.getFeed(url).pipe(
        map((feed: GetFeedResponseInterface) => {
          return getFeedSuccessAction({feed})
        }),

        catchError((errorResponse: HttpErrorResponse) => {
          return of(getFeedFailureAction())
        })
      )
    })
  ))

  constructor(private actions$: Actions,
              private feedService: FeedService) {
  }
}
