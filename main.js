let myFormularioCampus = document.querySelector("#myFormularioCampus")
let myFormularioPersonas = document.querySelector("#myFormularioPersonas")

let campus = {

};




myFormularioCampus.addEventListener("submit",(e)=>{
    e.preventDefault();/* para que el formulario no me redireccione a otra pagina */
    let data = Object.fromEntries(new FormData(e.target));
    campus[`${data.nombre_de_Sede}`] = { Niveles:[],Roadmap:[],Campers:[],Trainers:[]
    };

    console.log(campus);
    listaSedes('[name="Sede"]', campus);

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

    console.log(Object.entries(campus));/* me convierte un objeto a un araylist */
}


myFormularioPersonas.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let camper = data.Sede;
    delete data.camper;                       /* quitar propiedad de un objeto */
    campus[`${camper}`]["Campers"].unshift(data); 
    console.log(campus);
    myFormularioPersonas.reset()
})

console.log(campus)



