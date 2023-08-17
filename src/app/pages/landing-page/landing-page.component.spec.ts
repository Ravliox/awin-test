import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AppState } from 'src/app/state/app.state';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let el: DebugElement;
  let store: MockStore<AppState>;
  let initialState = {currentStep: 0}
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageComponent],
      providers: [
        provideMockStore({initialState}),
        { provide: Router, useValue: router }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch the current step action', () => {
    const callToActionButton = el.query(By.css(".landing-page-cat-button"));
    const beginRegistrationSpy = spyOn(component, 'beginRegistration').and.callThrough();
    const storeSpy = spyOn(store, "dispatch").and.callThrough();

    callToActionButton.triggerEventHandler('click');
    fixture.detectChanges();

    expect(beginRegistrationSpy).toHaveBeenCalledTimes(1);
    expect(storeSpy).toHaveBeenCalledTimes(1);
    expect(router.navigate).toHaveBeenCalledWith(['/user-form']);
  });
});
