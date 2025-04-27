import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class AddPetComponent {
  petForm: FormGroup;
  breedOptions = ['Cavachon', 'Labrador', 'Beagle', 'German Shepherd', 'Poodle', 'Boxer', 'Other'];
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private petsService: PetsService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {
    this.petForm = this.fb.group({
      name: ['', [Validators.required]],
      breed: ['', [Validators.required]],
      weight: [null, [Validators.required, Validators.min(0)]],
      gender: [''],
      birthday: [''],
      photoURL: ['assets/images/default-dog.jpg']
    });
  }

  async onSubmit() {
    if (this.petForm.valid) {
      this.isSubmitting = true;
      
      try {
        await this.petsService.addPet(this.petForm.value);
        
        const toast = await this.toastCtrl.create({
          message: 'Pet added successfully!',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
        
        this.navCtrl.navigateBack('/tabs/dogs');
      } catch (error: any) {
        console.error('Error adding pet:', error);
        
        const toast = await this.toastCtrl.create({
          message: 'Failed to add pet. Please try again.',
          duration: 2000,
          color: 'danger'
        });
        await toast.present();
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}