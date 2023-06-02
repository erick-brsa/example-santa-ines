export default function ConocenosPage() {
	return (
		<main className="flex justify-center py-8">
			<section className="w-full max-w-5xl p-5">
				<div className="flex flex-col md:flex-row justify-center items-center">
					<div className="flex flex-col gap-2 p-5">
						<h2 className="font-bold text-4xl text-gray-700">¿Quiénes somos?</h2>
						<p className="text-gray-600">
							Somos un laboratorio clínico comprometido con la salud y el bienestar de nuestros pacientes. Con una trayectoria de excelencia y calidad en nuestros servicios, nos esforzamos por brindar resultados confiables y precisos para respaldar el diagnóstico y tratamiento médico.
						</p>
					</div>
					<div className="p-5">
						<img 
							src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
							alt="Conócenos image"
							className="rounded"	
						/>
					</div>
				</div>
				<div className="flex flex-col-reverse md:flex-row justify-center items-center">
					<div className="p-5">
						<img 
							src="https://images.unsplash.com/photo-1602052577122-f73b9710adba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
							alt="Conócenos image"
							className="rounded"
						/>
					</div>
					<div className="flex flex-col gap-2 p-5">
						<h2 className="font-bold text-4xl text-gray-700">Nuestro equipo</h2>
						<p className="text-gray-600">
						Nuestro equipo está conformado por profesionales altamente capacitados y apasionados por su trabajo. Contamos con tecnología de vanguardia y seguimos los estándares más rigurosos en todas nuestras pruebas y análisis. Estamos comprometidos con mantenernos actualizados con los avances científicos más recientes para ofrecer un servicio de calidad superior.
						</p>
					</div>
				</div>
			</section>
		</main>
	)
}
