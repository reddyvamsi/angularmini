import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SahreddataService {

  constructor() { }

  public shared=new BehaviorSubject<string>('');
}
