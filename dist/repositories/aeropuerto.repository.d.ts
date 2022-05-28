import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Aeropuerto, AeropuertoRelations, Ruta } from '../models';
import { RutaRepository } from './ruta.repository';
export declare class AeropuertoRepository extends DefaultCrudRepository<Aeropuerto, typeof Aeropuerto.prototype.id, AeropuertoRelations> {
    protected rutaRepositoryGetter: Getter<RutaRepository>;
    readonly origen_aeropuerto: BelongsToAccessor<Ruta, typeof Aeropuerto.prototype.id>;
    constructor(dataSource: MongoDataSource, rutaRepositoryGetter: Getter<RutaRepository>);
}
