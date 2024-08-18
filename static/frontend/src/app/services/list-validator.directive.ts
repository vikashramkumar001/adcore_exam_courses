import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[listValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: ListValidatorDirective, multi: true}]
})
export class ListValidatorDirective implements Validator {
  @Input('listValidator') targetList!: string[];

  constructor() {
  }

  validate = (control: AbstractControl): { [key: string]: any } | null => {
    let result: ValidationErrors | null = {invalidValue: control.value};
    if ((control.dirty || control.touched) && (control.valid)) {
      for (const each of this.targetList) {
        if (each.toLowerCase() === control.value.toLowerCase()) {
          result = null;
          break;
        }
      }
    }
    return result;
  }
}
