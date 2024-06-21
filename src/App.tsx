import CardGuitar from "./components/CardGuitar"
import Navbar from "./components/Navbar"
import { useCart } from "./hooks/useCart"


const App = () => {

  const { cart, handleAddCart, deleteItem, addQuantity, deleteQuantity, vaciarCarrito, clickCart, isEmpty, cartTotal, handleClickCart, data} = useCart()

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
        data={data}
      />
    </div>
  )
}

export default App