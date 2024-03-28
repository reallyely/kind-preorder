import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'domain/MenuItem';
import { MenuItemFormComponent } from '~/storefront/menu-item/menu-item-form/menu-item-form.component';
import { MenuItemService } from '~/storefront/menu-item/menu-item.service';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule, MenuItemFormComponent],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
})
export class MenuItemComponent implements OnInit {
  route = inject(Router);
  menuItemService = inject(MenuItemService);
  menuItems!: MenuItem[];

  ngOnInit() {
    this.menuItemService
      .getAll()
      .subscribe(async (a) => (this.menuItems = await a));
  }
}
