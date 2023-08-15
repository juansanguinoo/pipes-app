import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de angular',
        icon: PrimeIcons.DESKTOP,
        items: [
          {
            label: 'Textos y Fechas',
            icon: PrimeIcons.ALIGN_LEFT,
            routerLink: '/',
          },
          {
            label: 'Números',
            icon: PrimeIcons.DOLLAR,
            routerLink: 'numbers',
          },
          {
            label: 'No comúnes',
            icon: PrimeIcons.GLOBE,
            routerLink: 'uncommon',
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: PrimeIcons.COG,
        items: [
          {
            label: 'Custom Pipes',
            icon: PrimeIcons.COG,
            routerLink: 'custom',
          },
        ],
      },
    ];
  }
}
