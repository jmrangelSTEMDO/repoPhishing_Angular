import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [

    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(),
    provideRouter(routes,
      withViewTransitions(),
      withComponentInputBinding(),
      withInMemoryScrolling({scrollPositionRestoration: "enabled"})
    ),
    provideClientHydration(withIncrementalHydration()),
    provideAnimations(),
  ],
};