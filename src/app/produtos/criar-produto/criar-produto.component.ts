import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { ProdutoModel } from '../produtos.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {

  constructor(private produtosServices: ProdutosService, private navegar:Router) { }
  produto: ProdutoModel = new ProdutoModel;

  ngOnInit() {
  }

  cadastrar(){
    console.log(this.produto);
    this.produtosServices.cadastrarProduto(this.produto).subscribe(produto =>{
      this.produto = new ProdutoModel;
      alert('Produto Cadastrado com Sucesso!');
      this.voltar();
    },err => {
      console.log("Erro ao cadastrar Produto", err)
    })
  }

  voltar(){
    this.navegar.navigate(['/produtos']);
  }

}
