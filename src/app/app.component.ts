import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {getCurrentUserAction} from "src/app/auth/store/actions/getCurrentUser.action";

@Component({
  selector: 'vl-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // title = 'angular-NgRx';
  constructor(private store: Store) {
  }
  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction())
  }
}
