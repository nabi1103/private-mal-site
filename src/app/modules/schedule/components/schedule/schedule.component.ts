// Framework
import { Component } from "@angular/core";
import { Observable, timer, map, shareReplay } from "rxjs";

@Component({
    selector: "app-schedule",
    templateUrl: "./schedule.component.html",
    styleUrls: ["./schedule.component.scss"],
})
export class ScheduleComponent {
    constructor() {

    }

    private _time$: Observable<Date> = timer(0, 1000).pipe(
        map(tick => new Date()),
        shareReplay(1)
    );

    get time() {
        return this._time$;
    }
}
