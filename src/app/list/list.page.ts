import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public showPass:Array<boolean>=[];
  public items: Array<{ title: string; note: string; }> = [];
  constructor(private stor:Storage) {
   
  }

  ngOnInit() {
   this.getVal(); 
  }

  getVal(){    
    let i=0;
    this.stor.forEach((val,key)=>{      
      this.items.push({
       title: key,
       note:val
      });
      this.showPass[i]=false;
      i+=1;
    })
  }

  showPassword(ind){
    this.showPass[ind]=!this.showPass[ind];
  }
}
