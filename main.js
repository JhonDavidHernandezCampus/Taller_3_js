let myFormularioCampus = document.querySelector("#myFormularioCampus")
let myFormularioPersonas = document.querySelector("#myFormularioPersonas")

let campus = {sedes:[]

};


myFormularioCampus.addEventListener("submit",(e)=>{
    e.preventDefault();/* para que el formulario no me redireccione a otra pagina */
    let data = Object.fromEntries(new FormData(e.target));
    campus[`${data.nombre_de_Sede}`] = { "Campers":[]
    };


    console.log(campus);

    listaSedes('[name="Sede"]', campus);

    console.log("Objeto",Object.fromEntries(new FormData(e.target)));
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
    console.log("..");
    console.log("..");
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sede = data.Sede;

    console.log(sede);
    console.log(data.nombre_de_Sede);
    delete data.sede;                       /* quitar propiedad de un objeto */

    campus[`${sede}`]["Campers"].unshift(data); 

    myFormularioPersonas.reset()
})

console.log(campus)





