'use client'

import { useSearchParams } from 'next/navigation'
import { CatalogueCard } from './CatalogueCard';

export function CatalogueList({ catalogue }) {

	const searchParams = useSearchParams()
	const currentPage = Number(searchParams.get('page'))
	const skip = currentPage > 1 ? (currentPage - 1) * 9 : 0;
	const end = skip + 9;

	return (
		<div className="flex w-full max-w-6xl 2xl:max-w-7xl mx-auto">
			<div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 px-5 py-5">
				{catalogue.slice(skip, end).map((study) => (
					<CatalogueCard 
						key={study.id}
						study={study}
					/>
				))}
			</div>
		</div>
	)
}
