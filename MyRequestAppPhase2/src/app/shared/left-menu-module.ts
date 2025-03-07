// ✅ Import PrimeNG Modules
import { SidebarModule } from 'primeng/sidebar';   // For collapsible sidebar
import { MenuModule } from 'primeng/menu';         // For menu items
import { ButtonModule } from 'primeng/button';     // For toggle button
import { PanelMenuModule } from 'primeng/panelmenu'; // Optional: Tree-like menu
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router'; // ✅ For routerLink support
import { CommonModule } from '@angular/common'; // ✅ Required for Angular directives

@NgModule({
    imports : [
        SidebarModule,  // ✅ Required for <p-sidebar>
        MenuModule,     // ✅ Required for <p-menu>
        ButtonModule,   // ✅ Required for <p-button>
        PanelMenuModule, // ✅ (Optional) Tree structure menu,
        BrowserAnimationsModule,
        RouterModule,
        CommonModule
    ],
    exports : [
        SidebarModule,  // ✅ Required for <p-sidebar>
        MenuModule,     // ✅ Required for <p-menu>
        ButtonModule,   // ✅ Required for <p-button>
        PanelMenuModule, // ✅ (Optional) Tree structure menu
        BrowserAnimationsModule,
        RouterModule,
        CommonModule
    ]
})

export class LeftMenuSharedModule{}