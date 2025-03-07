import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DietryService } from '../../dietry.service';
import { DietryFacade } from '../../../state/dietry/dietry.facade';

@Component({
  selector: 'app-view-dietry',
  templateUrl: './view-dietry.component.html',
  styleUrl: './view-dietry.component.css'
})
export class ViewDietryComponent {

 
  constructor(private router : Router, private service : DietryService, private dietryFacade : DietryFacade){}

   getViewData$ = this.dietryFacade.getViewDiet_Facade()

  ngOnInit(){
   //this.service.getViewDietry().subscribe({ next: (response) => console.log("Response Data:", response),
    //error: (error) => console.error("Error:", error)})
  }

  addDiet(){
    this.router.navigate(['/view-dietry/add-dietry'])
  }

}
