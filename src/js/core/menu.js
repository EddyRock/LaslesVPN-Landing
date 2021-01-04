export default new class Menu {

	constructor() {
		this.is_open_menu = false;

		this.menu_icon = document.querySelector('.header__menu-button--menu');
		this.close_icon = document.querySelector('.header__menu-button--close');
		this.menu = document.querySelector('.header__menu--mobile');
	}

	init() {
		this.toggle();

		this.menu_icon.onclick = () => {
			this.toggle();
		};

		this.close_icon.onclick = () => {
			this.toggle();
		};
	}

	toggle() {
		this.is_open_menu = !this.is_open_menu;

		if(this.is_open_menu) {
			this.menu_icon.style.display = 'block';
			this.close_icon.style.display = 'none';
			this.menu.style.display = 'none';
		} else {
			this.menu_icon.style.display = 'none';
			this.close_icon.style.display = 'block';
			this.menu.style.display = 'block';
		}
	}

	log() {
		console.log(this.is_open_menu);
	}

};
