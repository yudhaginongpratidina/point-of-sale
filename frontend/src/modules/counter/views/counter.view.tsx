import { useAppSelector, useAppDispatch } from "../../../store"
import { increment, decrement, incrementByAmount } from "../slices/counter.slice"

export default function CounterView(){

    const dispatch = useAppDispatch()
    const { count } = useAppSelector(state => state.counter)

    return (
        <div className="w-full min-h-screen flex justify-center items-center p-4">
            <div className="w-full max-w-md border rounded-md shadow-sm drop-shadow-sm bg-white">
                <div className="w-full flex flex-col items-center justify-center gap-2 p-4 border-b border-black">
                    <h1 className="text-3xl font-bold">COUNTER</h1>
                    <span className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, quisquam.</span>
                </div>
                <div className="w-full flex flex-col items-center justify-center p-4">
                    <h1 className="text-8xl">{count}</h1>
                </div>
                <div className="w-full flex items-center justify-center gap-2 p-4 border-t border-black">
                    <button onClick={() => dispatch(increment())} className="px-4 py-2 border rounded-md border-blue-500 bg-blue-500 hover:bg-blue-700 text-white">Tambah</button>
                    <button onClick={() => dispatch(decrement())} className="px-4 py-2 border rounded-md border-red-500 bg-red-500 hover:bg-red-700 text-white">Kurangi</button>
                    <button onClick={() => dispatch(incrementByAmount(10))} className="px-4 py-2 border rounded-md border-green-500 bg-green-500 hover:bg-green-700 text-white">Tambah 10</button>
                </div>
            </div>
        </div>
    )
}