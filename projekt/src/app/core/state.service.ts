import { Injectable } from '@angular/core';
import { randomText, NAME_LASTNAME } from '@app/shared/utils/constatnts';
import { InitailState } from '@app/shared/utils/types';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StateService {
  currentState: InitailState = {
    name: '',
    selectedOption: '',
    defaultText: randomText,
  };

  private state = new BehaviorSubject<InitailState>(this.currentState);

  state$ = this.state.asObservable();

  onResetSettings() {
    this.state.next({
      name: '',
      selectedOption: '',
      defaultText: randomText,
    });
  }

  setName() {
    this.state.next({ ...this.state.value, name: NAME_LASTNAME });
  }

  setSelectedOption(option: string) {
    this.state.next({ ...this.state.value, selectedOption: option });
  }

  setText(text: string) {
    this.state.next({ ...this.state.value, defaultText: text });
  }
}
