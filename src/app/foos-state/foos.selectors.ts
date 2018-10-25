import { createSelector, createFeatureSelector } from '@ngrx/store'
import * as fromFoos from './foos.reducer'

export const getFoosState = createFeatureSelector<fromFoos.FoosState>('foos')
export const getFoosIds = createSelector(getFoosState, fromFoos.getFoosIds)
export const getFooEntities = createSelector(
  getFoosState,
  fromFoos.getFoosEntities,
)
export const getAllFoos = createSelector(getFoosState, fromFoos.getAllFoos)
export const getFoosTotal = createSelector(getFoosState, fromFoos.getFoosTotal)
export const getLoaded = createSelector(getFoosState, ({ loaded }) => loaded)

export const FoosQuery = {
  getAllFoos,
  getFooEntities,
  getFoosIds,
  getFoosState,
  getFoosTotal,
  getLoaded,
}
