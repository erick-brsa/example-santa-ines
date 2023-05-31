import Link from 'next/link'

export function CatalogueCard({ study }) {
	return (
		<div className='shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow'>
			<Link
				href={`/`}
				className="grid grid-rows-[auto_1fr_auto] h-full"
			>
				<div className="flex">
					<h2 className="px-4 py-2 bg-[#000162] w-full text-white font-semibold">
						{study.name}
					</h2>
				</div>

				<div className="p-4">
					<div className="uppercase">
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
				</div>
				<footer className="bg-gray-400 tex-white p-4">
					<p className="uppercase font-semibold">
						Costo: ${study.price}
					</p>
				</footer>
			</Link>
		</div>
	)
}
