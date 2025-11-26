let lista = document.querySelector(".lista");
let filtroAlumnos = document.querySelector("#filtroAlumnos");
let btnBuscar = document.querySelector("#btnBuscar");
let btnLimpiar = document.querySelector("#btnLimpiar");

var alumnos = [{
    id: 1,
    nombre: "Barbara Rossana",
    apellidoPaterno: "Perez",
    apellidoMaterno: "Silva",
    pelicula: "Interview with the Vampire"
},{
    id: 2,
    nombre: "Karla Sarahí",
    apellidoPaterno: "Cantú",
    apellidoMaterno: "Barcenas",
    pelicula: "Cars"
},{
    id: 3,
    nombre: "Valeria",
    apellidoPaterno: "Ybarra",
    apellidoMaterno: "López",
    pelicula: "Eyes Wide Shut"
},{
    id: 4,
    nombre: "Carlos Oswaldo",
    apellidoPaterno: "González",
    apellidoMaterno: "Garza",
    pelicula: "Anora"
},{
    id: 5,
    nombre: "Ruperta",
    apellidoPaterno: "Bernal",
    apellidoMaterno: "Silva",
    pelicula: "Bugonia"
}]

document.addEventListener("DOMContentLoaded", function(){
    alumnos.forEach(function(alumno){
        let li = document.createElement("li");
        li.innerHTML = `<span> ${alumno.nombre} ${alumno.apellidoPaterno} ${alumno.apellidoMaterno}</span><strong> ${alumno.pelicula}</strong>`;
        lista.appendChild(li)
    });

    btnBuscar.addEventListener("click", function(){
        let filtro = filtroAlumnos.value.toLowerCase();
        lista.innerHTML = "";
        let alumnosFiltrados = alumnos.filter(function(alumno){
            return  alumno.nombre.toLowerCase().includes(filtro) ||
                    alumno.apellidoPaterno.toLowerCase().includes(filtro) ||
                    alumno.apellidoMaterno.toLowerCase().includes(filtro);
        });
        alumnosFiltrados.forEach(function(alumno){
            let li = document.createElement("li");
            li.innerHTML = `<span> ${alumno.nombre} ${alumno.apellidoPaterno} ${alumno.apellidoMaterno}</span><strong> ${alumno.pelicula}</strong>`;
            lista.appendChild(li);
        });
    });

    btnLimpiar.addEventListener("click", function(){
        filtroAlumnos.value = "";
        lista.innerHTML = "";
        alumnos.forEach(function(alumno){
            let li = document.createElement("li");
            li.innerHTML = `<span> ${alumno.nombre} ${alumno.apellidoPaterno} ${alumno.apellidoMaterno}</span><strong> ${alumno.pelicula}</strong>`;
            lista.appendChild(li);
        });
    });
});