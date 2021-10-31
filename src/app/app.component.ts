import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  IParameter,
  IParametersFull,
  IParamGeneric,
} from './interfaces/edit-type.interface';
import { ITestImage } from './interfaces/imagen-test.interface';
import { IipuService } from './services/iipu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public testImgs: ITestImage[] = [];
  public imagesForm: FormGroup;
  public showHome = true;
  public allParameters: any = {};
  public editionSelected: IParameter;
  public parametersJSON: IParametersFull;
  public availableEditions: IParameter[] = [];
  public showEditApplied = false;
  public undoAvailable = false;
  public redoAvailable = false;
  public editionHistory: IParamGeneric[] = [];
  public actualStep: number = -1;
  public urlAndParams: string = '';
  private editionsListNames: string[] = ['rotation', 'adjustment'];

  constructor(public service: IipuService, private fb: FormBuilder) {}

  ngOnInit() {
    this.init();
  }

  public paramsModified(param: IParamGeneric): void {
    this.setEditionHistory(param);
    this.showEditApplied = Object.keys(this.getActParam()).length > 0;
    this.setUndoRedoValues();
    this.setStrParamsAndUrl();
  }

  public prevEdition(): void {
    this.actualStep--;
    this.showEditApplied = Object.keys(this.getActParam()).length > 0;
    this.setStrParamsAndUrl();
    this.setUndoRedoValues();
  }

  public nextEdition(): void {
    this.actualStep++;
    this.showEditApplied = Object.keys(this.getActParam()).length > 0;
    this.setStrParamsAndUrl();
    this.setUndoRedoValues();
  }

  public goToImg(): void {
    window.open(this.urlAndParams, '_blank');
  }

  public goToProfile(): void {
    window.open('https://www.linkedin.com/in/victoria-mariano/', '_blank');
  }

  public setParam(paramObj: IParamGeneric): void {
    if (this.actualStep === -1) {
      this.paramsModified(paramObj);
    } else {
      const key = Object.keys(paramObj)[0];
      const value = paramObj[key];
      const param = JSON.parse(JSON.stringify(this.getActParam()));
      param[key] = value;
      this.paramsModified(param);
    }
  }

  public showHomepage(showH: boolean): void {
    this.showHome = showH;
  }

  public setEditionType(editionType: IParameter) {
    this.editionSelected = editionType;
  }

  public setValueToImageForm(img: ITestImage): void {
    this.imagesForm.controls.url.setValue(img.url);
    this.imagesForm.controls.name.setValue(img.name);
    this.imagesForm.controls.path.setValue(img.path);
  }

  private formCreation(): void {
    this.imagesForm = this.fb.group({
      // original image url
      url: [''],
      // name of the image
      name: [''],
      // short path to the image to feed ixImg's "path" property
      path: [''],
      // string of parameters added
      parameters: [''],
      // handles a number from the img selector
      index: [],
    });
  }

  private setStrParamsAndUrl(): void {
    this.imagesForm.controls.parameters.setValue(
      this.getParamString(this.getActParam())
    );
    this.urlAndParams =
      this.imagesForm.controls.url.value +
      this.imagesForm.controls.parameters.value;
  }

  private getActParam(): IParamGeneric {
    if (this.actualStep === -1) {
      return {};
    } else {
      return this.editionHistory[this.actualStep];
    }
  }

  private setUndoRedoValues(): void {
    this.undoAvailable = this.actualStep >= 0;
    this.redoAvailable = this.actualStep < this.editionHistory.length - 1;
  }

  private setEditionHistory(paramObj: IParamGeneric): void {
    this.actualStep++;
    if (this.actualStep <= this.editionHistory.length - 1) {
      this.editionHistory.splice(this.actualStep);
    }
    this.editionHistory.push(paramObj);
    this.actualStep = this.editionHistory.length - 1;
    this.setUndoRedoValues();
  }

  private getParamString(paramObj: IParamGeneric): string {
    let strParam: string = '?';
    Object.keys(paramObj).forEach((paramKey) => {
      const value = paramObj[paramKey];
      strParam = strParam + paramKey + '=' + value + '&';
    });
    return strParam;
  }

  private extractAllPaths(): void {
    this.testImgs.map((img) => (img.path = this.extractPathFromUrl(img.url)));
  }

  private extractPathFromUrl(url: string): string {
    return url.slice(25, url.length);
  }

  private selectEditionTypes(allParams: IParametersFull): void {
    Object.entries(allParams).forEach(([key, value]) => {
      this.editionsListNames.includes(value.category)
        ? this.addParamToArray(key, value)
        : null;
    });
  }

  private addParamToArray(tagKey: string, value: IParameter): void {
    let param: IParameter = value;
    param.tag = tagKey;
    this.availableEditions.push(param);
  }

  private getTestImgs(): void {
    let thisSubsTestImgs: Subscription = this.service
      .getTestImgs()
      .subscribe((res: ITestImage[]) => {
        if (res) {
          this.testImgs = res;
          this.extractAllPaths();
          this.setValueToImageForm(this.testImgs[0]);
          thisSubsTestImgs.unsubscribe();
        }
      });
  }

  private getParameters(): void {
    let thisSubsParameters: Subscription = this.service
      .getParametersJSON()
      .subscribe((res: IParametersFull) => {
        if (res) {
          this.parametersJSON = res;
          this.allParameters = this.parametersJSON.parameters;
          this.selectEditionTypes(this.allParameters);
          thisSubsParameters.unsubscribe();
        }
      });
  }

  private init(): void {
    this.formCreation();
    this.getTestImgs();
    this.getParameters();
  }
}
