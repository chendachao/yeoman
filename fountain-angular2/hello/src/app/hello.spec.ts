/// <reference path="../../typings/index.d.ts"/>

// TODO: separate such common libs in a polyfill file
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';

import { HelloComponent } from './hello.ts';

import { inject, async, TestComponentBuilder, ComponentFixture } from '@angular/core/testing';

describe('Basic test', () => {
    it('expect null is not the same thing as undefined',
        () => expect(null).not.toEqual(undefined)
    );
});

describe('hello component', () => {
    it('should render hello world', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        tcb.createAsync(HelloComponent)
            .then((fixture: ComponentFixture<any>) => {
                fixture.detectChanges();
                const hello = fixture.nativeElement;
                expect(hello.querySelector('h1').textContent).toBe('Hello World!');
            });
    })));
});


