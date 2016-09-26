import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import template from './home.component.html!text';
import styles from './home.component.scss!';

import { NameListService } from '../shared/index';

import { PAGE_TEMPLATE } from './demos.constants';
import { Theme, Mode } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    selector: 'fountain-home',
    template: template,
    styles: [styles]
})
export class HomeComponent {

    mode: string;
    theme: string;
    gutter: boolean;
    readOnly: boolean;
    resize: boolean;
    autoUpdateContent:boolean;  // will ace's content auto update or not
    cursor: any;    // cursor's position in ace editor
    aceEditor: any; // ace editor
    text: string;   // code content

    themes = Theme; // TODO: maybe I can integrate this property in ace's folder
    modes = Mode;

    constructor(private nameListService: NameListService) {
        this.text = PAGE_TEMPLATE('myApp', 'myController', 'myService', 'Click');  // TODO: improve get default style
        this.autoUpdateContent = false;  // TODO: set default value in html elment tag
        this.gutter = true;
        this.readOnly = false;
        this.resize = true;

        this.theme = 'monokai';
        this.mode = 'javascript';
    }

    insertCode() {
        // this.aceEditor.gotoLine(this.cursor.row+1, this.cursor.column);
        this.aceEditor.insert('Hello, world!')
    }

    onTextChange(text:string) {
        this.text = text;
    }

}
