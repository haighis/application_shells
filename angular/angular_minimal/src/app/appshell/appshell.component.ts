import { Router } from '@angular/router';

import { AfterViewInit, Component, Compiler, Injector, ViewChild, 
  ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Application, ApplicationService } from 'src/axios_client';
import { Application, ApplicationService } from 'mangoapiserver_client_sdk_typescript/src/index';
import { GlobalConstants } from '../global';

declare const SystemJS: any;

@Component({
	selector: 'app-root',
	templateUrl: './appshell.component.html',
	styleUrls: ['appshell.component.scss'],
})
export class AppShellComponent implements AfterViewInit {
	title = '';
  /*
  When true Application is installed and the user views the installed application
  When false Application is not installed. 
  */
  installedApplication: Application;
  canViewApplicationInstalled: boolean = false; 
  canViewNoApplicationInstalled: boolean = false;
  canOverrideApplicationInstall: boolean = false;
  // applicationInstanceKey: string = 'emgrn11ak_asdf'; // todo. get this from the server or some config
  // this key should be generated from mango cli application create feature. that saves it
  // in db and stores in file system for server side. think this through
  // installedApplication: AppInstallItem;
  // appStoreResponse: ApplicationInstallResponse;
  private http: HttpClient;
  constructor(
    private router: Router, 
    private _compiler: Compiler, 
    private _injector: Injector) { 
      // Allow update of current application via query string. this will go away in place of of using the cli 
      // or web to change app install
      router.routerState.root.queryParams.subscribe(data => 
        {
            console.log('queryParams', data['OVERRIDE_APP_INSTALL'])
            if(data['OVERRIDE_APP_INSTALL'] == 1) {
              this.canOverrideApplicationInstall = true;
            }
        }
        );
    // - Does the user have an application already configured? get from server side service
    // tenantappservice get, returns a single storereponse or call it something else with same fields.
    // we store in file service or db? if db is unavailable then get from server side file system.
    // for now just store in db
    // If no application then show empty state for appshell that has dotted orange box line with an add appliction action
    // have a way to turn on system mode so the user can change the application configured. use a url variable for now
  }
  appStore() {
    this.router.navigateByUrl('appstore');
  }

  @ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;
  
  ngAfterViewInit() {
    //this.loadApplication("http://localhost:8125/plugin-a.bundle.js");
    
    //       this.canViewNoApplicationInstalled = installedItem.length == 0;
    // let tenantOptions: TenantOptions = { serviceUrl: 'http://localhost:8000/api/apptenant'}
    // let tenantService = new TenantService(tenantOptions);
      ApplicationService.findApplications().then(res => {
        if(GlobalConstants.ApplicationInstanceKey !== null) {
          let installedItem = res.filter(o => o.installedInstanceCode == GlobalConstants.ApplicationInstanceKey);  
          //console.log('installedItem ', installedItem);
          this.installedApplication = installedItem[0]
          if(this.installedApplication) {
            this.loadApplication(this.installedApplication.applicationUrl);
          }
          this.canViewApplicationInstalled = installedItem.length >= 1;
          this.canViewNoApplicationInstalled = installedItem.length == 0; 
        }
       });
    
    // tenantService.getApplicationsResponse()
    // .then(response => {
    //     if(GlobalConstants.ApplicationInstanceKey !== null) {
    //       let installedItem = response.applicationItems.filter(o => o.installedInstanceCode == GlobalConstants.ApplicationInstanceKey + 'asdfasdf');
    //       this.installedApplication = installedItem[0];
    //       this.loadApplication(this.installedApplication.applicationModule.url);
    //       this.canViewApplicationInstalled = installedItem.length >= 1;
    //       this.canViewNoApplicationInstalled = installedItem.length == 0;//this.appStoreResponse.applicationItems.length === 0;
    //     }
    // })
    // .catch(err => {
    //     console.log('Error -> ', err);
    // });
  }
  
  private async loadApplication(appUrl: string) {
    // import external module bundle
    const module = await SystemJS.import(appUrl);
    // compile module
    const moduleFactory = await this._compiler
                                    .compileModuleAsync<any>(module["PluginAModule"]);

    // resolve component factory
    const moduleRef = moduleFactory.create(this._injector);

    //get the custom made provider name 'plugins' 
    const componentProvider = moduleRef.injector.get('plugins');

    //from plugins array load the component on position 0 
    const componentFactory = moduleRef.componentFactoryResolver
                                      .resolveComponentFactory<any>(
                                          componentProvider[0][0].component
                                      );

    // compile component 
    var pluginComponent = this.content.createComponent(componentFactory);
    
    //sending @Input() values 
    //pluginComponent.instance.anyInput = "inputValue"; 
    
    //accessing the component template view
    //(pluginComponent.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  }
}