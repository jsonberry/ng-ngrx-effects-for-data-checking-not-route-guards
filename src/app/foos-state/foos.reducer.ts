import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'
import { FoosActionsUnion, FoosActionTypes } from './foos.actions'

export interface Foo {
  id: string
  data: any
}

export interface FoosState extends EntityState<Foo> {
  loaded: boolean
}

export const adapter: EntityAdapter<Foo> = createEntityAdapter<Foo>()

export const initialState: FoosState = adapter.getInitialState({
  loaded: false,
})

export function FoosReducer(
  state = initialState,
  action: FoosActionsUnion,
): FoosState {
  switch (action.type) {
    case FoosActionTypes.AddFoo: {
      return adapter.addOne(action.payload.foo, state)
    }

    case FoosActionTypes.UpsertFoo: {
      return adapter.upsertOne(action.payload.foo, state)
    }

    case FoosActionTypes.AddFoos: {
      return adapter.addMany(action.payload.foos, state)
    }

    case FoosActionTypes.UpsertFoos: {
      return adapter.upsertMany(action.payload.foos, state)
    }

    case FoosActionTypes.UpdateFoo: {
      return adapter.updateOne(action.payload.foo, state)
    }

    case FoosActionTypes.UpdateFoos: {
      return adapter.updateMany(action.payload.foos, state)
    }

    case FoosActionTypes.DeleteFoo: {
      return adapter.removeOne(action.payload.id, state)
    }

    case FoosActionTypes.DeleteFoos: {
      return adapter.removeMany(action.payload.ids, state)
    }

    case FoosActionTypes.LoadFoosSuccess: {
      return {
        ...adapter.addAll(action.payload.foos, state),
        loaded: true,
      }
    }

    case FoosActionTypes.ClearFoos: {
      return adapter.removeAll({ ...state })
    }

    default:
      return state
  }
}

export const {
  selectIds: getFoosIds,
  selectEntities: getFoosEntities,
  selectAll: getAllFoos,
  selectTotal: getFoosTotal,
} = adapter.getSelectors()
