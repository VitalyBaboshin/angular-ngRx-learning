import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "src/environments/environment";
import {GetPopularTagsResponseInterface} from "src/app/shared/modules/popularTags/types/popular-tags-response.interface";
import {map} from "rxjs/operators";
import {PopularTagType} from "src/app/shared/types/popular-tag.type";
@Injectable()

export class PopularTagsService {
  url = '/tags'
  constructor(private http: HttpClient) {
  }
  getPopularTags(): Observable<PopularTagType[]> {
    const fullUrl = environment.apiUrl + this.url

    return this.http.get(fullUrl)
      .pipe(map((response: GetPopularTagsResponseInterface) => {
        return response.tags
      }))
  }
}
