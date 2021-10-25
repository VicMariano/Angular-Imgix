export interface IInputs{
  label: string;
  tag: string,
  type: number,
  default: number | string | boolean,
  min?: number,
  max?: number,
  options: string[],
  possible_valuesNum: number[],
  possible_valuesStr: string[],
}
