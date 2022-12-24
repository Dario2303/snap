const features = document.querySelector('.features');
const company = document.querySelector('.company');
const arrow = document.querySelector('.arrow');
const featuresMenu = document.querySelector('.featuresMenu')
const companyMenu = document.querySelector('.companyMenu')

displayMenu(features, featuresMenu)
displayMenu(company, companyMenu)

    function displayMenu (select, menu) {
        menu.style.opacity = 0;
         select.addEventListener('click', () => {
            if(menu.style.opacity === '0'){ 
                menu.style.opacity = '100%';
                arrow.style.transform = 'rotate(180deg)'
                return;
                }
                menu.style.opacity = '0';
                arrow.style.transform = 'rotate(0deg)'
            } 
        )
    }
    