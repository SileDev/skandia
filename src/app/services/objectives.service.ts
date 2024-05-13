// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProductModel } from '../models/objectives/product.model';
import { GoalModel } from '../models/objectives/goal.model';

@Injectable({
  providedIn: 'root'
})

export class ObjectivesService {
  private apiUrl = 'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

  constructor(private http: HttpClient) {}

  private testGoalData: GoalModel = {
    name: 'Tu meta',
    category: 'Bienestar',
    goalDate: new Date(2024, 12, 1),
    goalAmount: 6000000,
    balance: 0
  };

  getGoal(): Observable<GoalModel>{
    return of (this.testGoalData);
  }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.apiUrl);
  }

}
