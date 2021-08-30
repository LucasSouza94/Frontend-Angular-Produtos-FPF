import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FPF-Produtos';

  constructor(private navegar:Router) { }

  ngOnInit() {
    this.navegar.navigate(['/index']);
  }

}
