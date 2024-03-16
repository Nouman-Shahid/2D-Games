

function toggleshop() {

    inventory = document.getElementById('inventory');
    inventory.style.display = 'flex';
    setting = document.getElementById('setting');
    setting.style.display = 'none';
    setting = document.getElementById('mode');
    setting.style.display = 'none';
}

function togglesetting() {

    setting = document.getElementById('setting');
    setting.style.display = 'flex';
    inventory = document.getElementById('inventory');
    inventory.style.display = 'none';
    setting = document.getElementById('mode');
    setting.style.display = 'none';
}
function togglemode() {

    setting = document.getElementById('mode');
    setting.style.display = 'flex';
    inventory = document.getElementById('inventory');
    inventory.style.display = 'none';
    setting = document.getElementById('setting');
    setting.style.display = 'none';
}
function toggleimg(clicked){

    select1 = document.getElementById("select1");
    select2 = document.getElementById("select2");
    select3 = document.getElementById("select3");

    img1 = document.getElementById("img1");
    img2 = document.getElementById("img2");
    img3 = document.getElementById("img3");

    if(clicked === 'select1')
    {
        img1.style.display = 'flex'
        img2.style.display = 'none'
        img3.style.display = 'none'
    }

    if(clicked === 'select2')
    {
        img2.style.display = 'flex'
        img1.style.display = 'none'
        img3.style.display = 'none'
    }

    if(clicked === 'select3')
    {
        img3.style.display = 'flex'
        img2.style.display = 'none'
        img1.style.display = 'none'
    }
}


function end() {
    setting = document.getElementById('setting');
    setting.style.display = 'none';
    inventory = document.getElementById('inventory');
    inventory.style.display = 'none';
    setting = document.getElementById('mode');
    setting.style.display = 'none';
}

function updatetext(clicked) {

    select1 = document.getElementById('selectbtn1');
    select2 = document.getElementById('selectbtn2');
    select3 = document.getElementById('selectbtn3');

    if(clicked === 'selectbtn1')
    {
        select1.style.backgroundColor = 'green';
        select1.style.color = 'white';
        select1.innerHTML = "selected";
        select2.innerHTML= "select";
        select3.innerHTML= "select";
        select2.style.backgroundColor = 'yellow';
        select2.style.color = 'black';
        select3.style.backgroundColor = 'yellow';
        select3.style.color = 'black';
    }
    if(clicked === 'selectbtn2')
    {   
        select2.style.backgroundColor = 'green';
        select2.style.color = 'white';
        select2.innerHTML = "selected";
        select1.innerHTML= "select";
        select3.innerHTML= "select";
        select3.style.backgroundColor = 'yellow';
        select3.style.color = 'black';
        select1.style.backgroundColor = 'yellow';
        select1.style.color = 'black';
    } 
    if(clicked === 'selectbtn3')
    {
        select3.style.backgroundColor = 'green';
        select3.style.color = 'white';
        select3.innerHTML = "selected";
        select2.innerHTML= "select";
        select1.innerHTML= "select";
        select2.style.backgroundColor = 'yellow';
        select2.style.color = 'black';
        select1.style.backgroundColor = 'yellow';
        select1.style.color = 'black';
    }
    
}


function updatebtn(clicked) {

    btn1 = document.getElementById('btn1');
    btn2 = document.getElementById('btn2');
    btn3 = document.getElementById('btn3');
    btn4 = document.getElementById('btn4');


    if(clicked === 'btn1')
    {
        btn1.style.backgroundColor = 'green';
        btn1.style.color = 'white';
        btn1.innerHTML = "selected";
        btn2.innerHTML= "select";
        btn3.innerHTML= "select";
        btn4.innerHTML= "select";
        btn3.style.backgroundColor = 'yellow';
        btn3.style.color = 'black';
        btn2.style.backgroundColor = 'yellow';
        btn2.style.color = 'black';
        btn4.style.backgroundColor = 'yellow';
        btn4.style.color = 'black';

    }
    if(clicked === 'btn2')
    {
        btn2.style.backgroundColor = 'green';
        btn2.style.color = 'white';
        btn2.innerHTML = "selected";
        btn1.innerHTML= "select";
        btn3.innerHTML= "select";
        btn4.innerHTML= "select";
        btn1.style.backgroundColor = 'yellow';
        btn1.style.color = 'black';
        btn3.style.backgroundColor = 'yellow';
        btn3.style.color = 'black';
        btn4.style.backgroundColor = 'yellow';
        btn4.style.color = 'black';

    } 
    if(clicked === 'btn3')
    {
        btn3.style.backgroundColor = 'green';
        btn3.style.color = 'white';
        btn3.innerHTML = "selected";
        btn2.innerHTML= "select";
        btn1.innerHTML= "select";
        btn4.innerHTML= "select";
        btn1.style.backgroundColor = 'yellow';
        btn1.style.color = 'black';
        btn2.style.backgroundColor = 'yellow';
        btn2.style.color = 'black';
        btn4.style.backgroundColor = 'yellow';
        btn4.style.color = 'black';
        

    }
    if(clicked === 'btn4')
    {
        btn4.style.backgroundColor = 'green';
        btn4.style.color = 'white';
        btn4.innerHTML = "selected";
        btn1.innerHTML= "select";
        btn2.innerHTML= "select";
        btn3.innerHTML= "select";
        btn1.style.backgroundColor = 'yellow';
        btn1.style.color = 'black';
        btn2.style.backgroundColor = 'yellow';
        btn2.style.color = 'black';
        btn3.style.backgroundColor = 'yellow';
        btn3.style.color = 'black';

    }
    
}