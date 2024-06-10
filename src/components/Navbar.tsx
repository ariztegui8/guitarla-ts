import { IoCartSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Navbar = ({ cart, deleteItem, addQuantity, deleteQuantity, vaciarCarrito, clickCart, isEmpty, cartTotal, handleClickCart }) => {


    return (
        <div className="bg-slate-400 p-3">
            <div className="flex justify-between gap-3 max-w-6xl m-auto">
                <h1 className="text-white text-2xl font-bold">Navbar</h1>
                <div className="relative">
                    <IoCartSharp
                        size={30}
                        color="#fff"
                        className="cursor-pointer"
                        onClick={handleClickCart}
                    />
                    <div>
                        <span className={`bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-2 ${isEmpty ? 'hidden' : 'absolute'}`}>
                            {cart.length}
                        </span>
                    </div>
                    <div className={`bg-white top-[35px] right-0 p-3 shadow-md min-w-80 ${clickCart ? 'absolute' : 'hidden'}`}>
                        {isEmpty ?
                            <div className="text-center p-3 w-[300px] mb-3">
                                <p className="font-semibold">No hay productos en el carrito</p>
                            </div>
                            :
                            <>
                                <table className="w-full mb-2">
                                    <thead>
                                        <tr>
                                            <th className="p-2">
                                                <p className="font-bold ">Imagen</p>
                                            </th>
                                            <th className="p-2">
                                                <p className="font-bold ">Nombre</p>
                                            </th>
                                            <th className="p-2">
                                                <p className="font-bold ">Precio</p>
                                            </th>
                                            <th className="p-2">
                                                <p className="font-bold ">Cantidad</p>
                                            </th>
                                            <th>

                                            </th>
                                        </tr>
                                    </thead>
                                    <tr>
                                        <td colSpan="5">
                                            <hr className=" border-gray-400" />
                                        </td>
                                    </tr>
                                    <tbody>
                                        {cart.map(item => (
                                            < >
                                                <tr >
                                                    <td className="p-2">
                                                        <img className="w-8" src={item.image} />
                                                    </td>
                                                    <td className="p-2">
                                                        <p className="w-max">{item.name}</p>
                                                    </td>
                                                    <td className="p-2">
                                                        <p className="font-bold">${item.price}</p>
                                                    </td>
                                                    <td className="p-2">
                                                        <div className="flex items-center gap-1">
                                                            <button onClick={() => deleteQuantity(item.id)} className="bg-black text-white px-1">-</button>
                                                            <p>{item.quantity}</p>
                                                            <button onClick={() => addQuantity(item.id)} className="bg-black text-white px-1">+</button>
                                                        </div>
                                                    </td>
                                                    <td className="p-2">
                                                        <MdDelete
                                                            size={22}
                                                            color="rgb(239 68 68)"
                                                            className="cursor-pointer"
                                                            onClick={() => deleteItem(item.id)}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="5">
                                                        <hr className=" border-gray-400" />
                                                    </td>
                                                </tr>
                                            </>
                                        ))}
                                    </tbody>

                                </table>


                                <div className="mb-6">
                                    <p className="text-right">Total a pagar: <span className="font-bold">${cartTotal}</span></p>
                                </div>
                            </>
                        }

                        <div>
                            <button onClick={() => vaciarCarrito()} className="bg-black text-white w-full p-2">Vaciar Carrito</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar