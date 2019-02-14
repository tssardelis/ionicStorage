import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { passwordModel } from '../models/passwordModel'
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoLabel:string;
  todoPassword:string;

  constructor(private stor:Storage,
    private toast:ToastController,
    private router:Router){   
  }
  
  resetVariables(){
    this.todoLabel='';
    this.todoPassword='';
  }

  savePassword(){        
    this.stor.set(this.todoLabel,this.todoPassword)
    .then(()=>{
      this.presentToast('Your password saved successfully!');
      this.resetVariables();
      this.router.navigate(['/passwords']);
    })
    .catch(()=>this.presentToast('Save failed!'))
  }  

  async presentToast(msg){
    const toast=await this.toast.create({
      message:msg,
      duration:2000
    });
    toast.present();
  }
}
