import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-storefront',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './storefront.component.html',
  styleUrl: './storefront.component.css',
})
export class StorefrontComponent {
  navOptions: MenuItem[] = [
    {
      label: 'Menu Items',
      routerLink: 'menu-item',
    },
    {
      label: 'Menus',
      routerLink: 'menu',
    },
    {
      label: 'Schedule',
    },
    {
      label: 'Orders',
    },
  ];
}
