import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { generateRandomIndex, ramdomText } from '@app/shared/utils/constatnts';
import { ContentData, RadioGroupOptions } from '@app/shared/utils/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  selectedOption: string = '';

  randomText: string = ramdomText;

  contentData: ContentData[] = [];

  url: string = '/assets/mock-data.json';

  isWarning: boolean = false;

  options: RadioGroupOptions[] = [
    { id: 1, value: '1', label: 'Opcja pierwsza' },
    { id: 2, value: '2', label: 'Opcja druga' },
    { id: 3, value: 'option_random', label: 'Opcja losowa' },
  ];

  constructor(private http: HttpClient) {}

  onSelectionChange(event: string) {
    this.selectedOption = event;
  }

  ngOnInit() {
    this.http.get<ContentData[]>(this.url).subscribe((res) => {
      this.contentData = res;
    });
  }

  onChangeText() {
    this.validateInput();

    if (this.isWarning) {
      return;
    }

    const content = this.onFindBody(this.selectedOption);

    if (!content) {
      this.randomText += ' ' + this.onGetRandomText().body;
    } else {
      this.randomText += ' ' + content.body;
    }
  }

  onReplaceText() {
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
