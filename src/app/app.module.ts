import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputParentToChildComponent } from './components/input-parent-to-child/input-parent-to-child.component';
import { OutputChildToParentComponent } from './components/output-child-to-parent/output-child-to-parent.component';
import { OutputChildToParentClickComponent } from './components/output-child-to-parent-click/output-child-to-parent-click.component';
import { ViewchildChildToParentComponent } from './components/viewchild-child-to-parent/viewchild-child-to-parent.component';
import { ServiceSiblingComponent } from './components/service-sibling/service-sibling.component';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputParentToChildComponent,
    OutputChildToParentComponent,
    OutputChildToParentClickComponent,
    ViewchildChildToParentComponent,
    ServiceSiblingComponent,
  ],
})
export class AppModule {}
