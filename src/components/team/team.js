import React from 'react';
import './Team.css';
import { Link } from "react-router-dom";


const Attorneys = pages => {

	return <div className="employeeInfoWrapper">
				<div className="employeeInfoTitleBox">
					<div className="employeeInfoTitle">
						<h1>Attorneys</h1>
					</div>
				</div>
				<div className="attorneyBox">
					<div className="attorneyPhotoBox">
						<div className="attorneyPhoto">
						</div>
					</div>
					<div className="attorneyNameBox">
						<div className="attorneyName">
						</div>
					</div>
					<div className="attorneyInfoBox">
						<div className="attorneyInfo">
						</div>
					</div>

				</div>
			
			</div>;
}

export default Attorneys;