'use client'
import Header from '@/components/header'

export default function Homepage(){
    return (
        <main className="relative">
            <Header title='About Ocean Math'
            description='In this page, every information regarding Ocean Math is documented, including how to play Ocean Math and the lessons offered in the game' />
            <section className='flex flex-row bg-amber-700 bg-cover p-8 gap-4'>
                <div className='flex flex-1 flex-col p-8 text-center bg-yellow-200 rounded-md'>
                    <h2 className='text-3xl font-bold'>Overview</h2>
                    <p>Ocean Math is an educational game made for mobile and PC using Unity Engine.</p>
                </div>
                <div className='flex flex-1 flex-col p-8 text-center bg-yellow-200 rounded-md'>
                    <h2 className='text-3xl font-bold'>History</h2>
                </div>
                <div className='flex flex-1 flex-col p-8 text-center bg-yellow-200 rounded-md'>
                    <h2 className='text-3xl font-bold'>Featured Character</h2>
                </div>
            </section>
        </main>
    )
}