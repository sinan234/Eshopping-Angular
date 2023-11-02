import { Component, Input,Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() call: number=0;
  @Input() avail: number=0;
  @Input() notavail: number=0;

  selectedbutton: string='All'
  
  @Output()
  Buttonchanged: EventEmitter <string>=new EventEmitter <string>();

  onbuttonchanged(){
    this.Buttonchanged.emit(this.selectedbutton);
  }
}
