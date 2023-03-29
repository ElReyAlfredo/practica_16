let express = require("express"); //Inyeccion de la dependecia de express
let app = express(); //App que hace la funcion de servidor

//Ponemos las rutas
let personsRoute = require("./routes/person");
let studentsRoute = require("./routes/student");
let addStudentsRoute = require("./routes/addStudent");

//Configuramos
app.set("view engine", "ejs");
app.use("/assets", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

//usamos las rutas
app.use(studentsRoute);
app.use(personsRoute);
app.use(addStudentsRoute);

//Configuramos el puerto
let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("escuchando en el puerto 3000");
});
