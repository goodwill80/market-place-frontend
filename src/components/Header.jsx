import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="navbar flex justify-between bg-neutral text-neutral-content px-8">

        <div>
            <Link to="/" className="btn btn-ghost normal-case text-2xl">MarketPlace</Link>
            <ul className="flex p-2 gap-4">
               <li><Link to="about">About</Link></li>
               <li><Link to="products">Products</Link></li>
            </ul>
        </div>

        <div>
            <div className="form-control mr-4">
                <input type="text" placeholder="Search" className="input input-bordered h-8" />
            </div>
            <ul className="flex p-2 gap-4">
               <li><Link to="registration">Register</Link></li>
               <li><Link to="login">Login</Link></li>
            </ul>
        </div>
     
    </div>
  )
}

export default Header
