'use client'

import Link from 'next/link'

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
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Nombre(s)
                </label>
                <input
                    type="name"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Erick Alan"
                />
            </div>
            <div>
                <label
                    for="surnames"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Apellidos
                </label>
                <input
                    type="surnames"
                    name="surnames"
                    id="surnames"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Briones Sánchez"
                />
            </div>
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
            <div>
                <label
                    for="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Repetir Contraseña
                </label>
                <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-900 font-semibold focus:ring-4 focus:outline-none focus:ring-primary-300 transition-colors rounded-lg text-sm px-5 py-2.5 text-center"
            >
                Regístrarse
            </button>
            <p className="text-sm font-light text-gray-500400">
                ¿Ya tienes una cuenta?{' '}
                <Link
                    href="/login"
                    className="font-medium text-primary-600 hover:underline500"
                >
                    Inicia Sesión
                </Link>
            </p>
        </form>
    )
}
