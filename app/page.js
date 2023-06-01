import Link from 'next/link'

export default function HomePage() {
	return (
		<main className="w-full py-10 px-5">
			<div className="flex flex-col items-center gap-10 max-w-5xl bg-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] rounded-xl mx-auto py-14 px-10">
				<div className='flex flex-col gap-5'>
					<h1 className="flex flex-col text-6xl font-extrabold text-gray-600 gap-4 items-center">
						<span>Laboratorio Clínico</span>
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
							Santa Inés
						</span>
					</h1>
					<p className="text-lg text-gray-600 max-w-xl text-center">Nuestro objetivo principal es contribuir al bienestar y la salud de nuestros pacientes.</p>
				</div>
				
				<form className="w-full">
						<div className="flex">
							<div className="relative w-full">
									<input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-l-md" placeholder="Buscar..." required />
									<button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-900 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
											<svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
											<span className="sr-only">Search</span>
									</button>
							</div>
						</div>
				</form>
			</div>
			<div className="max-w-5xl py-10 mx-auto">
				<div className='bg-white grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] rounded-xl p-5'>
					<Link href="/catalogo" className="bg-blue-50 hover:bg-blue-100 text-blue-800 mx-auto w-full transition-colors max-w-lg lg:w-full border border-blue-900 rounded-xl text-center px-4 py-2 text-lg font-semibold">Catálogo</Link>
					<Link href="/agendar-cita" className="bg-blue-50 hover:bg-blue-100 text-blue-800 mx-auto w-full transition-colors max-w-lg lg:w-full border border-blue-900 rounded-xl text-center px-4 py-2 text-lg font-semibold">Agendar Cita</Link>
					<Link href="/cotizar" className="bg-blue-50 hover:bg-blue-100 text-blue-800 mx-auto w-full transition-colors max-w-lg lg:w-full border border-blue-900 rounded-xl text-center px-4 py-2 text-lg font-semibold">Cotizar</Link>
				</div>
			</div>
		</main>
	)
}
