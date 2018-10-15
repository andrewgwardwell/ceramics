import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'kathleenceramics';
  src='/src/assets/images/1927.jpg';
  src2='/src/assets/images/1927head.jpg';
  imagePath='';
  ngOnInit(){
    this.changeImage('boom');
  }
  changeImage= function(keyword){ 
    if (keyword== 'boom'){
      this.imagePath= this.src;
    
    } else {
      this.imagePath= this.src2;
    }
    
  }
  
}
