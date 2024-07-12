import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  selectedOption: string = '';

  onSelectionChange(event: Event) {
    this.selectedOption = (event.target as HTMLSelectElement).value;
    console.log(this.selectedOption);
  }
}
