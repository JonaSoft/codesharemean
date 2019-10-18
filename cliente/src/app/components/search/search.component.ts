import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Flights } from '../../models/flights';

let M:any;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  forma:FormGroup;
  _flightini:number;
  _market:string;
  _codope:string;
  _flightope:number;
  _origen:string;
  _destino:string;
  _fechainit:any;
  mostrar:boolean=false;
  view:boolean=true;
  hide:boolean=false;
  data:Flights[]=[];
  datos:any={	
    "cliente":	"AM1MEXMAD16/09/2019_16/09/2019",
    "market":	"AM",
    "flightini":	"1",
    "origen":	"MEX",
    "destino":	"MAD",
    "codope":	"AM",
    "fechainit":	"16/09/2019",
    "fechaend":	"16/09/2019",
    "frecuencia":	"lunes",
    "clase":	"**",
    "comentario":	"Flight not Codeshare",
    "flightope":	"1",
    "timedep":	"18:25",
    "timearr":	"12:40",
    "fechareg":	"16/09/2019"
    };	


  constructor(private dataService:DataService) {
    
    this.forma = new FormGroup({
      'market':new FormControl(''),
      'flightini':new FormControl(''),
      'codope':new FormControl(''),
      'flightope':new FormControl(''),
      'origen':new FormControl(''),
      'destino':new FormControl(''),
      'fechainit': new FormControl('')
   })

   }

  ngOnInit() {
    //this.getFlights();
    //console.log(this.datos)
    this.addFlights(this.datos)
  }
  getFlights() {
    this.data=[];
    this.dataService.getFlights()
        .subscribe(res => {
        for(let i in res['flights']){
          this.data.push(res['flights'][i]);
        }
        console.log(this.data)
      });
    
  }
  enviarForm(){
    console.log(this.forma.value);
    this.data=[];
    this.dataService.getFlights()
        .subscribe(res => {
        for(let i in res['flights']){
          this.data.push(res['flights'][i]);
        }
        console.log(this.data)
      });
      
    this._flightini = this.forma.value.flightini;
    this._market = this.forma.value.market.toUpperCase();
    this._codope = this.forma.value.codope.toUpperCase();
    this._flightope= this.forma.value.flightope;
    this._origen = this.forma.value.origen.toUpperCase();
    this._destino = this.forma.value.destino.toUpperCase();

    this.mostrar=true;
    this.view=false;
    this.hide=true;
    //console.log(this.datos)
   
  }
  closeTable(forma:NgForm){
    this.hide = false;
    this.view = true;
    this.mostrar = false;
    //this.aviso = false;
    //this.flightArr = [ ];
    //this.flightFinal = [ ];
    this._market = "";
    this._flightini=0;
    this._codope="";
    this._flightope=0;
    this._origen="";
    this._destino="";
    this.forma.reset({
         market:"",
         flightini:"",
         codope:"",
         flightope:"",
         origen:"",
         destino:"",
         fechainit:""
       }
    )
 }
 
 addFlights(data:any= this.datos) {
  /*if(form.value._id) {
    this.updateFlight(form);
  } else {
  this.dataService.postFlight(form.value)
    .subscribe(res => {
      this.getFlights();
      //this.resetForm(form);
      //M.toast({html: 'Save Successfully'});
    });
  }*/
  this.dataService.postFlight(data)
  console.log(data,'insertado')
 }
 updateFlight(form){
  this.dataService.putFlight(form.value)
      //.subscribe(res => {
        //this.resetForm(form);
       // this.getFlights();
        //M.toast({html: 'Updated Successfully'});
      //});
}
}
