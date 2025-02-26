"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/app.ts
var import_express = __toESM(require("express"));

// src/function/create_user.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
function createUser(data) {
  return __async(this, null, function* () {
    const newUser = {
      nome: data.nome,
      nomeCivil: data.nomeCivil,
      docIdOrgUf: data.docIdOrgUf,
      cpf: data.cpf,
      dataNascimento: data.dataNascimento,
      cnh: data.cnh,
      nomePai: data.nomePai,
      nomeMae: data.nomeMae,
      categoria: data.categoria,
      numeroRegistro: data.numeroRegistro,
      dataValidade: data.dataValidade,
      primeiraHabilitacao: data.primeiraHabilitacao,
      observacoes: data.observacoes,
      local: data.local,
      uf: data.uf,
      dataEmissao: data.dataEmissao,
      numeroValidacao: data.numeroValidacao,
      renach: data.renach
    };
    const savedUser = yield prisma.usuarios.create({
      data: newUser
    });
    return { success: true, user: savedUser.id };
  });
}
var create_user_default = createUser;

// src/function/get_user.ts
var import_client2 = require("@prisma/client");
var prisma2 = new import_client2.PrismaClient();
function getUserById(userId) {
  return __async(this, null, function* () {
    const user = yield prisma2.usuarios.findUnique({
      where: {
        id: userId
      }
    });
    return user;
  });
}
var get_user_default = getUserById;

// src/app.ts
var app = (0, import_express.default)();
app.use(import_express.default.json());
var PORT = process.env.PORT || 3e3;
app.get("/", (req, res) => {
});
app.post("/create", CreateUser);
app.get("/:id", getUser);
function CreateUser(req, res) {
  return __async(this, null, function* () {
    const data = req.body;
    const user = yield create_user_default(data);
    res.json({ message: "Dados recebidos", user });
  });
}
function getUser(req, res) {
  return __async(this, null, function* () {
    const userId = req.params.id;
    const user = yield get_user_default(userId);
    res.json(user);
  });
}
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
