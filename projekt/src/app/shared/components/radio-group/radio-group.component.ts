import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StateService } from '@app/core/state.service';
import { RadioGroupOptions } from '@app/shared/utils/types';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss',
})
export class RadioGroupComponent implements OnInit {
  defaultValue: string = '';

  @Input() options: RadioGroupOptions[] = [];

  @Output() changeValueHandler: EventEmitter<string> =
    new EventEmitter<string>();

  constructor(public stateService: StateService) {}

  ngOnInit() {
    this.stateService.state$.subscribe((state) => {
      this.defaultValue = state.selectedOption;
    });
  }

  onChangeValue(event: Event) {
    const selectedOption = (event.target as HTMLSelectElement).value;
    this.changeValueHandler.emit(selectedOption);
  }
}
