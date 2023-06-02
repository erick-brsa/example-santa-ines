import { Form } from "./Form"

export default function loginPage() {
	return (
		<main className="bg-gray-100">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-[calc(100vh-80px)] lg:py-5">
				<div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="flex flex-col text-3xl font-extrabold text-gray-700 items-center">
							<span>Iniciar Sesión</span>
						</h1>
						<Form />
					</div>
				</div>
			</div>
		</main>
	)
}
