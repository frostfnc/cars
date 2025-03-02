import { auth, googleProvider } from "../config/firebase.js";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// const [photoURL, setPhotoURL] = useState("");

	// console.log(photoURL);

	const signIn = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (err) {
			console.error(err);
		}
	};

	const signInGoogle = async () => {
		try {
			await signInWithPopup(auth, googleProvider);
		} catch (err) {
			console.error(err);
		}
	};

	//Import SignOut (Remember)

	// const logout = async () => {
	// 	try {
	// 		await signOut(auth);
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// };

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
				<input
					className="w-full p-2 mb-4 border border-gray-300 rounded"
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className="w-full p-2 mb-4 border border-gray-300 rounded"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="w-full p-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={signIn}>
					Sign in
				</button>
				<button
					className="w-full p-2 mb-4 bg-red-500 text-white rounded hover:bg-red-600"
					onClick={signInGoogle}
				>
					Sign in with Google
				</button>
				{/* <button className="w-full p-2 mb-4 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={logout}>
					Logout
				</button> */}
			</div>
		</div>
	);
};
