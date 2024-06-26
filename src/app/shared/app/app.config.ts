import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    // FIREBASE
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'kind-preorder',
          appId: '1:677443521856:web:df66474a5126b8bb1abea5',
          storageBucket: 'kind-preorder.appspot.com',
          apiKey: 'AIzaSyBaigt7gl4ZlZVgtc02IwR5dzC31Qagoa4',
          authDomain: 'kind-preorder.firebaseapp.com',
          messagingSenderId: '677443521856',
        }),
      ),
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideStorage(() => getStorage())),
  ],
};
