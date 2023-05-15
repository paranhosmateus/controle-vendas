import { Component, OnInit, Input, Injectable } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {Produtos} from '../form-controls/produtos.model';
import {ProdutoService} from '../../../services/produto.service';


@Component({
    selector: 'app-modal-cadastro',
    templateUrl: './modal-cadastro.component.html',
    styleUrls: ['./modal-cadastro.component.scss']
  })

  export class ModalCadastroComponent implements OnInit {

     public produtos!: Produtos;
  
     constructor(public activeModal: NgbActiveModal,
      private produtoService: ProdutoService
      ) {}
  
      ngOnInit() { 
       
   this.produtos = new Produtos();

      }
  
      public salvar(form: NgForm){ 
        if(form.valid){
          this.produtoService.salvar(this.produtos);
        }     
  
        }
      }
      