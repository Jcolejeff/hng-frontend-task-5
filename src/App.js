import { ErrorPage, Home, UserDetails } from "./pages";
import { ScrollToTop, Navbar, Sidebar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
	return (
		<Router>
			<ScrollToTop>
				{/* place nav bar here*/}
				<Navbar />
				<Sidebar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="userDetails" element={<UserDetails />} />
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>

				{/* place footer here */}
			</ScrollToTop>
		</Router>
	);
};

export default App;
