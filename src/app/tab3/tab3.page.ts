import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private test: Subject<boolean> = new Subject();

  constructor() {
  }

}
