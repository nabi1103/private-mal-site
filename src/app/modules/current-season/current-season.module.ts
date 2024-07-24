// Framework
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// Project modules
import { CurrentSeasonRoutingModule } from "./current-season-routing.module";
import { CurrentSeasonComponent } from "./components/current-season/current-season.component";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
    declarations: [CurrentSeasonComponent],
    imports: [CommonModule, CurrentSeasonRoutingModule, NgxPaginationModule],
    exports: [CurrentSeasonComponent]
})
export class CurrentSeasonModule {}
