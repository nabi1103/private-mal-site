// Framework
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// Project modules
import { MainRoutingModule } from "./main-routing.module";
// Components
import { MainComponent } from "./components/main/main.component";
import { HeaderModule } from "../header/header.module";
import { CurrentSeasonModule } from "../current-season/current-season.module";

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        HeaderModule,
        CurrentSeasonModule,
    ],
})
export class MainModule {}
