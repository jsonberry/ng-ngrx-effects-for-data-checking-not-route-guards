import { Action } from '@ngrx/store'
import { Update } from '@ngrx/entity'
import { Foo } from './foos.reducer'

export enum FoosActionTypes {
  AddFoo = '[Foos] Add Foo',
  AddFoos = '[Foos] Add Foos',
  ClearFoos = '[Foos] Clear Foos',
  DeleteFoo = '[Foos] Delete Foo',
  DeleteFoos = '[Foos] Delete Foos',
  LoadFoos = '[Foos] Load Foos',
  LoadFoosFailure = '[Foos] Load Foos Failure',
  LoadFoosSuccess = '[Foos] Load Foos Success',
  UpdateFoo = '[Foos] Update Foo',
  UpdateFoos = '[Foos] Update Foos',
  UpsertFoo = '[Foos] Upsert Foo',
  UpsertFoos = '[Foos] Upsert Foos',
}

export class AddFoo implements Action {
  readonly type = FoosActionTypes.AddFoo
  constructor(public payload: { foo: Foo }) {}
}

export class AddFoos implements Action {
  readonly type = FoosActionTypes.AddFoos
  constructor(public payload: { foos: Foo[] }) {}
}

export class ClearFoos implements Action {
  readonly type = FoosActionTypes.ClearFoos
}

export class DeleteFoo implements Action {
  readonly type = FoosActionTypes.DeleteFoo
  constructor(public payload: { id: string }) {}
}

export class DeleteFoos implements Action {
  readonly type = FoosActionTypes.DeleteFoos
  constructor(public payload: { ids: string[] }) {}
}

export class LoadFoos implements Action {
  readonly type = FoosActionTypes.LoadFoos
}

export class LoadFoosSuccess implements Action {
  readonly type = FoosActionTypes.LoadFoosSuccess
  constructor(public payload: { foos: Foo[] }) {}
}

export class LoadFoosFailure implements Action {
  readonly type = FoosActionTypes.LoadFoosFailure
  constructor(public payload: { error: any }) {}
}

export class UpdateFoo implements Action {
  readonly type = FoosActionTypes.UpdateFoo
  constructor(public payload: { foo: Update<Foo> }) {}
}

export class UpdateFoos implements Action {
  readonly type = FoosActionTypes.UpdateFoos
  constructor(public payload: { foos: Update<Foo>[] }) {}
}

export class UpsertFoo implements Action {
  readonly type = FoosActionTypes.UpsertFoo
  constructor(public payload: { foo: Foo }) {}
}

export class UpsertFoos implements Action {
  readonly type = FoosActionTypes.UpsertFoos
  constructor(public payload: { foos: Foo[] }) {}
}

export type FoosActionsUnion =
  | AddFoo
  | AddFoos
  | ClearFoos
  | DeleteFoo
  | DeleteFoos
  | LoadFoos
  | LoadFoosFailure
  | LoadFoosSuccess
  | UpdateFoo
  | UpdateFoos
  | UpsertFoo
  | UpsertFoos

export const FoosActions = {
  AddFoo,
  AddFoos,
  ClearFoos,
  DeleteFoo,
  DeleteFoos,
  LoadFoos,
  LoadFoosFailure,
  LoadFoosSuccess,
  UpdateFoo,
  UpdateFoos,
  UpsertFoo,
  UpsertFoos,
}
