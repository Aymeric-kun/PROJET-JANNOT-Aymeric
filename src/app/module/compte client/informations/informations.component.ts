import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../../model/client';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {

  constructor() { }

  @Input () client : Client;

  ngOnInit(): void {
  }

}
