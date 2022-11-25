import { useGlobalContext } from "../context/context";
import { Header, CallToAction, Services } from "../components";

const Home = () => {
	const { isModalOpen } = useGlobalContext();
	console.log(isModalOpen);
	return (
		<main>
			<Header />
			<Services />
			<CallToAction />
		</main>
	);
};

export default Home;
