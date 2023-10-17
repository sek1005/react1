import './App.css'
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import CardList from "./Components/Cardlist/CardList";

function App() {
  const [count, setCount] = useState(0);
  const [somme, setSomme] = useState(0);
  return (
    <>

     <body>
       <header>
         <Navbar
         Logo = ""
         nomDuSite = "ShopMarket" 
         count = {count}
         somme= {somme}
         />
       </header>
       <main>
        <CardList
        setCount={setCount}
        setSomme={setSomme}
        count={count}
        somme={somme}
        />
       </main>
       <footer>
        <Footer
        contenuFooter = "mon contenu footer"
        />
       </footer>
     </body>
    </>
  )
};

export default App;
