/// <reference path="../../typings/index.d.ts"/>

import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
// import 'zone.js/dist/jasmine-patch';

import {FooterComponent} from './footer.ts';
import {inject, async, TestComponentBuilder, ComponentFixture} from '@angular/core/testing';

describe('footer component', () => {
  it('should render \'FountainJS team\'', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(FooterComponent)
      .then((fixture: ComponentFixture<any>) => {
        fixture.detectChanges();
        const footer = fixture.nativeElement;
        expect(footer.querySelector('a').textContent.trim()).toBe('FountainJS team');
      });
  })));
});
