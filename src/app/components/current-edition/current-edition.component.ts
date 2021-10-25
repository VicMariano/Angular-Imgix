import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IParamGeneric } from 'src/app/interfaces/edit-type.interface';

@Component({
  selector: 'app-current-edition',
  templateUrl: './current-edition.component.html',
  styleUrls: ['./current-edition.component.css']
})
export class CurrentEditionComponent implements OnInit {
  @Input() parameters: IParamGeneric = {};
  @Output() emitNewParams: EventEmitter<IParamGeneric> = new EventEmitter<IParamGeneric>();

  constructor() { }

  ngOnInit(): void {
  }

 public remove(paramKey: string): void{
  const param =  JSON.parse(JSON.stringify(this.parameters));
  delete param[paramKey];
  this.emitNewParams.emit(param);
}

}
