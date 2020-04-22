
    var id = document.getElementById('one');
    var id2 = document.getElementById('two');
    var cp;
    var ct;
    var pst;
    
    function copy(){
    cp = id.value;
    }
    
    function cut(){
    ct = id.value;
    
    console.log('cut');
    id.value = "";
    }
    
    function paste(){
        if(cp==""&& ct!=""){
            id2.value = ct;
            ct="";
        }
        else{
            id2.value = cp;
        }
    }
