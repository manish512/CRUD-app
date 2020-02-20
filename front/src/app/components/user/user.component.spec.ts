import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { FlaskclientService } from 'src/app/services/flaskclient.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserComponent } from './user.component';


describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(
          [
            { path: 'handle/:userId', component: UserComponent },
          ]
        )
      ],
      providers: [
        { provide: FlaskclientService, useClass: FlaskclientService },

      ]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(UserComponent);

        component = fixture.componentInstance;
        de = fixture.debugElement.nativeElement.querySelector('#new-btn');
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should call the add_new_blog method`, async(() => {
    spyOn(component, 'add_new_blog');
    el = fixture.debugElement.nativeElement.querySelector('#new-btn');
    el.click();
    expect(component.add_new_blog).toHaveBeenCalled();
  }));
});
