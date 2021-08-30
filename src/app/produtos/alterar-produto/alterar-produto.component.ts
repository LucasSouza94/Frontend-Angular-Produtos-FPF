import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoModel } from '../produtos.model';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.component.html',
  styleUrls: ['./alterar-produto.component.css']
})
export class AlterarProdutoComponent implements OnInit {

  id: string;
  produto = {} as ProdutoModel;

  constructor(private produtosServices: ProdutosService, private route: ActivatedRoute, private navegar:Router) { }

  ngOnInit() {
    this.getProduto();
  }
  
  getProduto(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.produtosServices.buscarProduto(this.id).subscribe(pro =>{
      this.produto = pro;
    })
  }

  atualizar(){
      this.produtosServices.atualizarProduto(this.produto).subscribe(pro =>{
        alert(`Atualização: ${pro.descricao} Realizado com Sucesso!`);
        this.voltar();
      })
  }

  voltar(){
    this.navegar.navigate(['/produtos']);
  }

}
