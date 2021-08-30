import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlterarProdutoComponent } from './produtos/alterar-produto/alterar-produto.component';
import { CriarProdutoComponent } from './produtos/criar-produto/criar-produto.component';
import { InicialComponent } from './produtos/inicial/inicial.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { RemoverProdutoComponent } from './produtos/remover-produto/remover-produto.component';


const routes: Routes = [
  {path: 'index', component:InicialComponent},
  {path: 'produtos', component:ProdutosComponent},
  {path: 'produtos/criar', component:CriarProdutoComponent},
  {path: 'produtos/alterar/:id', component:AlterarProdutoComponent},
  {path: 'produtos/remover/:id', component:RemoverProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
