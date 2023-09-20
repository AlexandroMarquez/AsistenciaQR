import { Component, OnInit, ElementRef, ViewChildren } from '@angular/core';
import type { AfterViewInit, QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.component.html',
  // styleUrls: ['./animacion.component.scss'],
})
export class AnimacionComponent  implements AfterViewInit{
  @ViewChildren(IonCard, { read: ElementRef })
  cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;

  

  constructor(private animationCtrl: AnimationController, private animation: Animation) {}

  ngAfterViewInit() {
    const card = this.animationCtrl
      .create()
      .addElement(this.cardElements.get(0).nativeElement)
      .duration(2000)
      .beforeStyles({
        filter: 'invert(75%)',
      })
      .beforeClearStyles(['box-shadow'])
      .afterStyles({
        'box-shadow': 'rgba(255, 0, 50, 0.4) 0px 4px 16px 6px',
      })
      .afterClearStyles(['filter'])
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.5)' },
        { offset: 1, transform: 'scale(1)' },
      ]);

    this.animation = this.animationCtrl.create().duration(2000).addAnimation([card]);
  }

  play() {
    this.animation.play();
  }



}
