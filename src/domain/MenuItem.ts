export interface MenuItem {
  name: string;
  description: string;
  options: MenuItemOption[];
}

export interface MenuItemOption {
  name: string;
  description: string;
}

export interface Menu {
  name: string;
  description: string;
  items: MenuItem[];
}

export interface ScheduledMenu {
  menu: Menu;
  dateStart: Date;
  dateEnd: Date;
}

export interface Schedule {
  dateStart: Date;
  dateEnd: Date;
  recurrence: Recurrence;
}

// This seems like a solved problem. What's out there?
export interface Recurrence {
  // Annually, Weekly, Monthly
  name: string;
  // 1 Annually, 1 Weekly
  value: unknown;
}

export interface ProductionSchedule {
  date: Date;
  items: MenuItem[];
}
