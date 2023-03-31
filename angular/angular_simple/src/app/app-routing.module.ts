import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './appshell/appshell.component';
import { AppShellManualComponent } from './appshell_manual/appshell.componentmanual';
import { AppStoreComponent } from './appstore/appstore.component';

const routes: Routes = [
  // Default Route
 {
    path: "",
    component: AppShellComponent
  },
// {
//     path: "sample-json",
//     component: SampleJsonComponent        
// },
// {
//     path: "sample-model",
//     component: SampleModelComponent        
// },
// {
//     path: "page",
//     component: PageComponent
// },
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
