
var a = document.getElementById('con1');
var b = ['one', 'two', 'three', 'four'];
var c = ['one_t', 'two_t', 'three_t', 'four_t'];

function onChange() {
    //a.children[i].children[0].children[0]
    for( var d=0; d< b.length; d++){
        if(document.getElementById(b[d]).checked){
            console.log(document.getElementById(c[d]).value);
        }
    }
}

function onClick() {

}