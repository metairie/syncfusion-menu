import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  AccordionModule,
  ContextMenuModule,
  MenuModule,
  SidebarModule,
  TabModule,
  ToolbarModule,
  TreeViewModule
} from '@syncfusion/ej2-angular-navigations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // angular/material
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    // ej2-angular-navigations
    AccordionModule, ContextMenuModule, MenuModule, TabModule, TreeViewModule, SidebarModule, ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
