import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Output() emitInformationHandler: EventEmitter<void> =
    new EventEmitter<void>();

  showInformationHandler() {
    this.emitInformationHandler.emit();
  }
}
