import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';
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
    private navCtrl: NavController
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
}