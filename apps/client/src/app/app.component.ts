import { Component } from '@angular/core';
import {sharedText} from '@nxt/utility';

@Component({
  selector: 'nxt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = `${sharedText} client`;
}
