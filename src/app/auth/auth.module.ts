import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import {AuthService} from "src/app/auth/services/auth.service";
import {PersistanceService} from "src/app/shared/services/persistance.service";
import {reducer} from "src/app/auth/store/reducers";
import {RegisterEffect} from "src/app/auth/store/effects/register.effect";
import {LoginEffect} from "src/app/auth/store/effects/login.effect";
import {BackendErrorMessagesModule} from "src/app/shared/modules/bcakendErrorMessages/backend-error-messages.module";
import {GetCurrentUserEffect} from "./store/effects/getCurrentUser.effect";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
    BackendErrorMessagesModule
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistanceService]
})

export class AuthModule {
}
