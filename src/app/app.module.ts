import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

// Components
import { AppComponent } from "./app.component";
import { SunnyComponent } from "./sunny/sunny.component";
import { CloudyComponent } from "./cloudy/cloudy.component";
import { RainyComponent } from "./rainy/rainy.component";
import { SnowyComponent } from "./snowy/snowy.component";
import { ElectricStormsComponent } from "./electric-storms/electric-storms.component";
import { SunnyRainyComponent } from "./sunny-rainy/sunny-rainy.component";

@NgModule({
  declarations: [
    AppComponent,
    SunnyComponent,
    CloudyComponent,
    RainyComponent,
    SnowyComponent,
    ElectricStormsComponent,
    SunnyRainyComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
