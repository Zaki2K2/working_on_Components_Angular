import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {

  // view chiild enables to select the elements in the template
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form= viewChild.required<ElementRef<HTMLFormElement>>('form');


  enteredTitle='';
  enteredText='';


  // @Output() add = new EventEmitter<{title:string; text: string}>();
  //TypeDefinition of the Data we are emmitting
  add = output<{title:string; text: string}>();

  ngOnInit() {
    console.log('OnInit');
    console.log(this.form?.nativeElement);
  }
  ngAfterViewInit(){
    console.log('After View In it');
    console.log(this.form?.nativeElement);
  }

  // to select Multiple view child items [ViewChildren]
  // @ViewChildren(ButtonComponent) buttons: ButtonComponent;

  onSumbit(){
    this.add.emit({title:this.enteredTitle, text: this.enteredText});

    // this.form?.nativeElement.reset();
    // Reset form after submission

    // Reset form after submission
    this.enteredTitle = '';
    this.enteredText = '';
  }

}
