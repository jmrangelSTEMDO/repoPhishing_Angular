import { trigger, transition, style, animate } from '@angular/animations';

export const slideInRight = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    style({ transform: 'translateX(100%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
  ]),
]);