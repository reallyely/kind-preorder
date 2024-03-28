import { MenuItem } from '@/MenuItem';
import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
} from '@angular/fire/firestore';
import {
  getDownloadURL,
  ref,
  Storage,
  StorageReference,
} from '@angular/fire/storage';
import { map, Observable } from 'rxjs';

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
        return (await Promise.all(mappedItems)) as MenuItem[];
      }),
    );
  }

  addOne(menuItem: MenuItem) {
    return addDoc(this.collection, menuItem);
  }
}
