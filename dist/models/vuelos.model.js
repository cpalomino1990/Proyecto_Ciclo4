"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vuelos = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Vuelos = class Vuelos extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vuelos.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vuelos.prototype, "fecha_inicio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vuelos.prototype, "hora_inicio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vuelos.prototype, "fecha_fin", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vuelos.prototype, "hora_fin", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Vuelos.prototype, "asientos_vendidos", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vuelos.prototype, "nombre_piloto", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vuelos.prototype, "ruta", void 0);
Vuelos = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Vuelos);
exports.Vuelos = Vuelos;
//# sourceMappingURL=vuelos.model.js.map