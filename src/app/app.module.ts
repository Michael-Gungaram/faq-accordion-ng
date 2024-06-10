import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerSvgComponent } from './banner-svg/banner-svg.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { QuestionAnswerFrameComponent } from './question-answer-frame/question-answer-frame.component';
import { SvgPlaceholderComponent } from './svg-placeholder/svg-placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerSvgComponent,
    QuestionCardComponent,
    QuestionAnswerFrameComponent,
    SvgPlaceholderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
