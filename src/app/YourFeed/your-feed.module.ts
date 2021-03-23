import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FeedModule} from "../shared/modules/feed/feed.module";
import {BannerModule} from "src/app/shared/modules/banner/banner.module";
import {PopularTagsModule} from "src/app/shared/modules/popularTags/popular-tags.module";
import {FeedTogglerModule} from "src/app/shared/modules/feedToggler/feed-toggler.module";
import { YourFeedComponent } from './components/your-feed/your-feed.component';

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule
  ],
  declarations: [YourFeedComponent]
})
export class YourFeedModule {}
