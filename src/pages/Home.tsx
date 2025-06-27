
import { useNavigate } from "@tanstack/react-router";
import { FunctionComponent } from "../common/types";

export const Home = (): FunctionComponent => {
	const navigate = useNavigate();

	const goToMyCards = () => {
		navigate({ to: "/my-cards" });
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
			<div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
				<h1 className="text-3xl font-semibold text-blue-800 mb-4">Welcome to Card Manager</h1>
				<p className="text-gray-600 mb-6">Securely manage your credit and debit cards in one place.</p>
				<button
					onClick={goToMyCards}
					className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors duration-200"
				>
					View My Cards
				</button>
			</div>
		</div>
	);
};
