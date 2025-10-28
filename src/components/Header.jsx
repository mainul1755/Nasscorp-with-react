
const Header = () => {
  return (
    <header>
      <div className="logo">Nasscorp</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="buttons">
        <div>
          <img src="icon/Search Icon.png" alt="Search Icon" />
        </div>
        <div>
          <img src="icon/btn.png" alt="Button Icon" />
        </div>
      </div>
    </header>
  )
}

export default Header
