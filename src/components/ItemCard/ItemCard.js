import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard, isLoggedIn }) => {
    return (
        <div className="card">
            <img className="card__image" src={item.imageUrl} alt={item.name} onClick={() => onSelectCard(item)} />
            <div className="card__header">
                <div className="card__title">{item.name}</div>
                {isLoggedIn ? 
                    (<div className="card__like-button" onClick={() => console.log("this card has been liked")}></div>) : ("")
                }    
            </div>
        </div>
    );
};

export default ItemCard