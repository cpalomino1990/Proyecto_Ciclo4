import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Vuelos, VuelosRelations } from '../models';
export declare class VuelosRepository extends DefaultCrudRepository<Vuelos, typeof Vuelos.prototype.id, VuelosRelations> {
    constructor(dataSource: MongoDataSource);
}
