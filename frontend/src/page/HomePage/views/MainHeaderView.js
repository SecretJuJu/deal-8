import View from '@/page/View';

import { qs } from '@/helper/selectHelpers';

import categorySVG from '@/public/svg/category-white.svg';
import gpsSVG from '@/public/svg/gps-white.svg';
import profileSVG from '@/public/svg/profile-white.svg';
import menuSVG from '@/public/svg/menu-white.svg';

const tag = '[MainHeader]';

export default class MainHeaderView extends View {
  constructor(element = qs('#main-header'), template = new Template()) {
    console.log(tag, 'constructor');
    super(element);
    this.template = template;
  }

  show(data = []) {
    this.element.innerHTML = this.template.getHeader();
    super.show();
  }
}

class Template {
  getHeader() {
    return `
    <div class="main-header--left" href="/category.html">
      <a href="/category">
        <div class="category-icon">
          ${categorySVG} 
        </div>  
      </a>
    </div>
    <div class="main-header--center">
      <div class="location">
        <div class="location-icon">${gpsSVG}</div>
        <strong> 역삼동 </strong>
      </div>
    </div>
    <div class="main-header--right">
      <a href="/login" data-link>
        <div class="profile-icon">${profileSVG}</div>  
      </a>
      <a href="/menu" data-link>
        <div class="menu-icon">${menuSVG}</div>  
      </a>
    </div>
        `;
  }
}
