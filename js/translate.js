document.addEventListener("DOMContentLoaded", function(e){

    let language = {
        es: {
            contact: "contáctame",
            project: "proyectos",
            about: "sobre mí",
            imago: "imago",
            home: "inicio"
        },
        eng: {
            contact: " contact",
            project: " projects",
            about: " about me",
            imago: " imago",
            home: " home"
        }
    };
    //define language via window hash
    if (window.location.hash === "#eng") {
        //Para desktop
        document.getElementById("contactenglish").textContent = language.eng.contact;
        document.getElementById("projectenglish").textContent = language.eng.project;
        document.getElementById("aboutenglish").textContent = language.eng.about;imagoenglish
        document.getElementById("imagoenglish").textContent = language.eng.imago;homeenglish
        document.getElementById("homeenglish").textContent = language.eng.home;

        //mantener idioma al cambiar desktop
        document.getElementById("contactenglish").href = "contactame.html#eng";
        document.getElementById("projectenglish").href = "proyectos.html#eng";
        document.getElementById("aboutenglish").href = "sobremi.html#eng";
        document.getElementById("homeenglish").href = "index.html#eng";


        //Para phone
        document.getElementById("contactenglishphone").textContent = language.eng.contact;
        document.getElementById("projectenglishphone").textContent = language.eng.project;
        document.getElementById("aboutenglishphone").textContent = language.eng.about;
        document.getElementById("imagoenglishphone").textContent = language.eng.imago;
        document.getElementById("homeenglishphone").textContent = language.eng.home;

        //mantener idioma al cambiar desktop
        document.getElementById("contactenglishphone").href = "contactame.html#eng";
        document.getElementById("projectenglishphone").href = "proyectos.html#eng";
        document.getElementById("aboutenglishphone").href = "sobremi.html#eng";
        document.getElementById("homeenglishphone").href = "index.html#eng";

        
    }
   
});

function timedRefresh() {
    setTimeout("location.reload(true);", 200);
}
