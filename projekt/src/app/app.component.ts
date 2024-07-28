import { Component } from '@angular/core';
import { StateService } from '@app/core/state.service';
import { NAME_LASTNAME } from '@app/shared/utils/constatnts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = 'projekt';

  public name = '';

  public selectedOption = '';

  constructor(public stateService: StateService) {}

  showInformationHandler() {
    this.name = NAME_LASTNAME;
  }
}
