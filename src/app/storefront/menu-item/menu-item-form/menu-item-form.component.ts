import { Component, inject, signal } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
} from '@angular/fire/firestore';
import {
  ref,
  Storage,
  StorageReference,
  uploadBytes,
} from '@angular/fire/storage';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItemOption } from 'domain/MenuItem';

import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
} from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {
  FileBeforeUploadEvent,
  FileUploadHandlerEvent,
  FileUploadModule,
} from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-menu-item-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    FileUploadModule,
    ButtonModule,
    AutoCompleteModule,
    ImageModule,
  ],
  templateUrl: './menu-item-form.component.html',
  styleUrl: './menu-item-form.component.css',
})
export class MenuItemFormComponent {
  firestore: Firestore = inject(Firestore);
  storage: Storage = inject(Storage);
  router: Router = inject(Router);

  storageRef: StorageReference | null = null;
  file: File | null = null;
  image: string | undefined = undefined;
  menuOptionsCollection = collection(this.firestore, 'MenuOptions');
  menuItemsCollection = collection(this.firestore, 'MenuItems');
  menuOptions!: MenuItemOption[];

  filteredOptions = signal<string[]>([]);

  newMenuItemForm = new FormGroup({
    name: new FormControl('', { validators: Validators.requiredTrue }),
    description: new FormControl(''),
    options: new FormControl([]),
    image: new FormControl(''),
  });

  constructor() {
    collectionData(this.menuOptionsCollection)
      .pipe(map((a) => a as MenuItemOption[]))
      .subscribe((a) => (this.menuOptions = a));
  }

  async submitNewMenuItem() {
    if (this.storageRef && this.file)
      await uploadBytes(this.storageRef, this.file);

    await addDoc(this.menuItemsCollection, this.newMenuItemForm.value);
    await this.router.navigate(['/store/menu-item']);
  }

  filterMenuItemOptions(event: AutoCompleteCompleteEvent) {
    const filtered = this.menuOptions
      .filter((a) => a.name.includes(event.query))
      .map(({ name }) => name);

    return this.filteredOptions.set(filtered);
  }

  onUpload(event: FileUploadHandlerEvent) {
    this.file = event.files[0];
    this.image = URL.createObjectURL(this.file);
    this.storageRef = ref(this.storage, `menu-item-images/${this.file.name}`);
    this.newMenuItemForm.patchValue({ image: this.storageRef.fullPath });
  }
}
