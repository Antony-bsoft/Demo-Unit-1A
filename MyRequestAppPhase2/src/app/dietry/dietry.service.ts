import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root', // This ensures the service is available application-wide
})

export class DietryService {

    constructor(private http : HttpClient){}

    getViewDietry() : Observable<any>{
        return this.http.get<any>('https://localhost:7039/api/FreightTable/GetFreightbaselineData').pipe(map(x => x))
    }
}