const features = document.querySelector('.features');
const company = document.querySelector('.company');
const arrow = document.querySelector('.arrow');
const featuresMenu = document.querySelector('.featuresMenu')
const companyMenu = document.querySelector('.companyMenu')
const menu = document.querySelector('.menu__desktop')

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
    