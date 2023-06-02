import Link from 'next/link'

export function CatalogueCard({ study }) {
	return (
		<div className='bg-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] rounded-xl overflow-hidden border border-gray-200 transition-shadow'>
			<Link
				href={`/`}
				className="grid grid-rows-[auto_1fr_auto] h-full"
			>	
				<div className="flex bg-blue-900 text-white">
					<h2 className="w-full font-semibold px-4 py-2">
						{study.name}
					</h2>
				</div>

				<div className="p-4 uppercase text-gray-500">
					<p className="text-md">
						Condiciones: {study.conditions}
					</p>
					<p className="text-md">Recipiente: {study.recipient}</p>
					<p className="text-md">
						Muestra Primaria: {study.primary_sample}
					</p>
					<p className="text-md">
						Días para entregar resultados:{' '}
						{study.days_for_results}
					</p>
				</div>

				<footer className="rounded-lg border bg-blue-50 text-blue-800 mx-4 mb-4 px-4 py-2 max-w-fit">
					<p className="uppercase font-semibold text-sm">
						Costo: ${study.price}
					</p>
				</footer>
			</Link>
		</div>
	)
}
