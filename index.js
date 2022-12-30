const features = document.querySelector('.features');
const company = document.querySelector('.company');
const arrow = document.querySelector('.arrow');
const featuresMenu = document.querySelector('.featuresMenu')
const companyMenu = document.querySelector('.companyMenu')
const menu = document.querySelector('.menu__desktop')

//MENU FUNCTION DESKTOP//
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

//MENU FUCTIONS MOBILE
const btnClose = document.querySelector('#btnClose');
const menuMobile = document.querySelector('#navMobile');
const greyMode = document.querySelector('#body');
const openMenu = document.querySelector('.openMenu');
let arrowElement = document.querySelectorAll('.list');

function CloseMenu () {
    openMenu.addEventListener('click', () => {
        menuMobile.style.overflow = 'auto';
        greyMode.style.display = 'block';
        menuMobile.style.transform = 'translate(0px)';
    })

    btnClose.addEventListener('click', () => {
        menuMobile.style.overflow = 'hidden';
        menuMobile.style.transform = 'translate(100%)';
        greyMode.style.display = 'none';
    })
}

CloseMenu()

//close menuMobile after resizing
addEventListener('DOMContentLoaded', () => {
    const mediaMenuClose = matchMedia('(min-width: 375px)');

    const resizing = mq => {
        if (mq.matches) {
            menuMobile.style.overflow = 'hidden';
            menuMobile.style.transform = 'translate(100%)';
            greyMode.style.display = null;
        }
    }
    mediaMenuClose.addListener(resizing);
})

//SUBMENU FUNCTION
arrowElement.forEach(list => {
    
    list.addEventListener('click', () => {
        
        list.classList.toggle('rotate')

        let height = 0;
        let menu = list.nextElementSibling;
        if (menu.clientHeight == '0') {
            height = menu.scrollHeight;
            console.log(menu.scrollHeight)
        }
        menu.style.height = `${height}px`;
    })
})











// const displaySubMenu = (select, menu) => {
    
//     let height = '0px';
    
//     addEventListener('click', (e) => {
//             console.log(menu.style.height)
//         if (e.target === select && height == '0px'){
//             menu.style.height = '100%';
//             menu.style.overflow = 'auto';
//             height = '100%';
//             }else {
//                 menu.style.height = '0px';
//             }
//     }
// )}
// displaySubMenu(featuresBtn, featuresSub)