import './navbar.css'
function Navbar({nomDuSite , Logo, count,somme}) {

    return (
      <>
      <ul className="ul">
          <li className="logo" >{Logo} </li>
          <li className="Nom du site">{nomDuSite}</li>
          <li className="compteur"> panier: {count}</li>
          <li className="compteur"> prix total: {somme} €</li>
      </ul>
      </>
    )
  };
  
  export default Navbar;