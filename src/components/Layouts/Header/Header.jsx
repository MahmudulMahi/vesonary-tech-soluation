
import { NavLink, useLocation } from 'react-router-dom';
import { TbWorld } from "react-icons/tb";
import { useEffect, useState } from 'react';
import logo from '/public/asset/Group 527.png'

const Header = () => {

  const location = useLocation();

  const [theme,setTheme]=useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light")

  const handleToggle=(e)=>{
    if(e.target.checked){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }

  useEffect(()=>{
    localStorage.setItem("theme",theme)
    const localTheme=localStorage.getItem("theme")
    document.querySelector('html').setAttribute('data-theme',localTheme)
  },[theme])

 

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden" >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li >
              <NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/services">services & Project</NavLink></li>
            {/* <li>
              <a to="services">services</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li> */}
            <li><NavLink to="/team">Team</NavLink></li>
            
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
        <div className='flex '>
          <div>
          <img className='ml-1 lg:ml-10 mt-3 md:mt-0 hidden md:block' src={logo} alt="" />
          </div>
          <div className='ml-1 lg:ml-5'>
            <h2 className='text-xl'>Visionary</h2>
            <p className='text-xs mt-1'>Tech Solution</p>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className=" gap-10 menu-horizontal px-1 ">
          <li className={` ${location.pathname === '/' ? 'border-b-4 border-blue-700' : ''}`} >
            
            <NavLink to="/">Home</NavLink></li>
          <li className={` ${location.pathname === '/services' ? 'border-b-4 border-blue-500' : ''}`} >
            <NavLink to="/services">services & Project</NavLink></li>

          {/* <li tabIndex={0}>
            <details>
              <summary>services</summary>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li> */}
          <li className={` ${location.pathname === '/team' ? 'border-b-4 border-blue-700' : ''}`}>
            <NavLink to="/team">Team</NavLink></li>
        
          <li className={` ${location.pathname === '/about' ? 'border-b-4 border-blue-700' : ''}`}>
            <NavLink to="/about">About</NavLink></li>
          <li className={` ${location.pathname === '/contact' ? 'border-b-4 border-blue-700' : ''}`}>
            <NavLink to="/contact">Contact</NavLink></li>


        </ul>

      </div>

      <div className="navbar-end">
        <div className='flex items-center relative mr-12 '>
          {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}

          {/* <div className='absolute right-5'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div> */}
        </div>

        <div className=' flex items-center gap-5'>
          <TbWorld className='text-2xl'></TbWorld>
          <label className="swap swap-rotate mr-0  md:mr-5  ">

          
            <input type="checkbox" onChange={handleToggle} />
            <svg className="swap-on fill-current w-6 h-10 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
            <svg className="swap-off fill-current w-6 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

          </label>
        </div>
        <a className="btn btn-ghost">Sign In</a>
      </div>
    </div>
  );
};

export default Header;