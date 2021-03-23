import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";

import {AuthService} from "src/app/auth/services/auth.service";
import {CurrentUserInterface} from "src/app/shared/types/current-user.interface";
import {PersistanceService} from "src/app/shared/services/persistance.service";

import {getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction} from "src/app/auth/store/actions/getCurrentUser.action";

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() => this.actions$.pipe(
    // сокращаем стрим до одного экшена
    ofType(getCurrentUserAction),
    // получаем содержимое этого экшена
    switchMap(() => {
      const token = this.persistanceService.get('accessToken')
      if (!token) {
        return of(getCurrentUserFailureAction())
      }
      return this.authService.getCurrentUser().pipe(
        map((currentUser: CurrentUserInterface) => {
          return getCurrentUserSuccessAction({currentUser})
        }),

        catchError((errorResponse: HttpErrorResponse) => {
          return of(getCurrentUserFailureAction())
        })
      )
    })
  ))

  constructor(private actions$: Actions,
              private authService: AuthService,
              private persistanceService: PersistanceService) {
  }
}
