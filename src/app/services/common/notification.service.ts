import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { NotificationComponent } from '../../components/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  // openNotification(title: string, message: string, type: string, duration: number = 5) {
  //   this.snackBar.openFromComponent(NotificationComponent, {
  //     data: {
  //       title,
  //       message,
  //       type
  //     },
  //     duration: duration * 1000,
  //     horizontalPosition: 'right',
  //     verticalPosition: 'top'
  //   });
  // }

  // successNotification(message: string, duration: number = 5) {
  //   this.snackBar.openFromComponent(NotificationComponent, {
  //     data: {
  //       title: '¡MUY BIEN!',
  //       message,
  //       type: 'success'
  //     },
  //     duration: duration * 1000,
  //     horizontalPosition: 'right',
  //     verticalPosition: 'top'
  //   });
  // }

  // errorNotification(message: string, duration: number = 5) {
  //   this.snackBar.openFromComponent(NotificationComponent, {
  //     data: {
  //       title: '¡LO SENTIMOS!',
  //       message,
  //       type: 'error'
  //     },
  //     duration: duration * 1000,
  //     horizontalPosition: 'right',
  //     verticalPosition: 'top'
  //   });
  // }
}
