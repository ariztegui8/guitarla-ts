import { useReducer } from "react"
import CardGuitar from "./components/CardGuitar"
import Navbar from "./components/Navbar"
import { useCart } from "./hooks/useCart"
import { cartReducer, initialState } from "./reducers/cart-reducer"


const App = () => {

  const { cart, handleAddCart, deleteItem, addQuantity, deleteQuantity, vaciarCarrito, clickCart, isEmpty, cartTotal, handleClickCart} = useCart()
  const [state, dispatch] = useReducer(cartReducer, initialState)

  console.log(state);
  

  return (
    <div>
      <Navbar
        cart={cart}
        deleteItem={deleteItem}
        addQuantity={addQuantity}
        deleteQuantity={deleteQuantity}
        vaciarCarrito={vaciarCarrito}
        clickCart={clickCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
        handleClickCart={handleClickCart}
      />
      <CardGuitar
        handleAddCart={handleAddCart}
        state={state}
      />
    </div>
  )
}

export default App