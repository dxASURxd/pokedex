// La idea de este envoltorio es que ayuda a que si axios cambia por alguna razon, solo tenemos
// que cambiar la clase AxiosAdapter
import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "../interfaces/http-adapter.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AxiosAdapter implements HttpAdapter{  // AxiosAdapter implementa la interfaz de mi HttpAdapter
    
    private axios: AxiosInstance = axios;
    
    async get<T>(url: string): Promise<T> {
        try {
            const { data } = await this.axios.get<T>(url);
            return data;
        } catch (error) {
            throw new Error('error');
        }
    }
}




// El Custom Provider es un patrón adaptador que encapsula el uso 
// de un servicio externo para permitir cambios futuros sin alterar
// el código principal. Se crea un adaptador personalizado para el
// servicio externo, manteniendo una interfaz común. Este adaptador
// sirve como una capa intermedia entre la aplicación y el servicio,
// implementando una interfaz específica (HTTPAdapter) para la interacción.
// La clase AxiosAdapter actúa como el adaptador específico para el
// servicio, encapsulando las llamadas al mismo. Esto promueve la
// modularidad y facilita la sustitución del servicio externo en el
// futuro.

// "interfaz" se refiere a un conjunto de métodos y propiedades que 
// definen el comportamiento de una clase o componente