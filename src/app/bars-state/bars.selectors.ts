import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromBars from './bars.reducer'

export const getBarsState = createFeatureSelector<fromBars.BarsState>('bars')

export const getBarsIds = createSelector(getBarsState, fromBars.getBarsIds)
export const getBarEntities = createSelector(
  getBarsState,
  fromBars.getBarsEntities,
)
export const getAllBars = createSelector(getBarsState, fromBars.getAllBars)
export const getBarsTotal = createSelector(getBarsState, fromBars.getBarsTotal)

export const BarsQuery = {
  getAllBars,
  getBarEntities,
  getBarsIds,
  getBarsState,
  getBarsTotal,
}
