import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/Firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = () => {
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const authInfo = {
		createUser,
	};
	return <AuthContext.Provider value={authInfo}></AuthContext.Provider>;
};

export default AuthProvider;
