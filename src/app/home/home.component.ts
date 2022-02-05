import { Component, OnInit,ViewChild  } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    margin:7,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  constructor() { 
    
    
  }

  ngOnInit(): void {
    const options = {
      strings: ['اهلا بكم في عياده الشفاء',"نتمني لكم الشفاء العاجل والصحه الجيده"],
      typeSpeed: 100,
      backSpeed: 200,
      showCursor: true,
      cursorChar: '',
      loop: true
 };
 const typed = new Typed('.typed-element', options);
   
  }
}
