"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let RutaRepository = class RutaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, aeropuertoRepositoryGetter) {
        super(models_1.Ruta, dataSource);
        this.aeropuertoRepositoryGetter = aeropuertoRepositoryGetter;
        this.destino_aeropuerto = this.createBelongsToAccessorFor('destino_aeropuerto', aeropuertoRepositoryGetter);
        this.registerInclusionResolver('destino_aeropuerto', this.destino_aeropuerto.inclusionResolver);
        this.origen_aeropuerto = this.createBelongsToAccessorFor('origen_aeropuerto', aeropuertoRepositoryGetter);
        this.registerInclusionResolver('origen_aeropuerto', this.origen_aeropuerto.inclusionResolver);
    }
};
RutaRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongo')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('AeropuertoRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongoDataSource, Function])
], RutaRepository);
exports.RutaRepository = RutaRepository;
//# sourceMappingURL=ruta.repository.js.map