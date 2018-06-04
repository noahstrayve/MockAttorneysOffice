import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Headline = props => {
	return <div className="headerContainer">
			<div className="headerBar"></div>
			<Link to="/"><div className="headerTitleBox">
				<h2 className="headerTitle">Glumpy, Jumpy & Lumpy L.L.C.</h2>
			</div></Link>
			

			</div>;
}

export default Headline;