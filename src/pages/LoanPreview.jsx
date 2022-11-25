import React from "react";
import "./LoanPreview.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGlobalContext } from "../context/context";

const LoanPreview = () => {
	const { userInfo } = useGlobalContext();
	console.log(userInfo);
	const { lenderName, amount, startDate, duration, receiverName, amountBack } =
		userInfo;
	console.log();
	return (
		<main className="c">
			<div className="main">
				<h2 className="d">
					{" "}
					<span style={{ color: " #123FDE" }}>Preview and Download</span>{" "}
				</h2>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 agreement">
						<div className="agreement2">
							<h2 className="l">LOAN AGREEMENT</h2>
							<div className="space2"></div>
							<p className="p">
								This Loan Agreement is made and will be effective on{" "}
								<span className="space">{startDate}</span>
								<br></br>{" "}
								<span className="txt">
									<b>BETWEEN</b>
								</span>
								<br></br>
								{lenderName} with little introduction of the company and law
								under which this company is existing with its street address
								along with city, state and zip code <br></br>
								<span className="txt">
									<b>AND</b>
								</span>
								<br></br> {receiverName} with little introduction of the company
								and law under which this company is existing with its street
								address along with city, state and zip code.<br></br> <br></br>
								<div className="space2"></div>
							</p>
							<p className="p">
								1.Promise to Pay: Within{" "}
								<span className="space"> {duration}</span> months from
								today.Borrower promises to pay to lender
								<span className="space">{amountBack}</span> dollars
							</p>
							<p className="p">
								2. Accountability: Although this agreement may be signed below
								by more than one person, each of the undersigned understands
								that they are each as individuals responsible and jointly and
								severally liable for paying back the full amount.
							</p>
							<p className="p">
								3. Breakdown of Loan: Borrower will pay: Amount of Loan: $
								<span className="space">{amount}</span>
								<br></br>
								Amount financed: $
								<span className="space">
									{Number(amountBack) - Number(amount)}
								</span>
								<br></br>
								Total of payments: $<span className="space">{amountBack}</span>
								<br></br>
							</p>

							<p className="p">
								4. Prepayment: Borrower has the right to pay back the whole
								exceptional amount at any time. If Borrower pays before time, or
								if this loan is refinanced or replaced by a new note, Lender
								will refund the unearned finance charge, figured by the Rule of
								78-a commonly used formula for figuring rebates on installment
								loans.
							</p>
							<p className="p">
								5. Late Charge: Any payment not remunerated within ten (10) days
								of its due date shall be subject to a belatedly charge of 5% of
								the payment.
							</p>
							<p className="p">
								6 Security: To protect Lender, Borrower gives what is known as
								a, security interest or mortgage in [Describe:]<br></br>
								<hr></hr>
								<hr></hr>
								<hr></hr>
								<hr></hr>
							</p>
						</div>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 select">
						<h2 className="o">
							<span style={{ color: " #123FDE" }}>Select Page Orientation</span>
						</h2>
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<img className=" potrait" src="potrait.png"></img>
								<small className="r">Potrait</small>
							</div>
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<img className=" potrait2" src="landscap.png"></img>
								<small className="r">Landscape</small>
							</div>
							<h2 className="s">
								<span style={{ color: " #123FDE" }}>Select Page Size</span>
							</h2>
							<select className="a">
								<option>A4 Paper Size</option>
								<option>A3 Paper Size</option>
								<option>A5 Paper Size</option>
							</select>
							<input
								type="button"
								className="btn btn-primary download"
								value="Download"
							></input>
						</div>
					</div>
				</div>

				{/* <Link to="/">back home</Link> */}
			</div>
		</main>
	);
};

export default LoanPreview;
