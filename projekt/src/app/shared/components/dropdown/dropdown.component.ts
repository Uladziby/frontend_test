import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  shevronPosition: string = 'rotate(90deg)';

  @Output() showInformationHandler: EventEmitter<void> =
    new EventEmitter<void>();

  @Output() resetOptionsHandler: EventEmitter<void> = new EventEmitter<void>();

  showDropdown() {
    this.shevronPosition = 'rotate(270deg)';
  }

  hideDropdown() {
    this.shevronPosition = 'rotate(90deg)';
  }

  showInformation() {
    this.showInformationHandler.emit();
  }

  resetSettings() {
    this.resetOptionsHandler.emit();
  }
}
