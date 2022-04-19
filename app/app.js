import * as MODEL from "../model/model.js";

var homeContent = `<h1>HOME</h1>`


function route(){
    let hashTag = window.location.hash;
    let pageName = hashTag.replace("#","")
    console.log(pageName)
    let pageContent = pageName + "Content";
    //if (pageName == ""){
    //    pageContent = "aboutContent";
    //}
    MODEL.modelPageName(pageContent);
}

function initListeners(){
    $(window).on("hashchange",route)
    route();
}

$(document).ready(function (){

    initListeners();
});