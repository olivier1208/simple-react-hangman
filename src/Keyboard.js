import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import './Keyboard.css'

class Keyboard extends Component {

    render() {
        const { onClick, letters, lettersTyped } = this.props
        return (
            <div>
                <div className="row justify-content-md-center">
                    <h1 className="col text-center">
                        Keyboard
                    </h1>
                </div>

                <div className="row">
                    {letters.map((letter, index) => {

                        return <Button
                            disabled={lettersTyped.includes(letter.toLowerCase())}
                            className="letter"
                            key={index}
                            onClick={() => onClick(letter)}
                        >
                            {letter}
                        </Button>
                    })}
                </div>
            </div>
        )
    }

}

export default Keyboard