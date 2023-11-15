import "./ItemCard.css";

const ItemCard = ({item}) => {
    console.log({item})
    return (
        <div className="card">
            <img className="card__image" src={item.link} alt={item.name}/>
            <div className="card__name">{item.name}</div>
        </div>
    );
};

export default ItemCard