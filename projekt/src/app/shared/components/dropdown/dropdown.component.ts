import { Component, EventEmitter, Output } from '@angular/core';
import { NAME_LASTNAME } from '@app/shared/utils/constatnts';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  shevronPosition: string = 'rotate(90deg)';

  @Output() showInformationHandler: EventEmitter<void> =
    new EventEmitter<void>();

  showDropdown() {
    this.shevronPosition = 'rotate(270deg)';
  }

  hideDropdown() {
    this.shevronPosition = 'rotate(90deg)';
  }

  resetSettings() {
    console.log('Settings have been reset.');
  }

  showInformation() {
    this.showInformationHandler.emit();
  }
}
