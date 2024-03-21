"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var impuestoCliente = new _impuestos["default"](100000, 20000);
var cliente1 = new _cliente["default"]("Cliente1");
cliente1.impuesto = impuestoCliente;
console.log(cliente1.calcularImpuesto());