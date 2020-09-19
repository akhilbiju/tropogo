import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './discard-modal.component.html',
  styleUrls: ['./discard-modal.component.css'],
})
export class DiscardModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DiscardModalComponent>) {}

  ngOnInit(): void {}

  continue() {
    this.dialogRef.close(true);
  }
}
