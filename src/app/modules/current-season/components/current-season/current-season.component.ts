// Framework
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
// Plugins
import { PaginationInstance } from "ngx-pagination";
// Interfaces
import { Anime } from "src/app/modules/share/interfaces/anime.interface";
// Services
import { JikanWrapperApiService } from "src/app/modules/share/services/api/jikan-wrapper-api.service";
import { LocalStorageService } from "src/app/modules/share/services/api/local-storage.service";

@Component({
    selector: "app-current-season",
    templateUrl: "./current-season.component.html",
    styleUrls: ["./current-season.component.scss"],
})

export class CurrentSeasonComponent implements OnInit, OnDestroy {
    private subscription = new Subscription();
    resource: Anime[] = [];
    schedule: any = null;

    config: PaginationInstance = {
        itemsPerPage: 0,
        currentPage: 1,
        totalItems: 0,
    };

    constructor(
        protected api: JikanWrapperApiService,
        protected localStorage: LocalStorageService,
    ) { }

    ngOnInit(): void {
        this.loadData();
        this.loadLocalData();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onPageChange(currentPage: number): void {
        this.config.currentPage = currentPage;
        this.loadData();
    }

    onAddToScheduleClicked(id: number, object: Anime): void {
        this.subscription.add(
            this.localStorage.save(id.toString(), JSON.stringify(object)).subscribe(
                () => { },
                (err) => {
                    console.error(err);
                }
            ));
        ;
        this.loadLocalData();
    }

    deleteEntry(id: string): void {
        this.subscription.add(
            this.localStorage.delete(id).subscribe(
                () => {},
                (err) => {
                    console.error(err);
                }
            )
        );
        this.loadLocalData();
    }

    deleteSchedule(): void {
        this.subscription.add(
            this.localStorage.deleteAll().subscribe(
                () => {},
                (err) => {
                    console.error(err);
                }
            )
        );
        this.loadLocalData();
    }

    private loadData() {
        this.subscription.add(this.api.getCurrentSeason(this.config.currentPage).subscribe(
            (res) => {
                this.resource = res.data;
                this.config.totalItems = res.pagination.items.total;
                this.config.itemsPerPage = res.pagination.items.per_page;
            },
            (err) => {
                console.error(err);
            }
        ));
    }

    private loadLocalData() {
        this.subscription.add(this.localStorage.getAll().subscribe(
            (res) => {
                this.schedule = res;
            },
            (err) => {
                console.error(err);
            }
        ));
    }
}
