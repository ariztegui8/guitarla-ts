import { useEffect, useReducer } from "react"
import CardGuitar from "./components/CardGuitar"
import Navbar from "./components/Navbar"
import { cartReducer, initialState } from "./reducers/cart-reducer"


const App = () => {

  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
}, [state.cart])
  

  return (
    <div>
      <Navbar
        cart={state.cart}
        dispatch={dispatch}
      />
      <CardGuitar
        state={state}
        dispatch={dispatch}
      />
    </div>
  )
}

export default App