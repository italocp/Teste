"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// src/function/create_user.ts
var create_user_exports = {};
__export(create_user_exports, {
  default: () => create_user_default
});
module.exports = __toCommonJS(create_user_exports);
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
