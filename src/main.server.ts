import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/shared/app/app.component';
import { config } from './app/shared/app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
