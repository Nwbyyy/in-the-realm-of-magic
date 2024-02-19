function showMenu(me, name) {
    for (let i = 1; i <= 6; i++) {
        document.getElementById('c' + i + '-menu').setAttribute('hidden', 'hidden');
    }
    document.getElementById(name).removeAttribute('hidden');
    for (let i = 1; i <= 6; i++) {
        document.getElementById('c' + i).removeAttribute('hidden');
    }
    document.getElementById(me).setAttribute('hidden', 'hidden');
}

function hideMenu(num) {
    document.getElementById('c' + num).removeAttribute('hidden');
    document.getElementById('c' + num + '-menu').setAttribute('hidden', 'hidden');
}


function dragstartHandler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
    for(list of document.getElementsByClassName("spell")) {
        if(ev.target.id[0] > list.getAttribute("id")) {
            list.setAttribute("style", "visibility: hidden;");
        }
        else {
            list.setAttribute("style", "border: #237573 solid;");
        }
    }
}

function dragendHandler(ev) {
    for(list of document.getElementsByClassName("spell")) {
        list.setAttribute("style", "visibility: visible;");
        list.setAttribute("style", "border: #3b46d9 solid;");
    } 
}

function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
    const data = ev.dataTransfer.getData("application/my-app");
}

function dropHandler(ev) {
    for(list of document.getElementsByClassName("spell")) {
        list.setAttribute("style", "border: #3b46d9 solid;");
    }
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("application/my-app");
    
    if(document.getElementById(data).getAttribute('class')[3] <= ev.target.getAttribute('id')) {
        ev.target.firstChild.nodeValue = document.getElementById(data).firstChild.nodeValue; 
    }
}
