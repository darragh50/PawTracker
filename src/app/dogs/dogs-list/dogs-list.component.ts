import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController, GestureController, ToastController } from '@ionic/angular';
import { PetsService } from '../../services/pets.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class DogsListComponent implements OnInit {
  dogs$: Observable<any[]>;
  isLoading = true;

  constructor(
    private petsService: PetsService,
    private navCtrl: NavController,
    private gestureCtrl: GestureController,
    private toastCtrl: ToastController
  ) {
    this.dogs$ = this.petsService.getUserPets();
  }

  ngOnInit() {
    //Subscription to handle loading state
    this.dogs$.subscribe({
      next: () => this.isLoading = false,
      error: () => this.isLoading = false
    });
  }

  viewDogDetails(dogId: string) {
    this.navCtrl.navigateForward(`/dog-detail/${dogId}`);
  }

  //Pull to refresh functionality
  doRefresh(event: any) {
    //Reload dogs list
    this.dogs$ = this.petsService.getUserPets();
    
    //Complete the refresh
    setTimeout(() => {
      event.target.complete();
      this.toastCtrl.create({
        message: 'Dogs list refreshed',
        duration: 2000,
        color: 'success'
      }).then(toast => toast.present());
    }, 1000);
  }
}
