import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MenuItem } from '../../domain/MenuItem';

@Injectable({
  providedIn: 'root',
})
export class MenuItemService {
  firestore: Firestore = inject(Firestore);
  collection = collection(this.firestore, 'MenuItems');

  getAll() {
    return collectionData(this.collection) as Observable<MenuItem[]>;
  }
}
