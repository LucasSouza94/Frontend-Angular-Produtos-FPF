import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoModel } from '../produtos.model';


@Component({
  selector: 'app-remover-produto',
  templateUrl: './remover-produto.component.html',
  styleUrls: ['./remover-produto.component.css']
})
export class RemoverProdutoComponent implements OnInit {

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

  remover(){
    this.produtosServices.removerProduto(this.id).subscribe(pro =>{
      alert('Exclução Realizada com Sucesso!');
      this.voltar();
    })
  }

  voltar(){
    this.navegar.navigate(['/produtos']);
  }

}
