import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoSvgComponent } from './components/logo-svg/logo-svg.component';
import { ButtonComponent } from './components/button/button.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ShevronSvgComponent } from './components/shevron-svg/shevron-svg.component';
import { FooterLogoComponent } from './components/footer-logo/footer-logo.component';

@NgModule({
  declarations: [
    TitleComponent,
    HeaderComponent,
    FooterComponent,
    LogoSvgComponent,
    ButtonComponent,
    RadioButtonComponent,
    RadioGroupComponent,
    DropdownComponent,
    ShevronSvgComponent,
    FooterLogoComponent,
  ],
  imports: [CommonModule],
  exports: [
    TitleComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    RadioButtonComponent,
    RadioGroupComponent,
    DropdownComponent,
    ShevronSvgComponent,
    FooterLogoComponent,
  ],
})
export class SharedModule {}
