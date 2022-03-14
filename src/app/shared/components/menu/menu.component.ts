import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth.service';
import { FunctionsService } from 'src/app/core/services/functions.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(
    private popoverCtrl: PopoverController,
    private authService: AuthService,
    private functions: FunctionsService,
    private router: ActivatedRoute) { }



  ngOnInit() { }
  SignOut() {
    this.authService.logout();
    this.functions.clearLocal();
    this.navigateTo('/register')
    this.popoverCtrl.dismiss();
  }
  close() {
    this.popoverCtrl.dismiss();
  }
  navigateTo(link) {
    this.functions.navigateTo(link);
    this.popoverCtrl.dismiss();
  }
}
