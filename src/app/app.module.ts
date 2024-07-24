// Framework
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
// Modules
import { MainModule } from "./modules/main/main.module";
import { AppRoutingModule } from "./app-routing.module";
// Components
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        MainModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
