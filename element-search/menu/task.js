const arrMenuSub = Array.from(document.querySelectorAll('li.menu__item > ul'));
const arrMenuItem = Array.from(document.querySelectorAll('li.menu__item > a'));

arrMenuItem[1].onclick = function(){
	arrMenuSub[0].className = "menu menu_sub menu_active";
	arrMenuSub[1].className = "menu menu_sub";
	return false;
};
arrMenuItem[5].onclick = function(){
	arrMenuSub[1].className = "menu menu_sub menu_active";
	arrMenuSub[0].className = "menu menu_sub";
	return false;
};