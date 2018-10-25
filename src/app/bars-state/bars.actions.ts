import { Action } from '@ngrx/store'
import { Update } from '@ngrx/entity'
import { Bar } from './bars.reducer'

export enum BarsActionTypes {
  AddBar = '[Bars] Add Bar',
  AddBars = '[Bars] Add Bars',
  ClearBars = '[Bars] Clear Bars',
  DeleteBar = '[Bars] Delete Bar',
  DeleteBars = '[Bars] Delete Bars',
  LoadBars = '[Bars] Load Bars',
  LoadBarsFailure = '[Bars] Load Bars Failure',
  LoadBarsSuccess = '[Bars] Load Bars Success',
  UpdateBar = '[Bars] Update Bar',
  UpdateBars = '[Bars] Update Bars',
  UpsertBar = '[Bars] Upsert Bar',
  UpsertBars = '[Bars] Upsert Bars',
}

export class AddBar implements Action {
  readonly type = BarsActionTypes.AddBar
  constructor(public payload: { bar: Bar }) {}
}

export class AddBars implements Action {
  readonly type = BarsActionTypes.AddBars
  constructor(public payload: { bars: Bar[] }) {}
}

export class ClearBars implements Action {
  readonly type = BarsActionTypes.ClearBars
}

export class DeleteBar implements Action {
  readonly type = BarsActionTypes.DeleteBar
  constructor(public payload: { id: string }) {}
}

export class DeleteBars implements Action {
  readonly type = BarsActionTypes.DeleteBars
  constructor(public payload: { ids: string[] }) {}
}

export class LoadBars implements Action {
  readonly type = BarsActionTypes.LoadBars
}

export class LoadBarsSuccess implements Action {
  readonly type = BarsActionTypes.LoadBarsSuccess
  constructor(public payload: { bars: Bar[] }) {}
}

export class LoadBarsFailure implements Action {
  readonly type = BarsActionTypes.LoadBarsFailure
  constructor(public payload: { error: any }) {}
}

export class UpdateBar implements Action {
  readonly type = BarsActionTypes.UpdateBar
  constructor(public payload: { bar: Update<Bar> }) {}
}

export class UpdateBars implements Action {
  readonly type = BarsActionTypes.UpdateBars
  constructor(public payload: { bars: Update<Bar>[] }) {}
}

export class UpsertBar implements Action {
  readonly type = BarsActionTypes.UpsertBar
  constructor(public payload: { bar: Bar }) {}
}

export class UpsertBars implements Action {
  readonly type = BarsActionTypes.UpsertBars
  constructor(public payload: { bars: Bar[] }) {}
}

export type BarsActionsUnion =
  | AddBar
  | AddBars
  | ClearBars
  | DeleteBar
  | DeleteBars
  | LoadBars
  | LoadBarsFailure
  | LoadBarsSuccess
  | UpdateBar
  | UpdateBars
  | UpsertBar
  | UpsertBars

export const BarsActions = {
  AddBar,
  AddBars,
  ClearBars,
  DeleteBar,
  DeleteBars,
  LoadBars,
  LoadBarsFailure,
  LoadBarsSuccess,
  UpdateBar,
  UpdateBars,
  UpsertBar,
  UpsertBars,
}
