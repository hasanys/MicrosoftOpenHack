import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopNavBarComponentComponent } from './top-nav-bar-component/top-nav-bar-component.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';

import { DataAccessService } from './data-access.service';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';

const appRoutes: Routes = [
    
	{ path: '', component: MainViewComponent },
    { path: '**', redirectTo: '' }

]

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    MainViewComponent
  ],
  imports: [
  	RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
	HttpModule,
    BrowserModule
  ],
  exports: [ RouterModule ],
  providers: [ DataAccessService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
