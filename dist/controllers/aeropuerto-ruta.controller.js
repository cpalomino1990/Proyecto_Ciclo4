"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AeropuertoRutaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AeropuertoRutaController = class AeropuertoRutaController {
    constructor(aeropuertoRepository) {
        this.aeropuertoRepository = aeropuertoRepository;
    }
    async getRuta(id) {
        return this.aeropuertoRepository.origen_aeropuerto(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/aeropuertos/{id}/ruta', {
        responses: {
            '200': {
                description: 'Ruta belonging to Aeropuerto',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Ruta) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AeropuertoRutaController.prototype, "getRuta", null);
AeropuertoRutaController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.AeropuertoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.AeropuertoRepository])
], AeropuertoRutaController);
exports.AeropuertoRutaController = AeropuertoRutaController;
//# sourceMappingURL=aeropuerto-ruta.controller.js.map