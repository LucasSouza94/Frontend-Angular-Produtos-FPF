import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { ProdutoModel } from './produtos.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

 
  constructor(private http: HttpClient) { }


  listarProdutos(): Observable<any>{
    return this.http.get("http://localhost:8080/api/produtos");
  }

  cadastrarProduto(produto: ProdutoModel):Observable<any>{
    return this.http.post("http://localhost:8080/api/produto",produto);
  }

  buscarProduto(id: string):Observable<ProdutoModel>{  
    const url = "http://localhost:8080/api/produto/".concat(id);
    return this.http.get<ProdutoModel>(url);
  }

  atualizarProduto(produto: ProdutoModel):Observable<any>{
    const url = "http://localhost:8080/api/produto/"+ produto.id;
    return this.http.put<ProdutoModel>(url, produto);
  }

  removerProduto(id:string):Observable<ProdutoModel>{
    const url = "http://localhost:8080/api/produto/"+ id;
    console.log(url);
    return this.http.delete<ProdutoModel>(url);
  }
}


