// Framework
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Observable, timer, map, shareReplay } from "rxjs";

@Component({
    selector: "app-schedule",
    templateUrl: "./schedule.component.html",
    styleUrls: ["./schedule.component.scss"],
})
export class ScheduleComponent implements OnChanges {
    @Input() resource: any = null;
    animeArray: Object[] = [];

    private _time$: Observable<Date> = timer(0, 1000).pipe(
        map(tick => new Date()),
        shareReplay(1)
    );

    get time() {
        return this._time$;
    }
    constructor() {}

    ngOnChanges(): void {
        this.formatScheduleData();
    }

    formatScheduleData(): void {
        if (this.resource != null) {
            Object.values(this.resource).forEach(
                (anime: any) => {
                    this.animeArray.push(JSON.parse(anime.toString()));
                }
            );
        }
    }

    // TODO
    test(): void {
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            values.push(localStorage.getItem(keys[i]));
        }

        console.log(values);
    }

    clear(): void {
        localStorage.clear();
    }
}
