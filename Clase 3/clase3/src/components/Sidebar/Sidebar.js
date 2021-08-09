import React from 'react';
import NavItem from '../NavItems/NavItem';

function Sidebar (){
    return (
		<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

			
            {/*Brand*/}
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<i className="fas fa-chart-line"></i>
				</div>
				<div className="sidebar-brand-text mx-3">Admin</div>
			</a>

			
			<hr className="sidebar-divider my-0"/>

			
			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span></a>
			</li>

		
			<hr className="sidebar-divider"/>

			
			<div className="sidebar-heading">Actions</div>

            <NavItem/>
            <NavItem/>
			<NavItem/>

			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
    )
}

export default Sidebar;