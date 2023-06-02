import axios from 'axios'
import { Pagination } from '../../components'
import { CatalogueList } from './CatalogueList'

async function getData() {
	
	const { data } = await axios.get(
		'https://raw.githubusercontent.com/erick-brsa/example-santa-ines/main/public/datos.json'
	)
	return data
}

export default async function CataloguePage({ searchParams }) {
	
	const catalogue = await getData()

	return (
		<main className="py-10">
			<div className="pb-5">
				<h1 className="text-xl font-bold text-center">
					Catálogo
				</h1>
			</div>
			<CatalogueList catalogue={catalogue} />
			<Pagination catalogueCount={catalogue.length} />
		</main>
	);
}
