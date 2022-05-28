import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Vuelos } from '../models';
import { VuelosRepository } from '../repositories';
export declare class VueloController {
    vuelosRepository: VuelosRepository;
    constructor(vuelosRepository: VuelosRepository);
    create(vuelos: Omit<Vuelos, 'id'>): Promise<Vuelos>;
    count(where?: Where<Vuelos>): Promise<Count>;
    find(filter?: Filter<Vuelos>): Promise<Vuelos[]>;
    updateAll(vuelos: Vuelos, where?: Where<Vuelos>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Vuelos>): Promise<Vuelos>;
    updateById(id: string, vuelos: Vuelos): Promise<void>;
    replaceById(id: string, vuelos: Vuelos): Promise<void>;
    deleteById(id: string): Promise<void>;
}
