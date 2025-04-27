import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, collection, collectionData, addDoc, doc, docData, updateDoc, deleteDoc, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  constructor(
    private auth: Auth,
    private firestore: Firestore
  ) {}

  //Get all pets for current user
  getUserPets(): Observable<any[]> {
    const user = this.auth.currentUser;
    if (!user) {
      return new Observable(subscriber => subscriber.complete());
    }
    
    const petsCollection = collection(this.firestore, 'pets');
    const q = query(petsCollection, where('owner', '==', user.uid));
    return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  }

  //Get a specific pet by ID
  getPetById(petId: string): Observable<any> {
    const petDocRef = doc(this.firestore, `pets/${petId}`);
    return docData(petDocRef, { idField: 'id' }) as Observable<any>;
  }

  //Add a new pet
  addPet(pet: any): Promise<any> {
    const user = this.auth.currentUser;
    if (!user) {
      return Promise.reject('User not authenticated');
    }
    
    const petsCollection = collection(this.firestore, 'pets');
    return addDoc(petsCollection, {
      ...pet,
      owner: user.uid,
      createdAt: new Date()
    });
  }

  //Update pet details
  updatePet(petId: string, petData: any): Promise<void> {
    const petRef = doc(this.firestore, `pets/${petId}`);
    return updateDoc(petRef, petData);
  }

  //Delete a pet
  deletePet(petId: string): Promise<void> {
    const petRef = doc(this.firestore, `pets/${petId}`);
    return deleteDoc(petRef);
  }
}