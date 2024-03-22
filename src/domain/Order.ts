import { MenuItem } from './MenuItem';

export interface Order {
  items: MenuItem[];
  neededBy: Date;
  requestedOn: Date;
  status:
    | 'open'
    | 'confirmed'
    | 'rejected'
    | 'closed complete'
    | 'closed incomplete';
}
