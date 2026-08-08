
import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function RestHeader() {
  const counter = useSelector((state) => state.cartslice.count);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link to="/" className="group">
          <p className="text-4xl font-extrabold text-orange-500 tracking-tight group-hover:text-orange-600 transition">
            Swiggy
          </p>
        </Link>
        
        <Link
          to="/Checkout"
          className="flex items-center gap-2 px-4 py-2 rounded-xl 
                     text-gray-700 font-semibold text-lg
                     hover:bg-orange-50 hover:text-orange-500
                     transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.23.864m0 0L6.75 14.25a2.25 2.25 0 002.182 1.7h7.136a2.25 2.25 0 002.182-1.7l1.53-6.75H4.953m0 0L4.5 5.25m3.75 14.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm9 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>

          <span>Cart</span>

          <span className="min-w-7 h-7 px-2 flex items-center justify-center
                           rounded-full bg-orange-500 text-white text-sm font-bold">
            {counter}
          </span>
        </Link>
      </div>
    </header>
  );
}