import {Component, Input} from '@angular/core';
import {PopularTagType} from "src/app/shared/types/popular-tag.type";

@Component({
  selector: 'vl-tag-list',
  templateUrl: './tag-list.component.html'
})
export class TagListComponent{
  @Input('tags') tagsProps: PopularTagType[]
}
