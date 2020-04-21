var id;

function dragOver(ev){
ev.preventDefault();
console.log(ev);
}

function dragStart(ev){
    id = ev.target.id;
    
    ev.dataTransfer.setData("text", ev.explicitOriginalTarget.data);
    console.log(ev.explicitOriginalTarget.data);
}

function onDrop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log(ev);
    
}