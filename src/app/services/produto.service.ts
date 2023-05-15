import { Injectable } from '@angular/core';
import { Produtos } from '../views/forms/form-controls/produtos.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  public salvar(produtos: Produtos) {
    localStorage.setItem(produtos.nomeProduto, JSON.stringify(produtos));
  }
  
}
