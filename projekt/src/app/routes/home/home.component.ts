import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BASE_URL,
  generateRandomIndex,
  verifyDuplicateText,
} from '@app/shared/utils/constatnts';
import { ContentData, RadioGroupOptions } from '@app/shared/utils/types';
import { StateService } from '@app/core/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  selectedOption: string = '';

  randomText: string = '';

  contentData: ContentData[] = [];

  isWarning: boolean = false;

  isExistText: boolean = false;

  options: RadioGroupOptions[] = [
    { id: 1, value: '1', label: 'Opcja pierwsza' },
    { id: 2, value: '2', label: 'Opcja druga' },
    { id: 3, value: 'option_random', label: 'Opcja losowa' },
  ];

  constructor(private http: HttpClient, public stateService: StateService) {}

  ngOnInit() {
    this.http.get<ContentData[]>(BASE_URL).subscribe((res) => {
      this.contentData = res;
    });

    this.stateService.state$.subscribe((state) => {
      this.selectedOption = state.selectedOption;
      this.randomText = state.defaultText;
    });
  }

  onSelectionChange(event: string) {
    this.selectedOption = event;
    this.stateService.setSelectedOption(event);
  }

  onChangeText() {
    this.isExistText = false;

    this.validateInput();

    if (this.isWarning) return;

    const content = this.onFindBody(this.selectedOption);

    if (content) {
      this.isExistText = verifyDuplicateText(this.randomText, content.body);

      if (this.isExistText) return;

      this.randomText += ' ' + content.body;
    } else {
      this.isExistText = verifyDuplicateText(
        this.randomText,
        this.onGetRandomText().body
      );

      if (this.isExistText) return;

      this.randomText += ' ' + this.onGetRandomText().body;
    }

    this.stateService.setText(this.randomText);
  }

  onReplaceText() {
    this.isExistText = false;

    this.validateInput();

    if (this.isWarning) {
      return;
    }

    const content = this.onFindBody(this.selectedOption);

    if (!content) {
      this.randomText = this.onGetRandomText().body;
    } else {
      this.randomText = content.body;
    }

    this.stateService.setText(this.randomText);
  }

  onFindBody(value: string) {
    return this.contentData.find((item) => item.id === Number(value));
  }

  onGetRandomText() {
    const max = this.contentData.length - 1;
    const min = 2;
    const randomIndex = generateRandomIndex(max, min);
    return this.contentData[randomIndex];
  }

  validateInput() {
    if (!this.selectedOption) {
      this.isWarning = true;
    } else {
      this.isWarning = false;
    }
  }
}
