// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


window.addEventListener('load', pageLoad)

function pageLoad() {
    const htmlTag = document.documentElement

    document.addEventListener("click", (e) => {
        const targetElement = e.target;

        if (targetElement.closest('.sorting') && htmlTag.closest('.touch')) {
            targetElement.closest('.sorting').classList.toggle('active')
        }

        if (!targetElement.closest('.sorting') && document.querySelector('.sorting.active')) {
            document.querySelector('.sorting.active').classList.remove('active')
        }

    });
}