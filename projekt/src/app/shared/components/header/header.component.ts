import { Component, Input } from '@angular/core';
import { StateService } from '@app/core/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  name: string = '';

  constructor(public stateService: StateService) {
    this.stateService.state$.subscribe((state) => {
      this.name = state.name;
    });
  }
}
