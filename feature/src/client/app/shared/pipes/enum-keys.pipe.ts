import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'enumKeys'
})
export class EnumKeysPipe implements PipeTransform {
    transform(value, args:string[]): any {
        let keys = [];
        // TODO: Object.keys
        for (let key in value) {
            keys.push(key);
        }
        return keys.slice(keys.length/2);
    }
}