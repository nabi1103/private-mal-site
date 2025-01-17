// Framework
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// Project modules
import { HeaderRoutingModule } from "./header-routing.module";
// Components
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        HeaderRoutingModule
    ],
    exports: [
        HeaderComponent
    ],
})
export class HeaderModule { }
