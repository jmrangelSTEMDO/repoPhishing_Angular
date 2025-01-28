import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';

import { appConfig } from './app.config';


const clientConfig: ApplicationConfig = {
  providers: [
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
  ]
};

export const config = mergeApplicationConfig(appConfig, clientConfig);