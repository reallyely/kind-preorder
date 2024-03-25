import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
})
export class MenuItemComponent {
  newMenuItemForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(null),
  });
  route = inject(Router);
  submitNewMenuItem(...all: unknown[]) {}
}
