import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PetsService } from '../../services/pets.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
})
export class DogDetailComponent implements OnInit {
  dogId: string = '';
  dog$: Observable<any>;
  selectedSegment: string = 'details';

  constructor(
    private route: ActivatedRoute,
    private petsService: PetsService,
    private navCtrl: NavController
  ) {
    this.dogId = this.route.snapshot.paramMap.get('id') || '';
    this.dog$ = this.petsService.getPetById(this.dogId);
  }

  ngOnInit() {}

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

  goBack() {
    this.navCtrl.back();
  }
}