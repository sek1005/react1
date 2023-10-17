import './card.css'
function Card({title,description,price, image,setCount,count,setSomme,somme}) {
    function handleClick() {
      setCount(count +1);
      setSomme(somme + price);
    }
    return (
      <>
        <div className="card">
          <div className="divimag">
            <img className="img" src= {image }alt={title} />
            </div>
          <div className="text">
            <p className='title'>{title}</p>
            <p className='des'>{description}</p>
            <p className='price'>{price} €</p>
          </div>
          <div >
            <button className='boutton'onClick={handleClick} >Ajouter au panier</button>
          </div>
        </div>
      </>
    )
  };
  
  export default Card;
