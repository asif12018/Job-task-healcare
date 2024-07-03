import logo from '../../../public/logo-dark.png'

const Header = () => {
    return (
        <div className="py-[30px] ">
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[16px]">
        <li><a className=''>Home</a></li>
        <li><a>Services</a></li>
        <li><a>Blog</a></li>
        <li><a>About Us </a></li>
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img className='max-h-[120px]' src={logo} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[16px]">
    <li><a>Home</a></li>
        <li><a>Services</a></li>
        <li><a>Blog</a></li>
        <li><a>About Us </a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-outline w-[174px] h-[48px] !text-[#020043] rounded-2xl !outline-[#343268]">Appointment</a>
  </div>
</div>
        </div>
    );
};

export default Header;