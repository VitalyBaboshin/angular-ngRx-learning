import { Component} from '@angular/core';

@Component({
  selector: 'vl-your-feed',
  templateUrl: './your-feed.component.html'
})
export class YourFeedComponent{
  apiUrl = '/articles/feed'
}
