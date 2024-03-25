import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
} from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FileUploadEvent, FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';

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
  ],
  templateUrl: './menu-item-form.component.html',
  styleUrl: './menu-item-form.component.css',
})
export class MenuItemFormComponent {
  newMenuItemForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    options: new FormControl([]),
    image: new FormControl(null),
  });

  optionsOptions = ['Blueberry Icing', 'Strawberries'];
  filteredOptions: string[] = this.optionsOptions;

  submitNewMenuItem(...all: unknown[]) {}

  filter(event: AutoCompleteCompleteEvent) {
    this.filteredOptions = this.optionsOptions.filter((a) => {
      console.log(a, event.query);
      return a.includes(event.query);
    });
    console.log(this.filteredOptions);
    return;
  }

  onUpload(event: FileUploadEvent) {
    console.log('upload', { event });
  }
}
