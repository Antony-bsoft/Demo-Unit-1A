import { Component } from '@angular/core';
import { Router } from 'express';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css',
})
export class LeftMenuComponent {
  visible: boolean = false; // Sidebar Visibility
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      { label: 'Dashboard', icon: 'pi pi-home', routerLink: ['/dashboard'] },
      { label: 'Profile', icon: 'pi pi-user', routerLink: ['/profile'] },
      { label: 'User Summary', icon: 'pi pi-cog', routerLink: ['/settings'] },
      { separator: true },
      { label: 'Logout', icon: 'pi pi-sign-out', command: () => this.logout() }
    ];
  }

  logout() {
    alert('Logging out...');
  }
}
