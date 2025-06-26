
import { useNavigate } from "@tanstack/react-router";
import { FunctionComponent } from "../common/types";


export const Home = (): FunctionComponent => {
	const navigate = useNavigate();

	const goToMyCards = () => {
		navigate({ to: "/my-cards" });
	};

	return (
		<div className="bg-blue-300 font-bold w-screen h-screen flex flex-col justify-center items-center gap-6">
			<div className="space-x-4">
				<button
					className="hover:cursor-pointer bg-white text-blue-700 px-4 py-2 rounded shadow"
					type="button"
					onClick={goToMyCards}
				>
					Go to My Cards
				</button>
			</div>
		</div>
	);
};