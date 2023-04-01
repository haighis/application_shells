import { COMPILER_OPTIONS, CompilerFactory, Compiler } from '@angular/core';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule }    from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatNativeDateModule } from '@angular/material/core'
import { AppShellComponent } from './appshell/appshell.component';
import {AppShellManualComponent} from './appshell_manual/appshell.componentmanual';
import { AppStoreComponent } from './appstore/appstore.component';
export function createCompiler(fn: CompilerFactory): Compiler {     
	return fn.createCompiler();
}

@NgModule({
	declarations: [AppComponent, 
    AppShellManualComponent,
    AppShellComponent, 
    AppStoreComponent,
  ],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatGridListModule,
		ReactiveFormsModule,
		MatCheckboxModule,
		MatButtonModule,
		MatDatepickerModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatRadioModule,
		MatSelectModule,
		MatCardModule,
		MatNativeDateModule,
	],
	providers: [{
		provide: COMPILER_OPTIONS,
		useValue: {},
		multi: true
	  },
	  {
		provide: CompilerFactory,
		useClass: JitCompilerFactory,
		deps: [COMPILER_OPTIONS]
	  },
	  {
		provide: Compiler,
		useFactory: createCompiler,
		deps: [CompilerFactory]
	  }],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}