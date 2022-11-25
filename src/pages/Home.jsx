import { useGlobalContext } from "../context/context";
import { Header, CallToAction, Services, Footer } from "../components";

const Home = () => {
	const { isModalOpen } = useGlobalContext();
	console.log(isModalOpen);
	return (
		<main>
			<Header />S
			<Services />
			<CallToAction />
			<Footer />
		</main>
	);
};

export default Home;
