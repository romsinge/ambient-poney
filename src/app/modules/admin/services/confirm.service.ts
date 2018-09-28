import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  _isOpen: boolean

  get isOpen() {
    return this._isOpen
  }
  set isOpen(bool) {
    this._isOpen = bool
  }
}
