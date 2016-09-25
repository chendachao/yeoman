/// <reference path="../../typings/index.d.ts"/>

import {HeaderComponent} from './header.ts';
import {TestBed, async} from '@angular/core/testing';

describe('header component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render \'Fountain Generator\'', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const header = fixture.nativeElement;
    expect(header.querySelector('a').textContent.trim()).toBe('Fountain Generator');
  });
});
