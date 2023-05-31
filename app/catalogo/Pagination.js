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
					<Link href={`/catalogo?page=${currentPage + 2}`} className='p-2 bg-[#000162] text-white text-lg font-semirounded-lg'>
						Siguiente
					</Link>
				) : currentPage === 1 ?(
					<Link href={`/catalogo?page=${currentPage + 1}`} className='p-2 bg-[#000162] text-white text-lg font-semirounded-lg'>
						Siguiente
					</Link>
				): (currentPage < numberOfPages) ? (
					<>
						<Link href={`/catalogo?page=${currentPage - 1}`} className='p-2 bg-[#000162] text-white text-lg font-semirounded-lg'>
							Anterior
						</Link>
						<Link href={`/catalogo?page=${currentPage + 1}`} className='p-2 bg-[#000162] text-white text-lg font-semirounded-lg'>
							Siguiente
						</Link>
					</>
				) : (currentPage === numberOfPages) && (
					<Link href={`/catalogo?page=${currentPage - 1}`} className='p-2 bg-[#000162] text-white text-lg font-semirounded-lg'>
						Anterior
					</Link>
				)
			}
		</div>
	)
}
