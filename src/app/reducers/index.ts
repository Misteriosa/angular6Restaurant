import { undoRedo } from 'ngrx-undo-redo';
import * as fromActions from '../menu/store/product.actions';

import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
}

export const reducers: ActionReducerMap<State> = {
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [undoRedo(
  {
        maxBufferSize: 15,
        allowedActions: [fromActions.loadProductsSuccess, fromActions.dropInBox, fromActions.dropBack]
  }
)] : [];
