
export interface HttpAdapter {
    get<T>( url: string ): Promise<T>
}

// Una clase adaptadora, declaramos lo que deba implementar
// para poder utilizarla en cualquier otro servicio

// Toca clase que implemente el HttpAdapter va a tener que tener
// la peticion get, recibe el url (es de tipo String) y esto es una promesa
// pero la promesa debe resolver algo