import { Component, Input, HostBinding, HostListener, ViewEncapsulation, input, inject, ElementRef } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'], // Corrected to "styleUrls" to properly apply CSS
  encapsulation: ViewEncapsulation.None, // Allows styles to apply globally rather than being encapsulated in the component
  host: {
      class: 'control',             // Host property to add a 'control' class to the component's host element
      '(click)': 'onClick()'         // Host property to add a click event listener to the host element
  }
})
export class ControlComponent {
  // Adds the 'control' class to the host element (component itself)
  // @HostBinding('class') className = 'control';

  // // Attaches a click event listener to the host element
  // @HostListener('click')

  // Defines an input property 'label' of type string to receive data from the parent component
  label = input.required<string>();
  private el = inject(ElementRef)
  onClick() {
    console.log('Clicked');
    console.log(this.el);

  }
}
