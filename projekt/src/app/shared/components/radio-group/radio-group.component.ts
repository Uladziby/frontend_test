import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RadioGroupOptions } from '@app/shared/utils/types';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss',
})
export class RadioGroupComponent {
  selectedOption: string = '';

  @Input() options: RadioGroupOptions[] = [];

  @Output() changeValueHandler: EventEmitter<string> =
    new EventEmitter<string>();

  onChangeValue(event: Event) {
    this.selectedOption = (event.target as HTMLSelectElement).value;
    this.changeValueHandler.emit(this.selectedOption);
  }
}
