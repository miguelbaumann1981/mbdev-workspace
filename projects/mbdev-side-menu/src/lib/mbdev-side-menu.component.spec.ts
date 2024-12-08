import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbdevSideMenuComponent } from './mbdev-side-menu.component';
import { provideRouter } from '@angular/router';

describe('MbdevSideMenuComponent', () => {
  let component: MbdevSideMenuComponent;
  let fixture: ComponentFixture<MbdevSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MbdevSideMenuComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbdevSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSignIn when button is clicked', () => {
    spyOn(component.onSignIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('[data-login]') as HTMLButtonElement;
    button.click();
    expect(component.onSignIn.emit).toHaveBeenCalled();
  });

  it('should call onSignOut when button is clicked', () => {
    spyOn(component.onSignOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('[data-logout]') as HTMLButtonElement;
    button.click();
    expect(component.onSignOut.emit).toHaveBeenCalled();
  });

});
