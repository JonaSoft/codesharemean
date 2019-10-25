import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import {DataService} from '../../servicios/data.service';

@Component({
  selector: 'app-mantenaice',
  templateUrl: './mantenaice.component.html',
  styleUrls: ['./mantenaice.component.css']
})
export class MantenaiceComponent implements OnInit {

  constructor(private dataExterna:DataService) { }

  ngOnInit() {
  }
  exportaMasivo(){
    console.log('exportación masiva')
  }

}
