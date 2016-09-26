import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/index';
import { NavbarComponent } from './navbar/index';
import { AceEditorDirective } from './editor/index';
import { NameListService } from './name-list/index';

import { EnumKeysPipe } from './pipes/index';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
    imports: [CommonModule, RouterModule, Ng2BootstrapModule],
    declarations: [ToolbarComponent, NavbarComponent, AceEditorDirective, EnumKeysPipe],
    exports: [ToolbarComponent, NavbarComponent, AceEditorDirective, EnumKeysPipe,
        CommonModule, FormsModule, RouterModule, Ng2BootstrapModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [NameListService]
        };
    }
}
