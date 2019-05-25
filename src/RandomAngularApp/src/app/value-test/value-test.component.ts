import { Component, OnInit } from '@angular/core';
import { ValueTestService } from './value-test.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-value-test',
  templateUrl: './value-test.component.html',
  styleUrls: ['./value-test.component.css']
})
export class ValueTestComponent implements OnInit {

  public value$: Observable<any>;

  constructor(private valueTestService: ValueTestService) {
    this.value$ = valueTestService.getValue();
  }

  ngOnInit() {
  }

}
