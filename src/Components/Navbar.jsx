import { useState } from 'react'

// This component shows the top navigation bar.
// "open" keeps track of whether the mobile menu is open or closed.
export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar" id="top">
      <nav className="navbar-inner">
        <a href="#top" className="logo">
          <img src="/assets/logo.png" alt="BetterMontessori logo" className="logo-icon" />
          <span>
            Better<span className="accent">Montessori</span>
          </span>
        </a>

        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>

        <a href="#contact" className="btn btn-primary nav-login">Log In</a>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile menu only shows when "open" is true */}
      <div className={open ? 'mobile-menu show' : 'mobile-menu'}>
        <a href="#features" onClick={() => setOpen(false)}>Features</a>
        <a href="#about" onClick={() => setOpen(false)}>About Us</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact Us</a>
        <a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a>
        <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>Log In</a>
      </div>
    </header>
  )
}
