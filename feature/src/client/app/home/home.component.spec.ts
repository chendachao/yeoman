import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
    async
} from '@angular/core/testing';
import {
    BaseRequestOptions,
    ConnectionBackend,
    Http, HttpModule
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { NameListService } from '../shared/index';
import { HomeModule } from './home.module';

describe('Home component', () => {
    // setting module for testing
    // Disable old forms
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, RouterModule, HttpModule, HomeModule],
            declarations: [TestComponent],
            providers: [
                NameListService,
                BaseRequestOptions,
                MockBackend,
                {
                    provide: Http,
                    useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
                        return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
            ]
        });
    });

    it('should work',
        async(() => {
            TestBed
                .compileComponents()
                .then(() => {
                    let fixture = TestBed.createComponent(TestComponent);
                    fixture.detectChanges();

                    let homeInstance = fixture.debugElement.children[0].componentInstance;
                    let homeDOMEl = fixture.debugElement.children[0].nativeElement;

                    expect(homeInstance.nameListService).toEqual(jasmine.any(NameListService));
                    expect(homeInstance.readOnly).toBeFalsy();

                    expect(homeDOMEl.querySelectorAll('alert').length).toEqual(1);

                    homeInstance.insertCode();

                    fixture.detectChanges();

                    expect(homeDOMEl.querySelectorAll('pre').length).toEqual(1);
                    expect(homeDOMEl.querySelectorAll('pre')[0].getAttribute('ng-reflect-text')).toContain('Hello, world!');
                });

        }));
});

@Component({
    selector: 'test-cmp',
    template: '<fountain-home></fountain-home>'
})
class TestComponent {
}
