import { Component, OnInit } from '@angular/core';
import { Index } from './index';

@Component({
  selector: 'app-menssage',
  templateUrl: './menssage.component.html',
  styleUrls: ['./menssage.component.css']
})
export class MenssageComponent implements OnInit {
  
  index: Index = {
    id: 1,
    nombre: 'Daniela'
  };

  users= ['Daniela','Laura','Omar'];
  
  constructor() { }

  ngOnInit(): void {
  }


}
