import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ListingsService } from 'src/app/services/listings.service';
import { ModalController } from '@ionic/angular';
import { ProfilePage } from '../../pages/profile/profile.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  hide:boolean = false;

  constructor(private modalController:ModalController, private listingService:ListingsService, private authService: AuthService, private auth:AngularFireAuth) { }

  ngOnInit() {
    this.auth.onAuthStateChanged(user => {
      if(user) {
        this.auth.currentUser.then(user => {
          if(user.providerData[0].providerId != 'password') {
            this.hide = true;
          }
        })
      }
    })
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: ProfilePage
    })

    await modal.present();
  }
}
