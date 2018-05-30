import React from 'react';
import './Sidebar.css';

const Sidebar = props => {
	return <div className="sidebarBox">
			<div className="sidebarOptionBox">
				<div className="sidebarOptionText">
					<p>Option One</p>
				</div>
			</div>
			<div className="sidebarOptionBox">
				<div className="sidebarOptionText">
					<p>Option Two</p>
				</div>
			</div>
			<div className="sidebarOptionBox">
				<div className="sidebarOptionText">
					<p>Option Three</p>
				</div>
			</div>
		</div>;
}

export default Sidebar;