import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showSuccess(message: string) {
    alert('success');
  }

  showError(message: string) {
    alert('error');
  }
}
