import { Component } from '@angular/core';

@Component({
  selector: 'fbc-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePageComponent {
  title = 'firebootcamp-crm';

  titleChanged(event) {
    console.log('Event: ', event);
    this.title = event.target.value;
  }

}
