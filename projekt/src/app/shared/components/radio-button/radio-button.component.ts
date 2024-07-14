import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RadioGroupOptions } from '@app/routes/home/home.component';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
})
export class RadioButtonComponent {
  @Input() options!: RadioGroupOptions;
  @Output() changeValueHandler: EventEmitter<string> =
    new EventEmitter<string>();
  defaultValue: string = '';

  onChangeValue(event: Event) {
    console.log((event.target as HTMLSelectElement).value);
    this.changeValueHandler.emit((event.target as HTMLSelectElement).value);
  }
}
