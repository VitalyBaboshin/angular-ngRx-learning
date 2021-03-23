import {Component, Input} from '@angular/core';

@Component({
  selector: 'vl-error-message',
  template: '<div>{{messageProps}}</div> ',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent{
  @Input('message') messageProps = 'Something went wrong'
}
