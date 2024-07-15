import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shevron-svg',
  templateUrl: './shevron-svg.component.html',
})
export class ShevronSvgComponent {
  @Input() position: string = '';
}
