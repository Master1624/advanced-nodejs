function operacionCompleja() {
  debugger;
  console.time("operacionCompleja");
  console.log("Realizando operación compleja");
  for (let index = 0; index < 100000; index++) {
    Math.sqrt(index);
  }
  console.timeEnd("operacionCompleja");
  console.trace("Fin de operacionCompleja");
}

function operacionA() {
  operacionCompleja();
}

function procesoB() {
  operacionA();
}

procesoB();
