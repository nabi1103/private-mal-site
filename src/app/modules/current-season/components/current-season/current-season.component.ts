// Framework
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
// Plugins
import { PaginationInstance } from "ngx-pagination";
// Interfaces
import { Anime } from "src/app/modules/share/interfaces/anime.interface";
// Services
import { JikanWrapperApiService } from "src/app/modules/share/services/api/jikan-wrapper-api.service";

@Component({
    selector: "app-current-season",
    templateUrl: "./current-season.component.html",
    styleUrls: ["./current-season.component.scss"],
})

export class CurrentSeasonComponent implements OnInit, OnDestroy {
    private subscription = new Subscription();
    resource: Anime[] = [];

    config: PaginationInstance = {
        itemsPerPage: 0,
        currentPage: 1,
        totalItems: 0,
    };

    constructor(
        protected api: JikanWrapperApiService,
    ) { }

    ngOnInit(): void {
        this.loadData();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onPageChange(currentPage: number): void {
        this.config.currentPage = currentPage;
        this.loadData();
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
}
