import Card from "./Card";

const Bord = ({ cards, onCardClick }) => {
    return (
        <div className="board">
            {cards.map((card) => (
                <Card key={card.id} card={card} onClick={onCardClick} />
            ))}
        </div>
    );
};

export default Bord;
