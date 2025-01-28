import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class FaviconService {
    changeFavicon(iconPath: string) {
      if (typeof document !== 'undefined') {
        const favicon = document.getElementById('dynamic-favicon') as HTMLLinkElement;
        if (favicon) {
          favicon.href = iconPath;
        }
      }
    }
  }
  

