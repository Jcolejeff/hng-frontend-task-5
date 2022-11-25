import { useGlobalContext } from "../context/context";
import { Header, CallToAction, Services, Footer } from "../components";

const Home = () => {
	const { isModalOpen } = useGlobalContext();
	console.log(isModalOpen);
	return (
		<main>
			<Header />
			<Services />
			<CallToAction />
			<Footer />
		</main>
	);
};

export default Home;
