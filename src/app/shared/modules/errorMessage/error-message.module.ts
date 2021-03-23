import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { ErrorMessageComponent } from 'src/app/shared/modules/errorMessage/components/error-message/error-message.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorMessageComponent],
  exports: [ErrorMessageComponent]
})
export class ErrorMessageModule {

}
