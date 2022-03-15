import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindDocumentPage } from './find-document.page';

const routes: Routes = [
  {
    path: '',
    component: FindDocumentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindDocumentPageRoutingModule {}
