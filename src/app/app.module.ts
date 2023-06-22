import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputParentToChildComponent } from './components/input-parent-to-child/input-parent-to-child.component';
import { OutputChildToParentComponent } from './components/output-child-to-parent/output-child-to-parent.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputParentToChildComponent,
    OutputChildToParentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
