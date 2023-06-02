'use client'

export function Form() {

    function handleSignin(e) {
		e.preventDefault()
	} 

	return (
		<form
			className="space-y-4 md:space-y-6"
			action="#"
			method="POST"
			onSubmit={handleSignin}
		>
			<div>
				<label
					for="email"
					className="block mb-2 text-sm font-medium text-gray-900"
				>
					Correo electrónico
				</label>
				<input
					type="email"
					name="email"
					id="email"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
					placeholder="erickbriones@santa-ines.com"
					required=""
				/>
			</div>
			<div>
				<label
					for="password"
					className="block mb-2 text-sm font-medium text-gray-900"
				>
					Contraseña
				</label>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="••••••••"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
					required=""
				/>
			</div>
			<div className="flex items-center justify-between">
				<div className="flex items-start">
					<div className="flex items-center h-5">
						<input
							id="remember"
							aria-describedby="remember"
							type="checkbox"
							className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
							required=""
						/>
					</div>
					<div className="ml-3 text-sm">
						<label for="remember" className="text-gray-500">
							Recuérdame
						</label>
					</div>
				</div>
				<a
					href="#"
					className="text-sm font-medium text-primary-600 hover:underline500"
				>
					¿Olvidaste tu contraseña?
				</a>
			</div>
			<button
				type="submit"
				className="w-full bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-900 font-semibold focus:ring-4 focus:outline-none focus:ring-primary-300 transition-colors rounded-lg text-sm px-5 py-2.5 text-center"
			>
				Ingresar
			</button>
			<p className="text-sm font-light text-gray-500400">
				¿Todavía no tienes una cuenta?{' '}
				<a
					href="#"
					className="font-medium text-primary-600 hover:underline500"
				>
					Regístrate
				</a>
			</p>
		</form>
	)
}
