// INTERFACES FOR DIFERENT PARAMETERS' STATES
export interface IParametersFull {
  aliases: any,
  categoryValues: any[],
  colorKeywordValues: string[],
  fontValues: string[],
  parameters: {[key:string]: IParameter},
  version: string
}

export interface IParameter {
  available_in: string[],
  category: string,
  depends: string[],
  display_name: string,
  expects: IExpects[],
  short_description: string,
  url: string
  tag?: string;
}

export interface IExpects {
  default: number,
  possible_values: string [] | number[],
  strict_range?: { min: number, max: number },
  suggested_range?: { min: number, max: number },
  type: string
}

export interface IParamGeneric{
  [k: string]: string|number
}
