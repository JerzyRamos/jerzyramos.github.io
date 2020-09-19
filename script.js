var active = "about";
function start() {
    setTimeout(function(){
        var aboutContainer = document.getElementById("about-container");
        aboutContainer.style.opacity = 1;
        aboutContainer.style.transform = "translateY(0px)";
        
    }, 200);
}

function switchProject(target) {
    if (target==active) {
        return;
    }
    document.getElementById(active+"-tab").classList.remove("active");
    document.getElementById(target+"-tab").classList.add("active");
    activeTab = document.getElementById(active);
    targetTab = document.getElementById(target);
    activeTab.style.opacity = 0;
    
    setTimeout(function(){
        activeTab.style.display="none";
        targetTab.style.display="block";
        if(target!="project") {
            document.body.style.backgroundColor = "#ffffff";
        }
        
        

    }, 100);
    setTimeout(function(){
        targetTab.style.opacity = 1;
        
        if(target=="project") {
            document.body.style.backgroundColor = "#a9d9db";
        }

    }, 200);
    
    active = target;
}
