import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
// declare let $:any;
@Component({
  selector: 'app-navpar',
  templateUrl: './navpar.component.html',
  styleUrls: ['./navpar.component.scss']
})
export class NavparComponent implements OnInit {
islogin:boolean=false;


  
  constructor( ) { 
    
  

  }


  ngOnInit() {
    let x=document.getElementById("open")

      
      $("#open").click(function(){
        x?.classList.replace("fa-outdent","fa-times")
        let leftPar=$(".contanir-nav").css("left")

        if(leftPar=="0px"){
          $(".contanir-nav").animate({left:"-250px"},500)
          x?.classList.replace("fa-times","fa-outdent")
  
      }
      else{
          $(".contanir-nav").animate({left:"0px"},500)
  
     
      }
      })
    }
  }


