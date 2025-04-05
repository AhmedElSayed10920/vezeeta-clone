import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { LoginComponent } from './app/login/login.component';

bootstrapApplication(AppComponent, {
  ...appConfig, // ✅ الاحتفاظ بالإعدادات الأصلية
  providers: [
    provideRouter(routes), // ✅ توفير التوجيه
    provideHttpClient(), // ✅ توفير HttpClient
  ],
}).catch((err) => console.error(err));

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(LoginComponent)
  .catch(err => console.error(err));
