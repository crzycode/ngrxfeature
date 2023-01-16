import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterstate } from "./counter.state";

const getcounterstate = createFeatureSelector<counterstate>('counter');


export const getcounter = createSelector(getcounterstate, state =>{
  return state.counter;
})
export const getmyname = createSelector(getcounterstate, state => {
  return state.myname;
});
