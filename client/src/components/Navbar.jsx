import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-[#03B51F]"
          >
            BloomX Clinic
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/services">Services</Link>

            <Link to="/doctors">Doctors</Link>

            <Link to="/contact">Contact</Link>

            <button
              className="
              bg-[#03B51F]
              text-white
              px-5
              py-2
              rounded-lg
              hover:opacity-90
              transition
            "
            >
              Book Appointment
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">

          <div className="flex flex-col p-4 gap-4">

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/services">Services</Link>

            <Link to="/doctors">Doctors</Link>

            <Link to="/contact">Contact</Link>

            <button
              className="
              bg-[#03B51F]
              text-white
              py-2
              rounded-lg
            "
            >
              Book Appointment
            </button>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;