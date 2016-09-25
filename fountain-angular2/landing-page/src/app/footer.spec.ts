/// <reference path="../../typings/index.d.ts"/>

import {FooterComponent} from './footer.ts';
import {TestBed, async} from '@angular/core/testing';

describe('footer component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render \'FountainJS team\'', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const footer = fixture.nativeElement;
    expect(footer.querySelector('a').textContent.trim()).toBe('FountainJS team');
  });
});
