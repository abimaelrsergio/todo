import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'Ocorreu um erro, entre em contato com o suporte em suporte@gmail.com'

  constructor() { }

  ngOnInit() {
  }

}
