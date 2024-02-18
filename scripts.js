
function showMenu(me, name) {
    for (let i = 1; i <= 6; i++) {
        document.getElementById('c' +i +'-menu').setAttribute('hidden','hidden');
    }
    document.getElementById(name).removeAttribute('hidden');
    for (let i = 1; i <= 6; i++) {
        document.getElementById('c' +i).removeAttribute('hidden');
    }
    document.getElementById(me).setAttribute('hidden','hidden');
}

function hideMenu(num) {
    document.getElementById('c'+num).removeAttribute('hidden');
    document.getElementById('c' + num + '-menu').setAttribute('hidden','hidden');
}

