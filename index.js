const features = document.querySelector('.features');
const company = document.querySelector('.company');
const arrow = document.querySelector('.arrow');
const featuresMenu = document.querySelector('.featuresMenu')
const companyMenu = document.querySelector('.companyMenu')
const menu = document.querySelector('.menu__desktop')

//BUTTON FUNCTIONS//
displayMenu(features, featuresMenu, company, companyMenu)
displayMenu(company, companyMenu, features, featuresMenu)

function displayMenu (select, menu, selectHidden, menuHidden) {
    menu.style.display = 'none';
    select.addEventListener('click', () => {
        if(menu.style.display === 'none'){
            menuHidden.style.display = 'none';
            selectHidden.children[1].style.transform = 'rotate(0deg)';
            menu.style.display = 'grid';
            select.children[1].style.transform = 'rotate(180deg)';
            return;
        }
            menu.style.display = 'none';
            select.children[1].style.transform = 'rotate(0deg)';
                } 
        )
}

const btnClose = document.querySelector('#btnClose');
const menuMobile = document.querySelector('#navMobile');
const companyMobile = document.querySelector('#companyMobile');
const featuresMobile = document.querySelector('#featuresMobile');
const greyMode = document.querySelector('#body');
const openMenu = document.querySelector('.openMenu');


CloseMenu()

function CloseMenu () {

    openMenu.addEventListener('click', () => {
        menuMobile.style.display = 'block';
        greyMode.style.display = 'ruby';

    })

    btnClose.addEventListener('click', () => { 
        menuMobile.style.display = 'none';
        greyMode.style.display = 'none';
    })
}



    