//import { HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  theme: Theme = 'theme-light' ;
 

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ){
    

  }
  ngOnInit(): void {
    
   
    this.initializeTheme();
   
    
  }
  switchTheme(){
    this.document.body.classList.replace(this.theme, this.theme==='theme-light'
     ?
     (this.theme = 'theme-dark')
     :
    (this.theme='theme-light') )
    localStorage.setItem('theme', this.theme);
    
  }

  initializeTheme = (): void =>{
   
  this.theme=localStorage.getItem('theme') as Theme;
  this.renderer.addClass(this.document.body, this.theme);
  }
  checkToggle() : boolean{
   return this.theme=='theme-light' ? false : true

  }

  title = 'my-wishlist';
}

export type Theme= 'theme-light' | 'theme-dark';