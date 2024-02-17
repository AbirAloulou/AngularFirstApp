import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent {
  //forçage de type :  ConfirmDialogComponent => dialog
  //: el composant win man3ayatlou yothhor sous un forme de dialog ref : which means ywali dima pop up mech ala el page el kol
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  title = 'Delete';
  content = 'Are you sure you want to delete this element?';
  buttonOne = 'Cancel';
  buttonTwo = 'Delete';
}
