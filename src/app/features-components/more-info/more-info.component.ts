import { Component } from '@angular/core';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent {

  clickOnArrow() {
    console.log('click on arrow');
  }

  clickOnMessages() {
    console.log('click on messages');
  }
}
