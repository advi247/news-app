const Navbar = ({setCategory}) => {
  return (
    <div>

<nav className="navbar navbar-expand-lg mb-2 nav-design">
  <div className="container-fluid">
    <a className="navbar-brand" href="/Home"><span className="badge logo">FYI</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav-design-toggle" id="navbarNavDropdown">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link nav-text-design" href="/Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-text-design" href="/About Us">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-text-design" aria-current="page" href="/Top Headlines" onClick={()=>setCategory("general")}>Top Headlines</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-text-design" aria-current="page" href="#" onClick={()=>setCategory("technology")}>Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-text-design" aria-current="page" href="#" onClick={()=>setCategory("business")}>Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-text-design" aria-current="page" href="#" onClick={()=>setCategory("health")}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-text-design" aria-current="page" href="#" onClick={()=>setCategory("science")}>Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-text-design" aria-current="page" href="#" onClick={()=>setCategory("sports")}>Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-text-design" aria-current="page" href="#" onClick={()=>setCategory("entertainment")}>Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-text-design" href="/Blog">Blog</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
