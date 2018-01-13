import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "hourDecimal"
})
export class HourDecimalPipe implements PipeTransform {

    transform(value: number, ...args) {
        value = value || 0;
        const formatValue = value.toString().split('.');
        const hours = formatValue[0];
        const minutes = !!formatValue[1] ? formatValue[1].slice(0, 2) : 0;
        return `${hours}H ${minutes}min`;
    }
}
