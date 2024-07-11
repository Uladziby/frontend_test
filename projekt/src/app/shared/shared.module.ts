import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponentComponent } from './components/title-component/title-component.component';
import { TitleComponent } from './components/title/title.component';



@NgModule({
  declarations: [
    TitleComponentComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
