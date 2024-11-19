import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{
  currentStatus= signal<'online' | 'offline' | 'unknown'> ('offline');
  private destroyRef = inject(DestroyRef);

  constructor(){

    // Effect to log status change every 5 seconds
    //Sometime angular doesn't support subscription the effect function allows angular to setup a subscription.

    // this allows you to run code when signal values change
    effect(()=>{
      console.log(this.currentStatus());

    })
  }


  ngOnInit(){
    console.log("On Init");
  const interval = setInterval(() => {
      const rnd = Math.random(); //0-0.999999999999
      if (rnd < 5) {
        this.currentStatus.set('online');
      }else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      }else{
       this.currentStatus.set('unknown');
      }

      // New Angular method to destroy

    this.destroyRef.onDestroy(()=> {
    clearInterval(interval);
    })
    }, 5000);

  }

  ngAfterViewInit(){
    console.log('After view init');
  }

  // Older method to destroy

  // ngOnDestroy(){
  //   clearTimeout(this.interval);
  //   }
}
