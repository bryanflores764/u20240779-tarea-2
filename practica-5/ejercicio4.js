let plan = "Básico"; 

switch (plan) {
  case "Básico":
    console.log("Plan Básico: Acceso limitado a contenido.");
    break;
  case "Estándar":
    console.log("Plan Estándar: Acceso a la mayoría del contenido.");
    break;
  case "Premium":
    console.log("Plan Premium: Acceso ilimitado a todo el contenido.");
    break;
  default:
    console.log("Plan no válido.");
}