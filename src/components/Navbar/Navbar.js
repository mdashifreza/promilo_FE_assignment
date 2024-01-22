import { Link } from 'react-router-dom';
const Navbar = () => {
    const logo = 'http://www.hindigraphics.in/wp-content/uploads/2019/01/pro.png';
    return (
        <nav className="bg-gray-100 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl">
                        <a href="https://promilo.com/public/home">
                            <img src={logo} alt="logo" className="h-14 w-16" />
                        </a>
                    </div>
                    <div className="flex items-center space-x-8">
                        <Link to="/about">
                            <button className='text-white bg-sky-600 p-2 px-5 rounded font-bold'>About</button>
                        </Link>
                        <Link to="/">
                            <button className='text-white bg-sky-700 p-2 px-5 rounded font-bold'>Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
