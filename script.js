let win = document.getElementById("win");
let startmenu = document.getElementsByClassName("startmenu")[0];
let icons = document.getElementsByClassName("icon")[0];
let taskbar = document.getElementsByClassName("taskbar")[0];
let ann5 = document.getElementById("ann5");

icons.addEventListener("click", () => {
    if (startmenu.style.bottom == "1px") {
        console.log("clicked");
        startmenu.style.bottom = "-1055px";
    }
    else {
        console.log("clicked 1");

        startmenu.style.bottom = "1px";
    }
});

prefs.sourceFolder = Folder('C:\\Users\\Datta-Mayuri Kale\\Documents\\Desktop');
var sourceFolder = Folder.selectDialog('where', Folder(prefs.sourceFolder));

ann5.addEventListener("click", () => {
    if (!sourceFolder) {
        console.log("hi");
        return sourceFolder;

    }
    else if (!sourceFolder.exists) {
        alert("not found", 'Script Stopped', true);
        return;
    }
});

function li() {
    console.log("kale");
    let a = document.createElement('a');
    let link = document.createTextNode("datta");
    a.appendChild(link);
    a.title = 'datta';
    a.href = 'https://www.google.com';
    document.chrome.appendChild(a.href);
}

iconsapps.addEventListener("click", () => {
    // li();
    // let a = document.createElement('a');
    //     let link = document.createTextNode("datta");
    //     a.appendChild(link);
    //     a.title = 'datta';
    //     a.href = 'https://www.google.com';
    //     document.body.appendChild(a);
    chrome.ClassList.target.appendChild(li());
});

// Code By- DATTA KALE