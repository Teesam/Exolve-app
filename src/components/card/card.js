import './card.css';

const Card = ({ figure, title }) => {
    return (
        <div className = 'Card'>
            <div id = 'figure-holder'>
                <h2>{ figure }</h2>
                <div id = 'exclaim'>
                    !
                </div>
            </div>
            <div id = 'title-holder'>
                <p> { title }</p>
            </div>
        </div>
    )
}

export default Card;
