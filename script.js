const sliders = {
    h1: document.querySelector("#h1"),
    h2: document.querySelector("#h2"),
    m1: document.querySelector("#m1"),
    m2: document.querySelector("#m2"),
    s1: document.querySelector("#s1"),
    s2: document.querySelector("#s2"),
}

function Update(){
    let date = new Date();
    let time = {
        h1: AddChar(date.getHours())[0],
        h2: AddChar(date.getHours())[1],
        m1: AddChar(date.getMinutes())[0],
        m2: AddChar(date.getMinutes())[1],
        s1: AddChar(date.getSeconds())[0],
        s2: AddChar(date.getSeconds())[1]
    }

    function AddChar(date){
        let str = date.toString();
        return str.length==1?"0"+str:str
    }

    for(let [key,val] of Object.entries(time)){
        let slider = sliders[key];
        slider.classList = ["slider"];
        slider.classList.add("time"+val);
        slider.childNodes.forEach(node => {
            if(node.innerHTML == val) node.classList.add("active");
            else node.classList = [];
        });
    }

    setTimeout(()=>Update(),1000)
}

Update();
