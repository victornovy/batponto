import { Pipe, PipeTransform } from '@angular/core';
import * as m from 'moment';

@Pipe({
    name: 'date',
})
export class DatePipe implements PipeTransform {

    transform(value: string, ...args) {
        return m(value.toString(), 'YYYYMMDD').format('DD/MM/YYYY');
    }
}
