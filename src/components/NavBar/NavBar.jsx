import { Link } from 'react-router-dom';
import Cart from "../Cart/Cart";
import "./styles/NavBar.scss";


const NavBar = ({categorias}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-gray navbar-custom">
        <div className="container-fluid">
          <button className="navbar-toggler navbar-toggler-border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon-blanco"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link"  id="textos__navbar" aria-current="page" to="/" >
                  <img width={100} src="https://media.istockphoto.com/id/1090037044/vector/coffee-capsule-espresso-machine-flavor-minimal-color-flat-line-icon.jpg?b=1&s=170667a&w=0&k=20&c=Q4FADjpFW8fSkqIpxZSbag2iwUzeOtHFQQnOqUsu3ls=" alt="logo" />
                </Link>
              </li>
              {
                categorias.map((categoria)=>{
                  return <Link className="nav-link" id="textos__navbar" to={`/category/${categoria.id}`}>{categoria.name}</Link>
                })
              }
            </ul>
          </div>
        </div>
        <Cart />
      </nav>
    )
}

export default NavBar;