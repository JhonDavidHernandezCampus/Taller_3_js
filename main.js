let myFormularioCampus = document.querySelector("#myFormularioCampus")
let myFormularioPersonas = document.querySelector("#myFormularioPersonas")

let campus = {};

myFormularioCampus.addEventListener("submit",(e)=>{
    e.preventDefault();/* para que el formulario no me redireccione a otra pagina */
    let data = Object.fromEntries(new FormData(e.target));
    campus[`${data.nombreSede}`] = {Camper: [],trainer: []};
    console.log(campus);
    listaSedes();

    myFormularioCampus.reset()
})
3

let listaSedes = ()=>{
let opciones = document.querySelector("[name='Sede']")

    for (let [val , id] of Object.entries(campus)) {
        console.log(id);
        opciones.insertAdjacentHTML("beforeend", `
        <option value="${val}">${val}</option>
        `)        
    }

    console.log(Object.entries(campus));/* me convierte un objeto a un araylist */

}

myFormularioPersonas.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    console.log(data)
    campus[`${data.Sede}`]["camper"].unshift(data);
    console.log(campus);

    myFormularioPersonas.reset();
})





