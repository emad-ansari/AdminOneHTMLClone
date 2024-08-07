// write the logic of side-bar-Submenus drop-down
let sub_menue = document.querySelector('#Submenus-div');
console.log(sub_menue);
sub_menue.addEventListener('click', () => {
    let drop_down = document.querySelector('.sub-menu');
    let sign = document.getElementById('sign');
    let plus_sign = sign.attributes.class.value;
    console.log(sign.attributes.class.value)
    if (plus_sign === 'fa-solid fa-plus fa-xs') {
        sign.attributes.class.value = 'fa-solid fa-minus fa-xs'
        drop_down .style.display = 'block';
        drop_down.style.transitionDuration = '2s';

    }
    else {
        sign.attributes.class.value = 'fa-solid fa-plus fa-xs'
        drop_down .style.display = 'none';
    }


});
