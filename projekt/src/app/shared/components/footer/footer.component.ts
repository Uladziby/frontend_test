import { Component, EventEmitter, Output } from '@angular/core';
import { StateService } from '@app/core/state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Output() emitInformationHandler: EventEmitter<void> =
    new EventEmitter<void>();

  @Output() emitResetOptionsHandler: EventEmitter<void> =
    new EventEmitter<void>();

  constructor(public stateService: StateService) {}

  showInformationHandler() {
    // this.emitInformationHandler.emit();

    this.stateService.setName();
  }

  resetOptionsHandler() {
    this.stateService.onResetSettings();
  }
}
