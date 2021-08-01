import { Component } from '@angular/core';

declare const TEST_ENV_VAR: string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public version = 'version';

  constructor() {
    // eslint-disable-next-line no-console
    console.log('Приложение запущено в режиме:', TEST_ENV_VAR);
  }
}
