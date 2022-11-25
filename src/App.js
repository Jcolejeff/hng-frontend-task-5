import { ErrorPage, LoanPreview } from "./pages";
import { ScrollToTop } from "./components";
import { Header, Footer } from "./layouts";
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
					<Route path="/Preview" element={<LoanPreview/>}></Route>


				</Routes>

				{/* place footer here */}
			</ScrollToTop>
		</Router>
	);
};

export default App;
