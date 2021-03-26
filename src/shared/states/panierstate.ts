import {State, Action, StateContext, Selector} from '@ngxs/store';
import {AddCart, RemoveCart} from '../actions/panier.action';
import {Injectable} from '@angular/core';
import { PanierStateModel} from './panierstatemodel';

@State<PanierStateModel>({
  name: "panier",
  defaults: {
    panier: []
  }
})

@Injectable()
export class PanierState {
  @Selector()
  static getPaniers(state: PanierStateModel){
    return state.panier.length
  }

  @Action(AddCart)
  add({getState, patchState}: StateContext<PanierStateModel>, {payload}:AddCart){
    const state = getState();
    patchState({
      panier: [...state.panier, payload]
    })
  }

  @Action(RemoveCart)
  remove({getState, patchState}: StateContext<PanierStateModel>, {payload}:RemoveCart){
    patchState({
      panier: getState().panier.filter(a => a.name != payload)
    })
  }
}
