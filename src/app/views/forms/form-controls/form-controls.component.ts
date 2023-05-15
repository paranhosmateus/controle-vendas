import { Component, OnInit } from '@angular/core';
import { Produtos } from './produtos.model';
import { ModalCadastroComponent } from '../modal-cadastro/modal-cadastro.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss'],
 
})
export class FormControlsComponent implements OnInit{

  produtos!: Produtos;
  constructor(private modalService:  NgbModal) {}

 ngOnInit() {}

abrirModalProduto(produtos: Produtos ) {
  const modalRef = this.modalService.open(ModalCadastroComponent);
  modalRef.componentInstance.produtos = produtos;
}

  }


