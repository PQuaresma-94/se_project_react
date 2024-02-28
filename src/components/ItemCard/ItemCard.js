import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
    return (
        <div className="card">
            <img className="card__image" src={item.imageUrl} alt={item.name} onClick={() => onSelectCard(item)} />
            <div className="card__name">{item.name}</div>
        </div>
    );
};

export default ItemCard