document.addEventListener("DOMContentLoaded", function(e){
    let languagechangeproject = {
        eng: {

            
            superProjectParagraph: "Private project located in Montevideo. The existing building is an ex-textile factory. A contemporary supermarket is designed keeping its principal structure.",
            superProjectTitle: "Supermarket",
            window: "r | g | f - architecture",
            pharmacyProject: 'Private project located in the department of Montevideo. The existing building is a tipical house from Uruguay in the 20th century.',
            pharmacyProjectTittle: "Pharmacy",
            barbacueProjectTittle: "Reform, extension and barbacue",
            barbacueProject: "Private project in Canelones, Uruguay. A private living room, barbecue, rest area, toilets and laundry room were designed."
        }
    };
    if (window.location.hash === "#eng") { 
        document.getElementById("windowtittle").textContent = languagechangeproject.eng.window;
        document.getElementById("projectmarkettitle").textContent = languagechangeproject.eng.superProjectTitle;
        document.getElementById("projectmarket").textContent = languagechangeproject.eng.superProjectParagraph;
        document.getElementById("pharmacyprojectparagraph").textContent = languagechangeproject.eng.pharmacyProject;
        document.getElementById("pharmacyprojecttittle").textContent = languagechangeproject.eng.pharmacyProjectTittle;
        document.getElementById("barbacueprojecttittle").textContent = languagechangeproject.eng.barbacueProjectTittle;
        document.getElementById("barbacueprojectparagraph").textContent = languagechangeproject.eng.barbacueProject;
        

        
}   
});

document.addEventListener("DOMContentLoaded", function(e){
    let linktxt = "(Imago Rendering Studio)"
    let languagechange = {
        eng: {
            paragraphAboutZero:"Hi! I'm Rodrigo Gastón Figueredo, an architect graduated from the college of Architecture, Design and Urban planning, Montevideo-Uruguay. I'm specialize in architectural projects, from the first sketches and its initial concept, to the material concretion.",
            paragraphAboutOne: 'My training and experience in architecture, integrated with my professional use of computer technologies(Building Information Modeling "BIM") allow me to generate a 3D model that develops a real construction process, improving productivity, coordination and reducing costs, in addition to being able to provide the client a hyper-realistic functional and visual experience before the buildings concretion. I have advisers and experts from each area for the execution of residential, commercial and industrial projects.',
            downloadcv: "Download my CV",
            paragraphAboutTwo: "I am a co-founder of architectural visualization studio " + linktxt + ", producing trusted architectural visualization services for busineses and architecture professionals. I'm specialized in developing Architectural Renderings, 3D Architecture, Computer Graphics Images and any kind of Architectural Visualization in the field of architecture, urban planning and civil engineering.",
        }
    };

    if (window.location.hash === "#eng") {
        document.getElementById("paragraphabout").textContent = languagechange.eng.paragraphAboutOne;
        document.getElementById("paragraphabout2").textContent = languagechange.eng.paragraphAboutTwo;
        document.getElementById("paragraphaboutZero").textContent = languagechange.eng.paragraphAboutZero;
        document.getElementById("downloadcv").textContent = languagechange.eng.downloadcv;
     
    }   
});
      
document.addEventListener("DOMContentLoaded", function(e){
    let language = {
        eng: {
            contact: " contact",
            project: " projects",
            about: " about me",
            imago: " imago",
            home: " home",
            tittleEnglish:"architecture"
        }
    };
    //define language via window hash
    if (window.location.hash === "#eng") {

        //desktop
        document.getElementById("contactenglish").textContent = language.eng.contact;
        document.getElementById("projectenglish").textContent = language.eng.project;
        document.getElementById("aboutenglish").textContent = language.eng.about;
        document.getElementById("imagoenglish").textContent = language.eng.imago;
        document.getElementById("homeenglish").textContent = language.eng.home;
        document.getElementById("tittleenglish").textContent = language.eng.tittleEnglish;
        
        //phone
        document.getElementById("contactenglishphone").textContent = language.eng.contact;
        document.getElementById("projectenglishphone").textContent = language.eng.project;
        document.getElementById("aboutenglishphone").textContent = language.eng.about;
        document.getElementById("imagoenglishphone").textContent = language.eng.imago;
        document.getElementById("homeenglishphone").textContent = language.eng.home;

        //mantener el #eng cuando hago click en los links
        document.getElementById("contactenglish").href = "contactame.html#eng";
        document.getElementById("projectenglish").href = "proyectos.html#eng";
        document.getElementById("aboutenglish").href = "sobremi.html#eng";
        document.getElementById("homeenglish").href = "index.html#eng";
        document.getElementById("contactenglishphone").href = "contactame.html#eng";
        document.getElementById("projectenglishphone").href = "proyectos.html#eng";
        document.getElementById("aboutenglishphone").href = "sobremi.html#eng";
        document.getElementById("homeenglishphone").href = "index.html#eng";
        document.getElementById("barbacueproject").href = "barbacue.html#eng";
        document.getElementById("apartmentproject").href = "apartment.html#eng"; 
        document.getElementById("labproject").href = "lab.html#eng"; 
        document.getElementById("buildingproject").href = "building.html#eng"; 
        document.getElementById("house2018project").href = "housing-competition.html#eng"; 
        document.getElementById("house2018bproject").href = "housing-competition2.html#eng"; 
        document.getElementById("finalcareerproject").href = "final-career-pr.html#eng"; 
        document.getElementById("urbanproject").href = "urban-project.html#eng"; 
        document.getElementById("house2015project").href = "housing-competition3.html#eng"; 
        document.getElementById("house2016project").href = "housing-competition4.html#eng";
        
    }   
 
});

function timedRefresh() {
    setTimeout("location.reload(true);", 600);
    }