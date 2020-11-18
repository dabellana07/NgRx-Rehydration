import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./store";
import { HydrationEffects } from "./store/hydration/hydration.effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  imports: [BrowserModule, StoreModule.forRoot(reducers, { metaReducers }), EffectsModule.forRoot([HydrationEffects])],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
