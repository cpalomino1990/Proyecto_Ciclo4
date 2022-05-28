import { Aeropuerto, Ruta } from '../models';
import { AeropuertoRepository } from '../repositories';
export declare class AeropuertoRutaController {
    aeropuertoRepository: AeropuertoRepository;
    constructor(aeropuertoRepository: AeropuertoRepository);
    getRuta(id: typeof Aeropuerto.prototype.id): Promise<Ruta>;
}
