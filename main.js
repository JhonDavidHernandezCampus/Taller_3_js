let myFormularioCampus = document.querySelector("#myFormularioCampus")
let myFormularioPersonas = document.querySelector("#myFormularioPersonas")
let myFormularioTrainers = document.querySelector("#myFormularioTrainers")
let myFormularioNivel = document.querySelector("#myFormularioNivel")
let myFormularioRoadmap = document.querySelector("#myFormularioRoadmap")
let campus = {

};




myFormularioCampus.addEventListener("submit",(e)=>{
    e.preventDefault();/* para que el formulario no me redireccione a otra pagina */
    let data = Object.fromEntries(new FormData(e.target));
    campus[`${data.nombre_de_Sede}`] = { Niveles:[],Roadmap:[],Campers:[],Trainers:[]
    };
    console.log(campus);
    listaSedes('[name="Sede"]', campus);
    listaSedes('[name="sedeTrainer"]', campus);
    listaSedes('[name="sedeNivel"]', campus);
    listaSedes('[name="SedeRoadmap"]', campus);

    console.log("imprimo formulario campus",myFormularioCampus);
    mostarFormularios();
    console.log("Datos del formulario",Object.fromEntries(new FormData(e.target)));
    myFormularioCampus.reset()
})


let listaSedes = (p1,p2)=>{
let opciones = document.querySelector(p1)
    for (let [val , id] of Object.entries(p2)) {/* el parametro 2 es donde voy a ingressar el dato  que se encuentra en el parametro 1*/
        opciones.insertAdjacentHTML("beforeend", `+
        <option value="${val}">${val}</option>
        `)        
    }

    //console.log(Object.entries(campus));/* me convierte un objeto a un araylist */
}


myFormularioPersonas.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let camper = data.Sede;
    delete data.camper;                     /* quitar propiedad de un objeto */
    console.log("datos de los campers"+data);
    campus[`${camper}`]["Campers"].unshift(data); 
    console.log(campus);
    myFormularioPersonas.reset()
})

myFormularioTrainers.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sedeTrainer = data.sedeTrainer
    delete data.sedeTrainer;
    console.log("la sede trainers "+data.sedeTrainer);
    campus[`${sedeTrainer}`]["Trainers"].unshift(data);

    myFormularioTrainers.reset()
    console.log(campus);
})

myFormularioNivel.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sedeNivel = data.sedeNivel
    delete data.sedeNivel;
    console.log("la sede niveles "+data.sedeNivel);
    campus[`${sedeNivel}`]["Niveles"].unshift(data);

    myFormularioNivel.reset()
    console.log(campus);
})

myFormularioRoadmap.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let SedeRoadmap = data.SedeRoadmap
    delete data.SedeRoadmap;
    console.log("la sede roadmap "+data.SedeRoadmap);
    campus[`${SedeRoadmap}`]["Roadmap"].unshift(data);

    myFormularioRoadmap.reset()
    console.log(campus);
})

/* comienzo del desarrollo del ejercicio 2 */

/* decir de cada trainer en que salon  */
function mostrarAsignaturaTrainers(){
    console.log("Me muestra los campers de campus"+campus.Campers);
    console.log("Me muestra a los triners de campus"+campus.Trainers)
}

/* esta es la funcion que me controla la acion de mostarme los 
formularios correspondientes para cada selecion */
function mostarFormularios(){
    const tipo2 = document.formulario.tipo.selectedIndex
    /* document.querySelector(".campers").style.display="block"; */
    if(tipo2 ==1 ){
        document.querySelector(".campers").style.display="none";
        document.querySelector(".nivel").style.display="none";
        document.querySelector(".readmap").style.display="none";
        document.querySelector(".mostar").style.display="none";


        document.querySelector(".trainers").style.display="block";
        document.querySelector(".nivel").style.display="block";
        document.querySelector(".readmap").style.display="block";}
    else if(tipo2 == 2){
        document.querySelector(".trainers").style.display="none";
        document.querySelector(".nivel").style.display="none";
        document.querySelector(".readmap").style.display="none";
        document.querySelector(".mostar").style.display="none";


        document.querySelector(".campers").style.display="block";
        document.querySelector(".nivel").style.display="block";
        document.querySelector(".readmap").style.display="block";}
    else if(tipo2 == 3){
        document.querySelector(".campers").style.display="none";
        document.querySelector(".nivel").style.display="none";
        document.querySelector(".readmap").style.display="none";

        document.querySelector(".mostar").style.display="block";

    }
    else{
        console.log("ingrese que desea agregar(campers o Trainers)?")
    }

}

