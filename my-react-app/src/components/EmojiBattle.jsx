import {Component} from 'react';
import emoji from '../data/emoji.js';
import {ListGroup, Col, Button} from "react-bootstrap";

class EmojiBattle extends Component {
    constructor() {
        super();
        this.state = {
            clickedEmoji: emoji.reduce((acc, item) => {
                acc[item.id] = 0
                return acc;
            },{})

        }

    }

    clickHandler = (id) => {
        this.setState((first) => ({
            clickedEmoji: {
                ...first.clickedEmoji,
                [id]: first.clickedEmoji[id] + 1,
            }
        }));
    };

    getWinner = () => {
        const {clickedEmoji} = this.state;
        const maxVotes = Math.max(...Object.values(clickedEmoji))
        const winner = Object.keys(clickedEmoji).find(
            (id) => clickedEmoji[id] === maxVotes
        );
        return emoji.find((item) => +item.id === +winner).emoji;
    };
    render() {
        const {clickedEmoji} = this.state;
        return (
            <div>
                <ListGroup>
                    {emoji.map((item) => {
                        return  <ListGroup.Item
                            key={item.id}
                            onClick={() => this.clickHandler(item.id)}
                        >
                            {item.emoji} — Votes: {clickedEmoji[item.id]}
                        </ListGroup.Item>
                        })}
                </ListGroup>

                <Button

                    onClick={() => alert(`Winner: ${this.getWinner()}`)}
                >
                    Results
                </Button>
           </div>


        );
    }
}

export default EmojiBattle;