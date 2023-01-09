//open with transition function
function trans(o, t, a, b) {
    let object = document.getElementsByClassName(o)[0]
    let target = document.getElementsByClassName(t)[0]
    object.addEventListener("click", () => {
        if (target.style.bottom == a) {
            target.style.bottom = b
        } else {
            target.style.bottom = a
            target.style.display = "block"
        }
    })
}

//windows move function
function clickmove(z) {
    var dragitem = document.getElementsByClassName(z)[0]

    function drag(e) {
        dragitem.style.top = e.pageY + "px";
        dragitem.style.left = e.pageX + "px";
    }
    dragitem.addEventListener("mousedown", function() {
        window.addEventListener("mousemove", drag)
    })
    dragitem.addEventListener("mouseup", () =>
        window.removeEventListener("mousemove", drag))
}

//open window function
function windowopen(o, t) {
    let object1 = document.getElementsByClassName(o)[0]
    let object2 = document.getElementsByClassName(t)[0]
    let startmenu = document.getElementsByClassName("startmenu")[0]
    object1.addEventListener("click", () => {
        if (object2.style.display == "none") {
            object2.style.display = "block"
            startmenu.style.bottom = "-700px"
        } else {
            object2.style.display = "none"
        }

    })
}

//progress bar
function slide(h) {
    var move = document.getElementsByClassName(h)[0]
    move.addEventListener("mousemove", () => {
        var x = move.value;
        var color = "linear-gradient( 90deg, #42a5f5 " + x + "%, white " + x + "%)";
        move.style.background = color;
    })
}
//active tab indicator
function activetab(o, p, c) {
    var tab = document.getElementById(o)
    console.log(tab)
    tab.addEventListener("click", () => {
        console.log("1")
        if (tab.style.backgroundColor == p) {
            console.log("2")
            tab.style.backgroundColor = c
        } else {
            tab.style.backgroundColor = p
        }
    })
}
//===================================Trandition Open=====================================//

//to open start menu
trans("src1", "startmenu", "41px", "-700px")

//for notification center
trans("side3", "notification", "40px", "-700px")

//====================================Open windows=====================================//

// to open File Explorer 
windowopen("inner11", "filewindow")

//to open edge
windowopen("src3", "edge")

//to open store
windowopen("inner4", "store")

//=====================================Drag Windows=======================================//

//to drag the window
clickmove("filewindow")

//to drag edge
clickmove("edge")

//to drag store
clickmove("store")

//=====================================================================================//

//to show timing
function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDate();
    var mo = today.getMonth();
    var yr = today.getFullYear();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    d = checkTime(d);
    mo = checkTime(mo);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s + "<br>" + d + "-" + mo + "-" + yr;
    var t = setTimeout(startTime, 1000);
}

//=============================progress bar slider===============================//
slide("slider1")
slide("slider2")

//====================================active tab================================//
activetab("tab1", "rgba(211, 210, 210, 0.53)", "rgb(66, 165, 245)")
activetab("tab2", "rgba(211, 210, 210, 0.53)", "rgb(66, 165, 245)")
activetab("tab3", "rgba(211, 210, 210, 0.53)", "rgb(66, 165, 245)")
activetab("tab4", "rgba(211, 210, 210, 0.53)", "rgb(66, 165, 245)")
activetab("tab5", "rgba(211, 210, 210, 0.53)", "rgb(66, 165, 245)")
activetab("tab6", "rgba(211, 210, 210, 0.53)", "rgb(66, 165, 245)")