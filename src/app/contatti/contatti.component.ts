import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {
  nome: string = '';
  email: string = '';
  messaggio: string = '';

  constructor() { }

  ngOnInit(): void { }

  onSubmit(): void {
    console.log('Nome:', this.nome);
    console.log('Email:', this.email);
    console.log('Messaggio:', this.messaggio);

    this.nome = '';
    this.email = '';
    this.messaggio = '';
  }
}
