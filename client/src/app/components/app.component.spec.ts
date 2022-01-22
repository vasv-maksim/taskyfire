import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

declare global { interface Window { TEST_ENV_VAR: string; } }
window.TEST_ENV_VAR = 'test'; // Глобальная константа из Webpack DefinePlugin

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Нет данных, подходящих под условие поиска', () => {
    expect(window.TEST_ENV_VAR).toBeDefined();
  });

  it('should render .app', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div.app')).toBeTruthy();
  });

  it('should render tkr-header', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('tkr-header')).toBeTruthy();
  });

  it('should render tkr-columns', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('tkr-columns')).toBeTruthy();
  });

  afterEach(() => {
    fixture.destroy();
  });
});
