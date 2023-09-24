import { Component, ElementRef, ViewChildren, AfterViewInit, OnInit } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-animacion2',
  templateUrl: './animacion2.page.html',
  styleUrls: ['./animacion2.page.scss'],
})
export class Animacion2Page implements OnInit, AfterViewInit {

  @ViewChildren(IonCard, { read: ElementRef })
  cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;

  private animation: Animation | undefined;

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {
    // Puedes colocar la lógica de inicialización aquí si es necesario.
  }

  ngAfterViewInit() {
    // Verificar si hay elementos en cardElements antes de continuar
    if (this.cardElements && this.cardElements.length > 0) {
      const firstCard = this.cardElements.first.nativeElement;

      const card = this.animationCtrl
        .create()
        .addElement(firstCard)
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
    } else {
      console.error('No se encontraron elementos en cardElements.');
    }
  }

  play() {
    if (this.animation) {
      this.animation.play();
    } else {
      console.error('La propiedad "animation" es undefined.');
    }
  }
}
