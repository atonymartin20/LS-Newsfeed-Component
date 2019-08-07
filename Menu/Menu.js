/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.
*/

class MenuConstructor {
  constructor(menu) {
    this.menu = menu;
    this.menuButton = document.querySelector('img.menu-button');
    this.header = document.querySelector('.header');
    this.menuDiv = document.createElement('div');
    this.menuDiv.classList.add('menu');
    this.ul = document.createElement('ul');
    // Step 3: Using a DOM selector, select the menu button currently on the DOM.

    this.header.appendChild(this.menuDiv);
    this.menuDiv.appendChild(this.ul);

    /*
      Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
      Add those items to the <ul>
    */
    this.listmenu = this.menu.forEach(menuItem => {
      this.li = document.createElement('li');
      this.li.textContent = menuItem;
      this.ul.appendChild(this.li);
    });

    // Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
    this.menuButton.addEventListener('click', () => this.openMenu());
  }
    openMenu() {
      this.menuDiv.classList.toggle('menu--open');
    }

}

  

  // Step 5: return the menu component.

  
  
  // Step 6: add the menu component to the DOM.
const newMenu = new MenuConstructor(menuItems);