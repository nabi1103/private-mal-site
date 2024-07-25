// Framework
import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";
import { Observable, timer, map, shareReplay } from "rxjs";
// Interface
import { Anime } from "src/app/modules/share/interfaces/anime.interface";


@Component({
    selector: "app-schedule",
    templateUrl: "./schedule.component.html",
    styleUrls: ["./schedule.component.scss"],
})
export class ScheduleComponent implements OnChanges {
    @Input() resource: any = null;
    @Output() onDeleteOneEntryClicked = new EventEmitter<string>();
    @Output() onDeleteScheduleClicked = new EventEmitter<null>();
    readonly week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    animeArray: Anime[] = [];

    private _time$: Observable<Date> = timer(0, 1000).pipe(
        map(tick => new Date()),
        shareReplay(1),
    );

    get time() {
        return this._time$;
    }

    ngOnChanges(): void {
        this.formatScheduleData();
    }

    getAnimeOnWeekday(day: string): Anime[] {
        const tmp = this.animeArray.filter(
            (a: Anime) => this.animeOnWeekday(a, day)
        );
        tmp.sort((a: Anime, b: Anime) => {
            return this.compareHourString(a.broadcast.time, b.broadcast.time);
        });
        return tmp;
    }

    deleteEntry(id: number): void {
        this.onDeleteOneEntryClicked.emit(id.toString());
    }

    deleteSchedule(): void {
        this.onDeleteScheduleClicked.emit();
    }

    private formatScheduleData(): void {
        if (this.resource != null) {
            this.animeArray = [];
            Object.values(this.resource).forEach(
                (anime: any) => {
                    this.animeArray.push(JSON.parse(anime.toString()));
                }
            );
        }
    }

    private animeOnWeekday(anime : Anime, day: string): boolean {
        return anime?.broadcast?.day == day + "s";
    }

    private compareHourString(hourA: string, hourB: string): number {
        if (hourA > hourB) {
            return 1;
        } else if (hourA < hourB) {
            return -1;
        } else {
            return 0;
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

    test2(): void {
        console.log("here");
    }

    clear(): void {
        localStorage.clear();
    }
}
