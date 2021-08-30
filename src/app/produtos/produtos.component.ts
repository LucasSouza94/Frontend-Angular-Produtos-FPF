import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './produtos.service'; 
import { ProdutoModel } from './produtos.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel;
  produtos: Array<any> = new Array();

  constructor(private produtosServices: ProdutosService) { }

  ngOnInit() {
    this.listarProdutos();
  }

  listarProdutos(){
    this.produtosServices.listarProdutos().subscribe(produtos =>{
      this.produtos = produtos;
    },err => {
      console.log("Erro oa listar Produtos", err)
    } )
  }

}
