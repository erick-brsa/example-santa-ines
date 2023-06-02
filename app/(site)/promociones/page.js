import axios from 'axios'
import { CatalogueList } from '../catalogo/CatalogueList'

async function getData() {
  const { data } = await axios(
    'https://raw.githubusercontent.com/erick-brsa/example-santa-ines/main/public/datos.json'
  )
  return data
}

export default async function conodenosPage() {

  const catalogue = await getData() 

  return (
    <main className='py-10'>
      <div className="pb-5">
				<h1 className="text-xl font-bold text-center">
					Promociones
				</h1>
			</div>
      <CatalogueList catalogue={catalogue} />
    </main>
  )
}
