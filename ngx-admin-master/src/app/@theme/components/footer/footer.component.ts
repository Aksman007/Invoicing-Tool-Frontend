import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <div class="socials">
      <a href="#" target="https://www.facebook.com/LarsenToubroInfotech" class="ion ion-social-facebook"></a>
      <a href="#" target="https://twitter.com/lti_global?lang=en" class="ion ion-social-twitter"></a>
      <a href="#" target="https://www.linkedin.com/company/l&t-infotech" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
