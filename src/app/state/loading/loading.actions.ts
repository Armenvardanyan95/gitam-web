import { createAction } from '@ngrx/store';

export const finishLoadingFeed = createAction('[Home Page] Finish Loading Feed');
export const finishLoadingByTag = createAction('[Tag Details] Finish Loading By Tag');
export const finishLoadingSearch = createAction('[Search] Finish Loading Search Results');
export const resetFinishSearch = createAction('[Search] Reset Finish Loading Search Results');
export const resetFinishLoadByTag = createAction('[Search] Reset Finish Loading By Tag');
