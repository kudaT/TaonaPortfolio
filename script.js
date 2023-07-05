// Portfolio class
class Portfolio {
    constructor() {
      // Initialize your portfolio
      this.initialize();
    }
  
    initialize() {
      // Add event listeners or perform any initialization tasks
      this.addResponsiveMenu();
      // Add other initialization tasks as needed
    }
  
    addResponsiveMenu() {
      const menuButton = document.getElementById('menu-button');
      const menuList = document.getElementById('menu-list');
  
      // Toggle menu visibility on button click
      menuButton.addEventListener('click', () => {
        menuList.classList.toggle('show');
      });
    }
  
    // Add more methods and event handlers as needed
  }
  
  // Create an instance of the Portfolio class
  const portfolio = new Portfolio();
  