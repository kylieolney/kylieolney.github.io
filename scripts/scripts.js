function defaultSetting() {
    document.getElementById('setting').innerHTML = "Default";
    document.getElementById('mainPage').style = "background-color: #DAD7CD;";
    document.getElementById('header').style = "background-color: #a3b18a;";
    document.getElementById('bottomSection').style = "background-color: #a3b18a;";

}

function lightSetting() {
    document.getElementById('setting').innerHTML = "Light";
    document.getElementById('mainPage').style = "background-color: white;";
    document.getElementById('header').style = "background-color: #e0e0e0; color: black";
    document.getElementById('bottomSection').style = "background-color: #e0e0e0;";


}

function darkSetting() {
    document.getElementById('setting').innerHTML = "Dark";
    document.getElementById('mainPage').style = "background-color: #121212; color: #ffffff;";
    document.getElementById('header').style = "background-color: #444444; color:#ffffff;";
    document.getElementById('bottomSection').style = "background-color: #444444;";

}





