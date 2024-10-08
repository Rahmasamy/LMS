import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
 

  showSuccess(message: string, title: string) {
    return Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      confirmButtonText: 'OK',
    });
  }

  showError(message: string, title: string) {
    return Swal.fire({
      icon: 'error',
      title: title,
      text: message,
      confirmButtonText: 'Try Again',
    });
  }
}
