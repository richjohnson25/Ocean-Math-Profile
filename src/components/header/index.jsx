import Image from "next/image";
import homeDraper from '../../../public/Ocean Math Draper.png'

export default function Header(information){
    return (
        <main className="relative">
            <section style={{ width: '100%', height: '600px', position: 'relative'}}>
                <Image
                    src={homeDraper}
                    fill
                    style={{ objectFit: 'cover' }}
                    alt="Header Section"
                />
                <div className='bg-gray-900/50 flex flex-col justify-center items-center gap-8 px-40 absolute inset-0'>
                    <h1 className='text-white text-6xl font-bold'>{information.title}</h1>
                    <p className='text-white text-center text-xl'>{information.description}</p>
                </div>
            </section>
        </main>
    )
}