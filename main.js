// Contador de visitas
let visitas = localStorage.getItem("visitas") || 0;
visitas++;
localStorage.setItem("visitas", visitas);
console.log("Visitas:", visitas);
