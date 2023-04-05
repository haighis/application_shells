import { Router } from '@angular/router';
import { AfterViewInit, Component, Compiler, Injector, ViewChild, 
  ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare const SystemJS: any;

@Component({
	selector: 'app-root',
	templateUrl: './appshell.componentmanual.html',
	styleUrls: ['appshell.component.scss'],
})
export class AppShellManualComponent implements AfterViewInit {
	title = '';
  constructor(
    private router: Router, 
    private _compiler: Compiler, 
    private _injector: Injector) { 
  }
  
  @ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;
  
  ngAfterViewInit() {
    this.loadApplication("http://localhost:8125/plugin-a.bundle.js");
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
    this.content.createComponent(componentFactory);
  }
}