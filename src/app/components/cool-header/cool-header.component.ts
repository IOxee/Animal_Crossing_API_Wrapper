import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-cool-header',
  templateUrl: './cool-header.component.html',
  styleUrls: ['./cool-header.component.scss'],
})
export class CoolHeaderComponent  implements OnInit {
  @Input() title: string = 'ACNH Villagers';
  @Input() color: string = 'var(--ion-color-primary)';

  @Input() showSaveButton: boolean = false;
  @Input() saveFunction(): void {}

  @ViewChild('toolbar', {
    static: false
  }) toolbar: ElementRef | undefined;

  // make ma function called getCSSVarValue
  getCSSVarValue(varName: string): string {
    return getComputedStyle(document.documentElement).getPropertyValue(varName);
  }

  /*
    <ion-header class="ion-no-border" id="cool-header">
      <ion-toolbar #toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" icon="chevron-back-outline" defaultHref="/home"></ion-back-button>
        </ion-buttons>
        <ion-title mode="ios">{{ title }}</ion-title>
        <ion-buttons slot="primary" *ngIf="showSaveButton">
          <ion-button (click)="saveFunction()">
            <ion-icon slot="icon-only" name="save"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  */


  constructor() {
    this.color = this.getCSSVarValue('--ion-color-danger');
    let HTMLHeader = document.getElementById('cool-header') as HTMLElement;
    console.log('HTMLHeader', HTMLHeader);
    if (HTMLHeader) {
      HTMLHeader.style.setProperty('--background', this.color);

    }
  }

  ngOnInit() {
    setTimeout(() => {
      if (this.toolbar) {
        this.toolbar.nativeElement.style.setProperty('--background', this.color);
      }
    }, 0);
  }

}
