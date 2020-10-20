import React from 'react';
import logo from '../images/logo.png'
import luiz from '../images/luiz.jpg'

export default props =>
<>

<div className="sidebar-menu sticky-sidebar-menu">

  {/* logo start */}
  <div className="logo">
	<h1><a href="index.html">Collective</a></h1>
  </div>

  {/* if logo is image enable this */}
  {/* image logo 
 <div className="logo">
  <a href="index.html">
	<img src="image-path" alt="Your logo" title="Your logo" className="img-fluid" style="height:35px;" />
  </a>
 </div>*/}
  {/* //image logo */}

  <div className="logo-icon text-center">
	<a href="index.html" title="logo"><img src={logo} alt="logo-icon" /> </a>
  </div>
  {/* //logo end */}

  <div className="sidebar-menu-inner">

	{/* sidebar nav start */}
	<ul className="nav nav-pills nav-stacked custom-nav">
	  <li><a href="#/Home"><i className="Home"></i><span> Dashboard</span></a>
	  </li>
	  <li><a href="#/cards"><i className="cards"></i> <span>Default cards</span></a></li>
	  <li><a href="#/pricing"><i className="pricing"></i> <span>Pricing tables</span></a></li>
	  <li><a href="#/blocks"><i className="blocks"></i> <span>Content blocks</span></a></li>
	  <li><a href="#/forms"><i className="forms"></i> <span>Forms</span></a></li>
	</ul>
	{/* //sidebar nav end */}
	{/* toggle button start */}
	<a className="toggle-btn" onclick="toggleMenu()">
	  <i className="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
	  <i className="fa fa-angle-double-right menu-collapsed__right"></i>
	</a>
	{/* //toggle button end */}
  </div>
</div>

<div className="header sticky-header">

  {/* notification menu start */}
  <div className="menu-right">
	<div className="navbar user-panel-top">
	  <div className="search-box">
		<form action="#search-results.html" >
			<input type="search" name="" id=""/>
		  <input className="search-input" placeholder="Search Here..." type="search" id="search" />
		  <button className="search-submit" value=""><span className="fa fa-search"></span></button>
		</form>
	  </div>
	  <div className="profile_details">
		<ul>
		  <li className="dropdown profile_details_drop">
			<a href="#" className="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
			  aria-expanded="false">
			  <div className="profile_img">
				<img src={luiz}className="rounded-circle" alt="" />
				<div className="user-active">
				  <span></span>
				</div>
			  </div>
			</a>
			<ul className="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3">
			  <li className="user-info">
				<h5 className="user-name">John Deo</h5>
				<span className="status ml-2">Available</span>
			  </li>
			  <li> <a href="#"><i className="lnr lnr-user"></i>My Profile</a> </li>
			  <li> <a href="#"><i className="lnr lnr-users"></i>1k Followers</a> </li>
			  <li> <a href="#"><i className="lnr lnr-cog"></i>Setting</a> </li>
			  <li> <a href="#"><i className="lnr lnr-heart"></i>100 Likes</a> </li>
			  <li className="logout"> <a href="#sign-up.html"><i className="fa fa-power-off"></i> Logout</a> </li>
			</ul>
		  </li>
		</ul>
	  </div>
	</div>
  </div>
</div>

</>