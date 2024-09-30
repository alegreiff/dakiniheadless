export interface Dkprod {
  productos: Producto[];
}

export interface Producto {
  title:     string;
  categoria: Categoria;
  content:   null | string;
}

export interface Categoria {
  tipo: Tipo[];
}

export enum Tipo {
  Bolsa = "bolsa",
  Camiseta = "camiseta",
}
