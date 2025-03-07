import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
footerText = `© ${new Date().getFullYear()} My Angular App | All Rights Reserved.`
}
