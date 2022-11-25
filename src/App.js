import { ErrorPage, LoanPreview } from "./pages";
import { ScrollToTop } from "./components";
import { Header, Footer } from "./layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
	return (
		<Router>
			<ScrollToTop>
				{/* place nav bar here*/}
				<Header />
				<Routes>
					<Route path="/" element={<div> hello</div>} />
					<Route path="template/:id" element={<div>world</div>} />
					<Route path="*" element={<ErrorPage />}></Route>
					<Route path="/Preview" element={<LoanPreview/>}></Route>


				</Routes>
				<Footer />
				{/* place footer here */}
			</ScrollToTop>
		</Router>
	);
};

export default App;
