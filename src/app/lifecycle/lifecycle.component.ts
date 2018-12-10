import { Component, OnInit, Input, OnDestroy, OnChanges, DoCheck, AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnDestroy, DoCheck, OnChanges, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
    console.log(" ---> On Init ");
  }

  ngOnDestroy() {
    console.log(" ---> on Destroy ")
  }

  ngOnChanges() {
    console.log(" ---> On Changes ");
  }

  ngDoCheck() {
    console.log(" ---> Do Check ");
  }

  ngAfterViewInit() {
    console.log(" ---> After View Init ");
  }

  ngAfterViewChecked() {
    console.log(" ---> After View Checked ");
  }

  ngAfterContentInit() {
    console.log(" ---> After Content Init ");
  }

  ngAfterContentChecked() {
    console.log(" ---> After Content Checnked ");
  }

}
