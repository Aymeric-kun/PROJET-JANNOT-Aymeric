import { product } from "../model/product"

export class AddCart {
  static readonly type = '[PANIER] Ajouter';

  constructor(public payload: product) {

  }
}

export class RemoveCart {
  static readonly type = '[PANIER] Retirer';

  constructor(public payload: string) {

  }
}

