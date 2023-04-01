import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './appshell/appshell.component';
import { AppShellManualComponent } from './appshell_manual/appshell.componentmanual';
import { AppStoreComponent } from './appstore/appstore.component';

const routes: Routes = [
  // Default Route loads Application Shell
 {
    path: "",
    component: AppShellComponent
  },
// Run to validate Plugin System is functioning properly
{
  path: "appshellmanual",
  component: AppShellManualComponent
},
// Application Store Route - go here to install an application
{
    path: "appstore",
    component: AppStoreComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
