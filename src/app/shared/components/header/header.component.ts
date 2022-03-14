import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FunctionsService } from 'src/app/core/services/functions.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(functions: FunctionsService,
    private popoverCtrl: PopoverController) { }

  ngOnInit() { }

  async presentPopover(ev: any) {
    console.log(ev);
    const popover = await this.popoverCtrl.create({
      component: MenuComponent,
      event: ev,
      translucent: false,
      backdropDismiss: true
    });

    await popover.present();

    const { data } = await popover.onWillDismiss();
    console.log(data);

  }
}
