const tabsMandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElems =document.querySelectorAll('[data-tabs-field]')

for(let btn of tabsMandlerElems) {
    btn.addEventListener('click',() =>{
        tabsMandlerElems.forEach(item => item.classList.remove('design-list__item_active'))
        btn.classList.add('design-list__item_active')

        //console.dir(btn.dataset.tabsHandler);
        tabsContentElems.forEach(content =>{
            if (content.dataset.tabField ===btn.dataset.tabHandler){
                content.classList.remove('hidden')
            }else {
                content.classList.add('hidden')
            }
        })
    })
}