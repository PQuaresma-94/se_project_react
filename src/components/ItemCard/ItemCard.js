import "./ItemCard.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, isLoggedIn, onCardLiked }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const userId = currentUser ? currentUser._id : null;
  const isLiked = () => {
    return item.likes.includes(userId);
  };

  const liked = isLiked();

  return (
    <div className="card">
      <img
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={() => onSelectCard(item)}
      />
      <div className="card__header">
        <div className="card__title">{item.name}</div>
        {isLoggedIn ? (
          <div
            className={`card__like-button ${
              liked ? "card__like-button_active" : ""
            }`}
            onClick={() => onCardLiked(item._id, liked)}
          ></div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ItemCard;
