import { Routes } from '@angular/router';
import { HomeComponent } from '~/customer/home/home.component';
import { MenuItemComponent } from '~/storefront/menu-item/menu-item.component';
import { StorefrontComponent } from '~/storefront/storefront.component';
import { LandingComponent } from '../landing/landing.component';
import { AppComponent } from './app.component';
import { MenuComponent } from '~/storefront/menu/menu.component';

export const routes: Routes = [
  {
    component: AppComponent,
    path: '',
  },
  {
    component: LandingComponent,
    path: 'login',
  },
  {
    component: HomeComponent,
    path: 'home',
  },
  {
    component: StorefrontComponent,
    path: 'store',
    children: [
      {
        component: MenuItemComponent,
        path: 'menu-item',
        children: [
          {
            path: 'new',
            component: MenuItemComponent,
          },
        ],
      },
      {
        component: MenuComponent,
        path: 'menu',
      },
    ],
  },
];
