import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonAccordionGroup, IonAccordion, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AccordionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
