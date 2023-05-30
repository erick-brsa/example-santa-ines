
import axios from 'axios'

async function getData() {
  const { data } = await axios.get('https://raw.githubusercontent.com/erick-brsa/example-santa-ines/main/public/datos.json')
  return data
}

export default async function CataloguePage() {
  const catalogue = await getData()

  return (
    <main>
      <div className='py-3'>
        <h1 className='text-xl font-bold text-center'>Catálogo</h1>
      </div>
      <div className='flex justify-center w-full'>
        <div className='grid grid-cols-1 gap-5'>
          {catalogue.slice(0, 10).map(e => (
              <div 
                key={e.id}
                className='p-4 shadow-md rounded'
              >
                <div>
                  <h2>Nombre: {e.name}</h2>
                  <p>Condiciones: {e.conditions}</p>

                </div>
                <p>Muestra Primaria: {e.primary_sample}</p>
                <p>Recipiente: {e.recipent}</p>
                <p>Dóas para entregar resultados: {e.days_for_results}</p>
                <p>Costo: {e.price}</p>
              </div>
          ))}
        </div>
      </div>
    </main>
  )
}
