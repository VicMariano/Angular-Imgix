import { Component, Input, OnInit, Output } from '@angular/core';
import { IExpects, IParameter, IParamGeneric } from 'src/app/interfaces/edit-type.interface';
import { EventEmitter } from '@angular/core';
import { IInputs } from 'src/app/interfaces/inputs.interface';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  @Output() paramEmitter: EventEmitter<IParamGeneric> = new EventEmitter<IParamGeneric>();
  @Input('parameter') public set setInputs(param: IParameter) {
    this.parameter = param;
    this.buildInputs();
  }
  public parameter: IParameter;
  public paramSelected: IParamGeneric = {};
  public inputs: IInputs;

  constructor() { }

  ngOnInit(): void {
  }

  private buildInputs(): void {
    this.inputs = {
      label: '',
      tag: '',
      type: 0,
      default: '',
      options: [],
      possible_valuesNum: [],
      possible_valuesStr: []
    };
    this.inputs.type = this.getTypeOfInput(this.getExpects().type);
    this.inputs.tag = this.parameter.tag;
    this.inputs.label = this.parameter.display_name;

    switch (this.inputs.type) {
      case 1:
        this.inputs.possible_valuesStr = this.getStrArrValues();
        this.inputs.default = this.getExpects().default;
        break;
      case 2:
        this.inputs.max = this.getMax();
        this.inputs.min = this.getMin();
        this.inputs.default = this.getExpects().default;
        break;
      case 3:
        this.inputs.max = this.getMax();
        this.inputs.min = this.getMin();
        this.inputs.possible_valuesNum = this.getNumArrValues();
        break;
      case 4:
        this.inputs.default = this.getExpects().default;
        break;

      default:
        break;
    }
  }

  public setParamWithString(tag: string, option: string): void {
    this.paramSelected = {};
    this.addParameter(tag, option);
    this.paramEmitter.emit(this.paramSelected);
  }

  public setParamWithNumber(value: number | string | boolean): void {
    this.paramSelected = {};
    this.addParameter(this.inputs.tag, Number(value));
    this.paramEmitter.emit(this.paramSelected);
  }

  public setParamBoolean(): void {
    this.inputs.default = !this.inputs.default;
    this.paramSelected = {};
    this.addParameter(this.inputs.tag, String(this.inputs.default));
    this.paramEmitter.emit(this.paramSelected);
  }

  private addParameter(key: string, value: number | string): void {
    this.paramSelected[key] = value.valueOf();
  }

  private getExpects(): IExpects {
    return this.parameter.expects[0];
  }

  private getStrArrValues(): string[] {
    let strings: string[] = []
    this.getExpects().possible_values.forEach(str => {
      strings.push(String(str))
    });
    return strings;
  }

  private getNumArrValues(): number[] {
    let numbers: number[] = []
    this.getExpects().possible_values.forEach(num => numbers.push(parseInt(num, 10)));
    return numbers;
  }

  private getMax(): number {
    if (this.parameter.expects[0].strict_range) {
      return this.parameter.expects[0].strict_range.max;
    } else if (this.parameter.expects[0].suggested_range) {
      return this.parameter.expects[0].suggested_range.max;
    } else { return 0 }
  }

  private getMin(): number {
    if (this.parameter.expects[0].strict_range) {
      return this.parameter.expects[0].strict_range.min;
    } else if (this.parameter.expects[0].suggested_range) {
      return this.parameter.expects[0].suggested_range.min;
    } else { return 0 }
  }

  private getTypeOfInput(type: string): number {
    let inputType: number;
    switch (type) {
      case 'string':
        inputType = 1;
        break;
      case 'number':
        inputType = 2;
        break;
      case 'integer':
        this.getExpects().possible_values ?
          inputType = 3 : inputType = 2;
        break;
      case 'boolean':
        inputType = 4;
        break;
      default:
        break;
    }
    return inputType;
  }
}
