const features = document.querySelector('.features');
const company = document.querySelector('.company');
const arrow = document.querySelector('.arrow');
const featuresMenu = document.querySelector('.featuresMenu')
const companyMenu = document.querySelector('.companyMenu')
const menu = document.querySelector('.menu__desktop')

displayMenu(features, featuresMenu, company, companyMenu)
displayMenu(company, companyMenu, features, featuresMenu)

function displayMenu (select, menu, selectHidden, menuHidden) {
    menu.style.opacity = 0;
        select.addEventListener('click', () => {
        if(menu.style.opacity === '0'){
            menuHidden.style.opacity = '0';
            selectHidden.children[1].style.transform = 'rotate(0deg)';
            menu.style.opacity = '1';
            select.children[1].style.transform = 'rotate(180deg)';
            return;
            }
            menu.style.opacity = '0';
            select.children[1].style.transform = 'rotate(0deg)'
        } 
    )
}
