import { Component } from '@angular/core';
import { studentProfile } from '../../model/studentProfile';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

 profiles : studentProfile[] = []

 ngOnInit(){
   this.profiles.push({studentname : 'Antony', age : 25})
   console.log(this.profiles)
 }

}
