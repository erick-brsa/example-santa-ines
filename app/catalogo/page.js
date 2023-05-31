import axios from 'axios'
import { Pagination } from '../components'
import { CatalogueList } from './CatalogueList'

async function getData() {
	const { data } = await axios.get(
		'https://raw.githubusercontent.com/erick-brsa/example-santa-ines/main/public/datos.json'
	);
	return data;
}

export default async function CataloguePage({ searchParams }) {
	const catalogue = await getData();

	const { page = '0' } = searchParams;
console.log(catalogue.length)
	return (
		<main className="py-5">
			<div className="">
				<h1 className="text-xl font-bold text-center">
					Catálogo
				</h1>
			</div>
			<CatalogueList catalogue={catalogue} />
			<Pagination catalogueCount={catalogue.length} />
		</main>
	);
}
