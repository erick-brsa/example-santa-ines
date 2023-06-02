'use client';

import { useSearchParams } from 'next/navigation'
import Link from 'next/link';

export function Pagination({ catalogueCount }) {
	
	const searchParams = useSearchParams()
	const currentPage = Number(searchParams.get('page'))
	const numberOfPages = Math.ceil(catalogueCount / 9)
	
	return (
		<div className="flex justify-center gap-5">
			{
				currentPage === 0 ? (
					<Link href={`/catalogo?page=${currentPage + 2}`} className='bg-white text-blue-800 border-2 border-blue-800 text-lg font-semi rounded-lg p-2'>
						Siguiente
					</Link>
				) : currentPage === 1 ?(
					<Link href={`/catalogo?page=${currentPage + 1}`} className='bg-white text-blue-800 border-2 border-blue-800 text-lg font-semi rounded-lg p-2'>
						Siguiente
					</Link>
				): (currentPage < numberOfPages) ? (
					<>
						<Link href={`/catalogo?page=${currentPage - 1}`} className='bg-white text-blue-800 border-2 border-blue-800 text-lg font-semi rounded-lg p-2'>
							Anterior
						</Link>
						<Link href={`/catalogo?page=${currentPage + 1}`} className='bg-white text-blue-800 border-2 border-blue-800 text-lg font-semi rounded-lg p-2'>
							Siguiente
						</Link>
					</>
				) : (currentPage === numberOfPages) && (
					<Link href={`/catalogo?page=${currentPage - 1}`} className='bg-white text-blue-800 border-2 border-blue-800 text-lg font-semi rounded-lg p-2'>
						Anterior
					</Link>
				)
			}
		</div>
	)
}
