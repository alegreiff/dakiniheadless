import { API_BASE_URL } from "./constantes";

export const getDatosBasicos = async() => {
  const response = await fetch(API_BASE_URL,
    {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        query: `#graphql
          query NewQuery {
					settings: allSettings {
						title: generalSettingsTitle
						describe: generalSettingsDescription
					}
      }
        `
      }),
    }); 

    const { data } = await response.json();
    return data;
}
export const getListaProductos = async() => {
  const response = await fetch(API_BASE_URL,
    {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        query: `#graphql
          query ListaProductos {
  productos (first: 10000) {
    productos: nodes  {
      title
      categoria:productosTienda {
        tipo: dkTipoProducto
      }
      content
    }
  }
}  
        `
      }),
    }); 

    const { data } = await response.json();
    return data;
}
/*

 */