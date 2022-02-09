const express = require("express");
const app = express();
const port = 3000;
const model = require("./models");
var userCtrl = require("./controllers/userController");

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/add", userCtrl.addUser);

app.get("/CRUD", userCtrl.crudOperation);

app.get("/query", userCtrl.queryData);

app.get("/finder", userCtrl.finderData);

app.get("/setter-getter", userCtrl.setterGetter);

app.get("/validation", userCtrl.validationCont);

app.get("/raw-query", userCtrl.rawQuery);

app.get("/oneToOne", userCtrl.oneToOne);

app.get("/oneToMany", userCtrl.oneToMany);

app.get("/belongTo", userCtrl.belongsTo);

app.get("/manyToMany", userCtrl.manyToMany);

app.get("/scopes", userCtrl.scopes);

app.get('/loading',userCtrl.loading)

app.get('/polymorphic',userCtrl.polymorphic)

app.get('/polymorphic-many',userCtrl.polymorphicmany)

app.get('/paranoid',userCtrl.paranoid)

app.get('/transactions',userCtrl.transactions)

app.get('/hooks',userCtrl.hooks)

app.get('/query-interface',userCtrl.queryInterfaceData)






app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
