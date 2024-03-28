import {
  Firestore,
  addDoc,
  collection,
  collectionData,
} from '@angular/fire/firestore';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';

import { MenuItem } from '@/MenuItem';

@Injectable({
  providedIn: 'root',
})
export class MenuItemService {
  firestore: Firestore = inject(Firestore);
  collection = collection(this.firestore, 'MenuItems');
  storage = inject(Storage);

  getAll() {
    return (collectionData(this.collection) as Observable<MenuItem[]>).pipe(
      map(async (a) => {
        let mappedItems: MenuItem[] = [];
        for await (const menuItem of a) {
          const image =
            menuItem['image'].length > 0
              ? await getDownloadURL(ref(this.storage, menuItem['image']))
              : '';

          mappedItems.push({
            ...menuItem,
            image,
          });
        }
        return mappedItems;
      }),
    );
  }

  addOne(menuItem: MenuItem) {
    return addDoc(this.collection, menuItem);
  }
}
