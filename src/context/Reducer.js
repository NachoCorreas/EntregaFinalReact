const LISTAME_PRODUCTOS = "LISTAME_PRODUCTOS";
const AGREGAR_CARRITO = "AGREGAR_CARRITO";
const ELIMINAR_CARRITO = "ELIMINAR_CARRITO";

export default function Reducer(state, action) {

  const { payload, type } = action;
  switch (type) {

    case LISTAME_PRODUCTOS:
      console.log("listame_productos", payload);
      return { ...state, products : payload };
      case AGREGAR_CARRITO:
        const productoAgregado = state.products.find((item) => item.id === parseInt(payload));
        return {
          ...state,
          carrito: [...state.carrito, productoAgregado],
        };
      

        case ELIMINAR_CARRITO:
            return {
              ...state,
              carrito: state.carrito.map((item) => item.id !== payload),
            };
  }
}
