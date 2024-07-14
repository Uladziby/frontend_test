import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RadioGroupOptions } from '@app/routes/home/home.component';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss',
})
export class RadioGroupComponent implements OnInit {
  selectedOption: string = '';
  @Input() options: RadioGroupOptions[] = [];
  @Output() changeValueHandler: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnInit() {
    console.log(this.options);
  }

  onChangeValue(event: Event) {
    this.selectedOption = (event.target as HTMLSelectElement).value;
    this.changeValueHandler.emit(this.selectedOption);
  }
}
