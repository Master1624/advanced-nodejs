function runMiddlewares(req, res, middlewares) {
  let index = 0;
  const next = () => {
    if (index < middlewares.length) {
      const middleware = middlewares[index++];
      middleware(req, res, next);
    }
  };
  next();
}

const middleware1 = (req, res, next) => {
  console.log("Middleware 1: autenticacion de la peticion");
  next();
};
const middleware2 = (req, res, next) => {
  console.log("Middleware 2: procesamiento de la peticion");
  next();
};
const middleware3 = (req, res, next) => {
  console.log("Middleware 3: condicionalidad de la peticion");
  if (req.url === "/allow-all") {
    console.log("Allow all middlewares executions");
    next();
  } else {
    console.log("Prevent fourth middleware execution");
  }
};
const middleware4 = (req, res, next) => {
  console.log("Middleware 4: finalizacion de la peticion");
  next();
};

const req = { url: "/prevent" };
const res = {};

runMiddlewares(req, res, [middleware1, middleware2, middleware3, middleware4]);
console.log("Middlewares executed successfully.");