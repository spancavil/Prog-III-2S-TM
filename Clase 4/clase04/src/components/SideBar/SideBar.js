import React from 'react';
import NavItem from '../NavItem/NavItem';

export default function SideBar(){
    return(
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/*Sidebar - Brand */}
			<a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div class="sidebar-brand-icon">
					<i class="fas fa-chart-line"></i>
				</div>
				<div class="sidebar-brand-text mx-3">Admin</div>
			</a>

			
			<hr class="sidebar-divider my-0"/>

			
			<li class="nav-item active">
				<a class="nav-link" href="/">
					<i class="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span></a>
			</li>

			
			<hr class="sidebar-divider"/>

			
			<div class="sidebar-heading">Actions</div>

			
			<NavItem name="table" icon= "table"/>
            <NavItem name="pages" icon= "folder"/>
            <NavItem name="charts" icon= "chart-area"/>

			
			<hr class="sidebar-divider d-none d-md-block"/>
		</ul>
    )
}