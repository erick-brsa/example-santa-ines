export default function resultsPage() {
	return (
		<main className="my-10 px-5">
			<div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] mx-auto">
				<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
					<h1 className="flex flex-col text-3xl font-extrabold text-gray-700 items-center">
						<span>Consulta de resultados</span>
					</h1>
					<form className="space-y-4 md:space-y-6" action="#">
						<div>
							<label
								for="email"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								Número de orden
							</label>
							<input
								type="email"
								name="orderId"
								id="orderId"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
								placeholder="12354334"
								required=""
							/>
						</div>
						<div>
							<label
								for="password"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								Id del paciente
							</label>
							<input
								type="text"
								name="patientId"
								id="patientId"
								placeholder="1234534"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
								required=""
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-900 font-semibold focus:ring-4 focus:outline-none focus:ring-primary-300 transition-colors rounded-lg text-sm px-5 py-2.5 text-center"
						>
							Consultar
						</button>
					</form>
				</div>
			</div>
		</main>
	)
}
