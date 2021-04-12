import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { VideoComponent } from './pages/video/video.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'videos/:videoId',
    component: VideoComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/',
  },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, SearchComponent, VideoComponent, NavbarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
