import { createReducer, on } from "@ngrx/store";
import { _createStoreReducers } from "@ngrx/store/src/store_config";
import { decrement, increment, reset } from "./counter.action";
import { initial } from "./counter.state";

const _createReducer = createReducer(initial, on(increment, state =>{
  return {
    ...state,
    counter: state.counter + 1

  }
}),on(decrement, state =>{
  return {
   ...state,
    counter: state.counter - 1}
}), on(reset, state =>{
  return {
    ...state,
    counter:0
  }
})


)

export function createreducer(state:any, action:any){
  return _createReducer(state,action)
}
