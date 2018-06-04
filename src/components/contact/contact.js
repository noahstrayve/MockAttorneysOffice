import React from 'react';
import './Contact.css';
import { Link } from "react-router-dom";


const Contact = pages => {

	return <div className="contactInfoWrapper">
		<div className="contactInfoHeaderBox">
			<div className="contactInfoHeader">
				<h1>Contact</h1>
			</div>
		</div>
		<div className="contactInfoBox">
			<div className="contactInfoSubset">
				<div className="contactInfoSubsetTitle">
					<h3>Google</h3>
				</div>
				<div className="contactInfoSubsetText">
					<p>WE DOING GOOGLE INFO RIGHT HERE</p>
				</div>
			</div>
			<div className="contactInfoSubset">
				<div className="contactInfoSubsetTitle">
					<h3>LinkedIn</h3>
				</div>
				<div className="contactInfoSubsetText">
					<p>WE DOING LINKEDIN RIGHT HERE</p>
				</div>
			</div>
			<div className="contactInfoSubset">
				<div className="contactInfoSubsetTitle">
					<h3>Third Option</h3>
				</div>
				<div className="contactInfoSubsetText">
					<p>WE DOING NUMBER THREE RIGHT HERE</p>
				</div>
			</div>
			<div className="contactInfoSubset">
				<div className="contactInfoSubsetTitle">
					<h3>ANOTHER ONE</h3>
				</div>
				<div className="contactInfoSubsetText">
					<p>WE DOING ANOTHER ONE RIGHT HERE</p>
				</div>
			</div>
		</div>
	</div>;
}

export default Contact;