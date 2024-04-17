import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentTypeFilterPipe } from './content-type-filter.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { ContentCardComponent } from './content-card/content-card.component';
import { MessageComponent } from './message/message.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ModifycontentformComponent } from './modifycontentform/modifycontentform.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SnackBarNotificationComponent } from './snack-bar-notification/snack-bar-notification.component';

@NgModule({
  declarations: [AppComponent,  ModifycontentformComponent, ContentDetailComponent, PageNotFoundComponent, SnackBarNotificationComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
      BrowserModule,
      CommonModule,
      HoverAffectDirective,
      FormsModule,
      MatCardModule,
      MatSliderModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
      ContentCardComponent,
      ContentListComponent,
      ContentDetailComponent,	
      	PageNotFoundComponent,
      MessageComponent,
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !isDevMode(),
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      })
  ]
})
export class AppModule { }
