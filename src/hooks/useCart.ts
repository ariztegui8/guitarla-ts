import { useEffect, useMemo, useState } from "react"
import type { CartItem, Guitar } from '../types/index'

export const useCart = () => {

    const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [cart, setCart] = useState(initialCart)
    const [clickCart, setClickCart] = useState(false)

    const MAX_QUANTITY = 10
    const MIN_QUANTITY = 1


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const handleAddCart = (item : Guitar) => {
        const itemExists = cart.findIndex(guitar => guitar.id === item.id)
        if (itemExists >= 0) {
            if (cart[itemExists].quantity >= MAX_QUANTITY) {
                return
            }
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity++
            setCart(updatedCart)
        } else {
            const newItem : CartItem = {...item, quantity: 1}
            setCart([...cart, newItem])
        }

    }

    const deleteItem = (id : Guitar['id']) => {
        const newCart = cart.filter(item => item.id !== id)
        setCart(newCart)
    }

    const addQuantity = (id : Guitar['id']) => {
        const newCart = cart.map(item => {
            if (item.id === id && item.quantity < MAX_QUANTITY) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(newCart)
    }

    const deleteQuantity = (id : Guitar['id']) => {
        const newCart = cart.map(item => {
            if (item.id === id && item.quantity > MIN_QUANTITY) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(newCart)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const isEmpty = useMemo(() => cart.length === 0, [cart])

    const cartTotal = useMemo(() => (cart.reduce((total, item) => total + (item.price * item.quantity), 0)), [cart])

    const handleClickCart = () => {
        setClickCart(!clickCart)
    }

    return {
        cart,
        handleAddCart,
        deleteItem,
        addQuantity,
        deleteQuantity,
        vaciarCarrito,
        clickCart,
        isEmpty,
        cartTotal,
        handleClickCart,

    }
}

