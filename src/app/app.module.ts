import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosService } from './produtos/produtos.service';
import { CriarProdutoComponent } from './produtos/criar-produto/criar-produto.component';
import { AlterarProdutoComponent } from './produtos/alterar-produto/alterar-produto.component';
import { RemoverProdutoComponent } from './produtos/remover-produto/remover-produto.component';
import { InicialComponent } from './produtos/inicial/inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    CriarProdutoComponent,
    AlterarProdutoComponent,
    RemoverProdutoComponent,
    InicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpClientModule,ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
