import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FeedComponent} from "./components/feed/feed.component";
import {EffectsModule} from "@ngrx/effects";
import {GetFeedEffect} from "src/app/shared/modules/feed/store/effects/get-feed.effect";
import {StoreModule} from "@ngrx/store";
import {reducer} from "src/app/shared/modules/feed/store/reducers";
import {FeedService} from "src/app/shared/modules/feed/services/feed.service";
import {RouterModule} from "@angular/router";
import {ErrorMessageModule} from "src/app/shared/modules/errorMessage/error-message.module";
import {LoadingModule} from "src/app/shared/modules/loading/loading.module";
import {PaginationModules} from "src/app/shared/modules/pagination/pagination.modules";
import {TagListModule} from "src/app/shared/modules/tagList/tag-list.module";

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducer),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModules,
    TagListModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService]
})

export class FeedModule {}
