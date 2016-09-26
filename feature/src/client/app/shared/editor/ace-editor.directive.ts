import { Directive, Input, Output, EventEmitter, ElementRef, Renderer } from '@angular/core';

import './polyfills';

declare var ace: any;

@Directive({
    selector: '[fountain-editor]'
})
export class AceEditorDirective {

    // TODO: use host bind to change styles dynamically
    _options: any;
    _readOnly: boolean = false;
    _mode: string = 'javascript';
    _theme: string = 'github';
    _gutter: boolean = false;
    _resize: boolean = true;
    _autoUpdateContent: boolean = true;

    _cursor:any;
    _aceEditor:any;

    editor: any;
    oldText: any;


    //TODO: change to  text-change
    @Output('text-change') textChange: EventEmitter<string> = new EventEmitter<string>();
    @Output('cursorChange') cursorChange: EventEmitter<any> = new EventEmitter<any>();
    @Output('ace-editorChange') aceEditorChange: EventEmitter<any> = new EventEmitter<any>();

    // TODO: Security Risk http://stackoverflow.com/questions/37092142/integrating-codemirror-with-angular2-typescript/37420075#37420075
    // https://angular.io/docs/ts/latest/api/core/index/ElementRef-class.html
    // for security concerns try to use Renderer instead
    constructor(private _element: ElementRef, private _renderer: Renderer) {
        // solution 1 use ElementRef
        let el = _element.nativeElement;
        this.editor = ace['edit'](el);

        // TODO: this is a trick to solve ace's issue,  should find a better solution later
        let vm = this;

        // TODO: rename and refactor and clean
        this.initEditor();
        this.ngEditorOnChange(vm);
        this.ngEditorOnCursorChange(vm);

        this.addAutocompleteTrigger(vm);
        this.addKeyboardShortcutsCommand();

    }

    initEditor() {

        this.editor.$blockScrolling = Infinity;
        var beautify = ace.require("ace/ext/beautify");
        this.editor.commands.addCommands(beautify.commands);

        // TODO: auto set mode by file extentions
        // let modelist = ace.require('ace/ext/modelist');
        // let mode = modelist.getModeForPath('./polyfills.ts').mode;

        // editor.setAutoScrollEditorIntoView(true);
        // TODO: discuss about set which kind of default value
        this.editor.setOptions(this._options || {
                theme: `ace/theme/${this._theme}`,
                readOnly: this._readOnly,
                // enableSnippets: true,
                // enableLiveAutocompletion: true,
                // enableBasicAutocompletion: true,
                autoScrollEditorIntoView: true,
                enableEmmet: true,
                wrap: true,
                showGutter: this._gutter
            });

        this.editor.getSession().setMode(`ace/mode/${this._mode}`);
        this.editor.setBehavioursEnabled(true);
        this.editor.getSession().setTabSize(2);
        this.editor.resize(this._resize);

    }

    ngEditorOnChange(vm) {
        this.editor.on('change', (event, editor) => {
            let newValue = editor.getValue();
            if (newValue === this.oldText) {
                return;
            }
            if (typeof this.oldText !== 'undefined') {
                vm.textChange.emit(newValue);
            }
            this.oldText = newValue;
        });
    }

    ngEditorOnCursorChange(vm) {
        this.editor.getSession().selection.on('changeCursor', (event, selection) => {
            vm.cursorChange.emit(vm.editor.getCursorPosition()); // this.editor.getCursorPosition() is short for vm.editor.selection.getCursor()
            vm.aceEditorChange.emit(vm.editor);
        });
    }

    addAutocompleteTrigger(vm) {
        // auto hint after inserting
        this.editor.commands.on("afterExec", function (e) {
            if (e.command.name == "insertstring" && /^[\w.]$/.test(e.args)) {
                vm.editor.execCommand("startAutocomplete")
            }
        });
    }

    addKeyboardShortcutsCommand() {
        // add command to lazy-load keybinding_menu extension
        this.editor.commands.addCommand({
            name: "showKeyboardShortcuts",
            bindKey: {win: "Ctrl-Shift-h"},
            exec: function (editor) {
                ace.config.loadModule("ace/ext/keybinding_menu", function (module) {
                    module.init(editor);
                    editor.showKeyboardShortcuts();
                })
            }
        });
    }

    @Input() set options(options: any) {
        this._options = options;
        this.editor.setOptions(options || {});
    }

    @Input('read-only') set readOnly(readOnly: any) {
        this._readOnly = readOnly;
        this.editor.setReadOnly(readOnly);
    }

    @Input() set mode(mode: string) {
        this._mode = mode;
        this.editor.getSession().setMode(`ace/mode/${mode}`);
    }

    @Input() set theme(theme: string) {
        this._theme = theme;
        this.editor.setTheme(`ace/theme/${theme}`);
    }

    @Input() set gutter(gutter: boolean) {
        this._gutter = gutter;
        this.editor.renderer.setShowGutter(gutter);
    }

    @Input() set resize(resize: boolean) {
        this._resize = resize;
    }

    @Input() set text(text: any) {
        text = text || '';
        if (this._autoUpdateContent) {
            this.editor.setValue(text);
            this.editor.clearSelection();
            // this.editor.focus();
        }
    }

    @Input('auto-update-content') set autoUpdateContent(status: boolean) {
        this._autoUpdateContent = status;
    }

    @Input() set cursor(cursor: any) {
        this._cursor = cursor;
    }

    @Input('ace-editor') set aceEditor(aceEditor: any) {
        this._aceEditor = aceEditor;
    }

}
