import { Component, inject } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent {
  bsModuleRef = inject(BsModalRef);
  title = '';
  message = '';
  btnOkText = '';
  btnCancelText = '';
  result = false;

  confirm() {
    this.result = true;
    this.bsModuleRef.hide();
  }

  decline() {
    this.bsModuleRef.hide();
  }
}
