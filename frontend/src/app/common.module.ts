import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
declarations:[
    HeaderComponent
],
exports:[
    HeaderComponent
],
imports:[
    FormsModule,
    BrowserModule,
    AppRoutingModule
]
})
export class SimilarModule{}