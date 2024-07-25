// Framework
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class LocalStorageService {
    constructor() {}

    save(objectId: string, object: any): Observable<null> {
        if (localStorage.getItem(objectId) == null) {
            localStorage.setItem(objectId, object);
        }
        return of(null);
    }

    delete(objectId: string): Observable<null> {
        localStorage.removeItem(objectId);
        return of(null);
    }

    deleteAll(): Observable<null> {
        localStorage.clear();
        return of(null);
    }

    get(objectId: string): Observable<string | null> {
        return of(localStorage.getItem(objectId));
    }

    getAll(): Observable<object> {
        return of({...localStorage});
    }

}
