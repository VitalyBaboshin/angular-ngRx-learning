import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import {PopularTagsService} from "src/app/shared/modules/popularTags/services/popular-tags.service";
import {StoreModule} from "@ngrx/store";
import {reducer} from "src/app/shared/modules/popularTags/store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {GetPopularTagsEffect} from "src/app/shared/modules/popularTags/store/effects/get-popular-tags.effect";
import {LoadingModule} from "src/app/shared/modules/loading/loading.module";
import {ErrorMessageModule} from "src/app/shared/modules/errorMessage/error-message.module";
import {RouterModule} from "@angular/router";



@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetPopularTagsEffect]),
    StoreModule.forFeature('popularTags', reducer),
    LoadingModule,
    ErrorMessageModule,
    RouterModule
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService]
})

export class PopularTagsModule {}
