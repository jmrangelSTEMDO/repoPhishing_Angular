import { Injectable } from '@angular/core';

declare var gtag :Function ;

@Injectable({providedIn: 'root'})
export class gAnalyticsService {

  trackEvent(eventName: string, eventDetails: string, eventCategory: string) {
    gtag('event', eventName, {
    // event Type - ejemplo: 'SCROLL_TO_TOP_CLICKED'
    'event_category': eventCategory,
    // la etiqueta que aparecerá en el panel como el nombre del evento
    'event_label': eventName,
    // una breve descripcion de lo que pasa
    'value': eventDetails
    })
  }
}