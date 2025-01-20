import { ApplicationConfig, inject, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withIncrementalHydration()),
    // provideAuth(() => {
    //   const auth = getAuth(inject(FirebaseApp));
    //   if ((auth as any)._canInitEmulator && environment.emulatorPorts?.auth) {
    //     connectAuthEmulator(auth, `http://localhost:${environment.emulatorPorts.auth}`, { disableWarnings: true });
    //   }
    //   return auth;
    // }),
  ],
};