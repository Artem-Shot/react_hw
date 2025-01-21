import {Component} from 'react';
import emoji from '../data/emoji.js';
import {ListGroup} from "react-bootstrap";

class EmojiBattle extends Component {
    constructor() {
        super();
        this.state = {
            clickedEmoji: emoji.reduce((acc, item) => {
                acc[item.id] = 0
                return acc
            })

        }

    }

    render() {
        console.log(emoji);
        return (
            <div>
                <ListGroup>
                    {emoji.map((item) => {
                        return  <ListGroup.Item key={item.id}>
                            {item.emoji}
                            </ListGroup.Item>
                        })}
                </ListGroup>
           </div>
        );
    }
}

export default EmojiBattle;