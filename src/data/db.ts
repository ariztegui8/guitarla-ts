import guitar1 from '../assets/guitar1.webp'
import guitar2 from '../assets/guitar2.webp'
import guitar3 from '../assets/guitar3.webp'
import guitar4 from '../assets/guitar4.webp'
import guitar5 from '../assets/guitar5.webp'
import guitar6 from '../assets/guitar6.webp'
import guitar7 from '../assets/guitar7.webp'
import guitar8 from '../assets/guitar8.webp'
import guitar9 from '../assets/guitar9.webp'
import guitar10 from '../assets/guitar10.webp'
import guitar11 from '../assets/guitar11.webp'
import guitar12 from '../assets/guitar12.webp'

type Guitar = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export const guitars: Guitar[] = [
    {
        id: 1,
        name: 'Guitarra 1',
        description: 'Descripcion de la guitarra numero 1 con un precio de...',
        price: 200,
        image: guitar1
    },
    {
        id: 2,
        name: 'Guitarra 2',
        description: 'Descripcion de la guitarra numero 2 con un precio de...',
        price: 300,
        image: guitar2
    },
    {
        id: 3,
        name: 'Guitarra 3',
        description: 'Descripcion de la guitarra numero 3 con un precio de...',
        price: 400,
        image: guitar3
    },
    {
        id: 4,
        name: 'Guitarra 4',
        description: 'Descripcion de la guitarra numero 4 con un precio de...',
        price: 500,
        image: guitar4
    },
    {
        id: 5,
        name: 'Guitarra 5',
        description: 'Descripcion de la guitarra numero 5 con un precio de...',
        price: 600,
        image: guitar5
    },
    {
        id: 6,
        name: 'Guitarra 6',
        description: 'Descripcion de la guitarra numero 6 con un precio de...',
        price: 700,
        image: guitar6
    },
    {
        id: 7,
        name: 'Guitarra 7',
        description: 'Descripcion de la guitarra numero 7 con un precio de...',
        price: 800,
        image: guitar7
    },
    {
        id: 8,
        name: 'Guitarra 8',
        description: 'Descripcion de la guitarra numero 8 con un precio de...',
        price: 900,
        image: guitar8
    },
    {
        id: 9,
        name: 'Guitarra 9',
        description: 'Descripcion de la guitarra numero 9 con un precio de...',
        price: 1000,
        image: guitar9
    },
    {
        id: 10,
        name: 'Guitarra 10',
        description: 'Descripcion de la guitarra numero 10 con un precio de...',
        price: 1100,
        image: guitar10
    },
    {
        id: 11,
        name: 'Guitarra 11',
        description: 'Descripcion de la guitarra numero 11 con un precio de...',
        price: 1200,
        image: guitar11
    },
    {
        id: 12,
        name: 'Guitarra 12',
        description: 'Descripcion de la guitarra numero 11 con un precio de...',
        price: 1500,
        image: guitar12
    },
]