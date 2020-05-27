import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qz-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public autor: any = {nombre: 'Manquitos Team'};

  constructor() { }

  ngOnInit() {
  }

}
