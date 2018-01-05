import { Pipe, PipeTransform } from '@angular/core';
import * as m from 'moment';

@Pipe({
    name: 'hour',
})
export class HourPipe implements PipeTransform {

    transform(value: string, ...args) {
        return m(value.toString(), 'HHmm').format('HH:mm');
    }
}
