import { useReducer, useEffect } from 'react';
import { useRouter } from 'next/router';

import { AuthContext, authReducer } from './AuthContext';

const AUTH_INITIAL_STATE = {
	isLoggedIn: false,
	user: null
};

export const Auth = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
	const router = useRouter()

	// Autenticación personalizada

	// checkToken

	// loginUser

	// registerUser

	// logout

	return (
		<AuthContext.Provider
			value={{
				...state,

				// Methods

			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
