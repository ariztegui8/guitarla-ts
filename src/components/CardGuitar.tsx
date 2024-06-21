import type {Guitar} from '../types/index'

type GuitarProps = {
    data: Guitar[];
    handleAddCart: (item: Guitar) => void;
}

const CardGuitar = ({ data, handleAddCart } : GuitarProps) => {


    return (
        <div className='grid grid-cols-1 gap-5 py-10 max-w-6xl m-auto sm:grid-cols-2 lg:grid-cols-3 '>
            {data.map(guitar => (
                <div key={guitar.id} className="flex gap-6 items-center justify-center shadow-md">
                    <div className='w-24'>
                        <img className='w-full' src={guitar.image} alt="" />
                    </div>
                    <div className="flex flex-col gap-2 max-w-48">
                        <h2 className='font-bold text-2xl'>{guitar.name}</h2>
                        <p className='text-sm mb-2'>{guitar.description}</p>
                        <p className='font-bold text-3xl text-amber-600 mb-2'>${guitar.price}</p>
                        <button onClick={() => handleAddCart(guitar)} className='bg-black text-white font-bold p-1'>Agregar al carrito</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardGuitar