
import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
//import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { HttpClient } from '@angular/common/http'
//import { InstallItemSave, ApplicationInstallSave, StoreResponse, TenantOptions, TenantService, AppInstallItem } from '@haighis/mango-platform-community'
// import { StoreService } from '@haighis/mango-platform-community'
// import { StoreOptions } from '@haighis/mango-platform-community/dist/helpers/Store/StoreOptions'
import { GlobalConstants } from '../global'
import { Router } from '@angular/router'
import { Application, ApplicationService, Item, ItemService } from '../../axios_client/index';

@Component({
	selector: 'app-root',
	templateUrl: './appstore.component.html',
	styleUrls: ['appstore.component.scss'],
})
export class AppStoreComponent {
	  title = 'Application Store'
    storeItems: Item[];
  //  appStoreResponse: StoreResponse
  constructor(private router: Router) { 
    //this.appStoreResponse = new StoreResponse();
    // this.appStoreResponse.storeItems = [
    //   {name: 'test 1 asdf asdfas adfa asaf asdf', description: 'test 1 ', storeModule: { url: 'asdf', name: 'asdf'}, active: true, expired: false},
    //   {name: 'test 2', description: 'test 2', storeModule: { url: 'asdf', name: 'asdf'}, active: true, expired: false},
    // ] 
    // let storeOptions: StoreOptions = { serviceUrl: 'http://localhost:8000/api/store'}
    // const storeService = new StoreService(storeOptions);
    // let resp = storeService.getStoreResponse2()
    // .then(data => {
    //     this.appStoreResponse = data;
    //     console.log('app ', data)
    // })
    // .catch(err => {
    //     console.log('Error -> ', err);
    // });
    let res = ItemService.findItems().then( res => {
      this.storeItems = res;
      // res.forEach(item => {
      //   this.storeItems.push();
      // })
      console.log('res ', res)
    });
  }

  installApp(appInstallItem: Item) {
    // Perform an application installation
    console.log(' app ', appInstallItem)
    let app: Application = {
      applicationName: appInstallItem.artifacts[0].name,
      applicationUrl: appInstallItem.artifacts[0].url,
      installedInstanceCode: GlobalConstants.ApplicationInstanceKey,
      namespace: 'default'
    };
    // This should really only take a uuid, but for now its like this.
    ApplicationService.postApplication(app).then(res => {
      console.log(' res ', res)
    });
    // let tenantOptions: TenantOptions = { serviceUrl: 'http://localhost:8000/api/apptenant'}
    // let tenantService = new TenantService(tenantOptions);
    // let appInstallSave: ApplicationInstallSave = new ApplicationInstallSave();
    // let installItemSave: InstallItemSave = new InstallItemSave();
    
    // installItemSave.installed_instance_code = GlobalConstants.ApplicationInstanceKey;
    // installItemSave.status = "ACTIVE";
    // installItemSave.application_name = appInstallItem.storeModule.name
    // installItemSave.application_url = appInstallItem.storeModule.url;
    // appInstallSave.appinstall = installItemSave;
    
    // tenantService.installApplication(appInstallSave).then(data => {
    //   console.log('install result ', data)
    // })

    // console.log('after install result ', appInstallSave)
    // call api to install new app
    // save in cache
    // Redirect user
    this.router.navigateByUrl('');
  }
}