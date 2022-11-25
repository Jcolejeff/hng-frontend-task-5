import { useGlobalContext } from "../context/context";
import { Header } from "../components";

const Home = () => {
	const { isModalOpen } = useGlobalContext();
	console.log(isModalOpen);
	return (
		<main>
			<Header />
		</main>
	);
};

export default Home;
