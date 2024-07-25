// Framework
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// Project modules
import { CurrentSeasonRoutingModule } from "./current-season-routing.module";
import { NgxPaginationModule } from "ngx-pagination";
import { ScheduleModule } from "../schedule/schedule.module";
// Components
import { CurrentSeasonComponent } from "./components/current-season/current-season.component";

@NgModule({
    declarations: [
        CurrentSeasonComponent,
    ],
    imports: [
        CommonModule,
        CurrentSeasonRoutingModule,
        NgxPaginationModule,
        ScheduleModule,
    ],
    exports: [
        CurrentSeasonComponent,
    ]
})
export class CurrentSeasonModule { }
