import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonItem, IonAccordionGroup, IonAccordion, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AccordionPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    console.log('OI ACCORDION');
  }

  goToAlertPage() {
    this.route.navigateByUrl('alert');
  }

}
