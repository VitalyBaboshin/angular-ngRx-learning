
import {Action, createReducer, on} from "@ngrx/store";
import {PopularTagsStateInterface} from "src/app/shared/modules/popularTags/types/popular-tags-state.interface";

import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from "src/app/shared/modules/popularTags/store/actions/get-popular-tags.action";

const initialState: PopularTagsStateInterface = {
  isLoading: false,
  error: null,
  data: null
}

const popularTagsReducer = createReducer(
  initialState,
  on(getPopularTagsAction, (state): PopularTagsStateInterface => ({
    ...state,
    isLoading: true
  })),
  on(getPopularTagsSuccessAction, (state, action): PopularTagsStateInterface => ({
    ...state,
    isLoading: false,
    data: action.popularTags
  })),
  on(getPopularTagsFailureAction, (state): PopularTagsStateInterface => ({
    ...state,
    isLoading: false,
  }))
)

export function reducer(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action)
}
