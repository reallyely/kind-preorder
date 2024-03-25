import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItemFormComponent } from '~/storefront/menu-item/menu-item-form/menu-item-form.component';
@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuItemFormComponent],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
})
export class MenuItemComponent {
  route = inject(Router);
}
