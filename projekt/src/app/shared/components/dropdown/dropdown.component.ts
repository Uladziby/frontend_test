import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  isDropdownVisible = false;
  shevronPosition: string = 'rotate(90deg)';

  showDropdown() {
    this.isDropdownVisible = true;
    this.shevronPosition = 'rotate(270deg)';
  }

  hideDropdown() {
    this.isDropdownVisible = false;
    this.shevronPosition = 'rotate(90deg)';
  }

  resetSettings() {
    console.log('Settings have been reset.');
  }

  showInformation() {
    console.log('Showing information.');
  }
}
