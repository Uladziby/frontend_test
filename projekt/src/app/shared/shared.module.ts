import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoSvgComponent } from './components/logo-svg/logo-svg.component';

@NgModule({
  declarations: [TitleComponent, HeaderComponent, FooterComponent, LogoSvgComponent],
  imports: [CommonModule],
  exports: [TitleComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
