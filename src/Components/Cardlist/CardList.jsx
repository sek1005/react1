import data from '../../data/data.json'
import Card from '../Card/Card'
import './cardList.css'
function CardList({setCount, count,setSomme,somme}) {
    return ( 
      <>
      <div className='container'>
            {data.map((article) => (
                <Card key={article.id}
             image = {article.image} 
              title= {article.title} 
              description= {article.description} 
              price= {article.price} 
              setCount={setCount}
              count={count}
              setSomme={setSomme}
               somme= {somme}
               />


              
           
           ))}
    </div>
      </>
    )
  };
  
  export default CardList;