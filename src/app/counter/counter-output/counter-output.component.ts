import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getcounter } from 'src/app/state/counter.selector';
import { counterstate } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy {
counter!:number;
counter_subscription!: Subscription;

  constructor(
    private store:Store<{counter:counterstate }> //{counter:{counter:number}} you can do like this vis interface
  ) { }
// 1st type
  // ngOnInit(): void {
  //   this.store.select('counter').subscribe(counter =>{
  //     this.counter = counter.counter;
  //   })
  // }
  // 2nd type
  ngOnInit(): void {
  //  this.counter_subscription = this.store.select('counter').subscribe(counter =>{
  //   console.log("counter is changed")
  //     this.counter = counter.counter;
  //   })
  this.store.select(getcounter).subscribe(counter =>{
    this.counter = counter;
    console.log("counter is changed");
  });
  }

  ngOnDestroy(): void {
    if(this.counter_subscription){
      this.counter_subscription.unsubscribe();
    }

  }

}
