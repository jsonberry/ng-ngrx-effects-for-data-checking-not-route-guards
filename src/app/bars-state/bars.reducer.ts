import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'
import { BarsActionsUnion, BarsActionTypes } from './bars.actions'

export interface Bar {
  id: string
  data: any
}

export interface BarsState extends EntityState<Bar> {}

export const adapter: EntityAdapter<Bar> = createEntityAdapter<Bar>()

export const initialState: BarsState = adapter.getInitialState()

export function BarsReducer(
  state = initialState,
  action: BarsActionsUnion,
): BarsState {
  switch (action.type) {
    case BarsActionTypes.AddBar: {
      return adapter.addOne(action.payload.bar, state)
    }

    case BarsActionTypes.UpsertBar: {
      return adapter.upsertOne(action.payload.bar, state)
    }

    case BarsActionTypes.AddBars: {
      return adapter.addMany(action.payload.bars, state)
    }

    case BarsActionTypes.UpsertBars: {
      return adapter.upsertMany(action.payload.bars, state)
    }

    case BarsActionTypes.UpdateBar: {
      return adapter.updateOne(action.payload.bar, state)
    }

    case BarsActionTypes.UpdateBars: {
      return adapter.updateMany(action.payload.bars, state)
    }

    case BarsActionTypes.DeleteBar: {
      return adapter.removeOne(action.payload.id, state)
    }

    case BarsActionTypes.DeleteBars: {
      return adapter.removeMany(action.payload.ids, state)
    }

    case BarsActionTypes.LoadBarsSuccess: {
      return adapter.addAll(action.payload.bars, state)
    }

    case BarsActionTypes.ClearBars: {
      return adapter.removeAll({ ...state })
    }

    default:
      return state
  }
}

export const {
  selectIds: getBarsIds,
  selectEntities: getBarsEntities,
  selectAll: getAllBars,
  selectTotal: getBarsTotal,
} = adapter.getSelectors()
