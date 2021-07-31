import { Component } from '@angular/core';

declare const TEST_ENV_VAR;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';

  public version = '[AIV]{version} / {date}[/AIV]'; // WebpackAutoInject

  constructor() {
    // eslint-disable-next-line no-console
    console.log('TEST_ENV_VAR:', TEST_ENV_VAR);
  }
}
