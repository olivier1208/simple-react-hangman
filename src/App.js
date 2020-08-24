import React, {Component} from 'react';
import './App.css';
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Keyboard from "./Keyboard";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

class App extends Component {

    randomWords = ['chabbat', 'pessahim', 'sota', 'nidda', 'makot', 'irouvin', 'brahot', 'guittin', 'erkhin', 'ktouvot', 'meguila', 'taanit']

    constructor(props) {
        super(props);

        this.state = {
            word: this.randomWords[Math.floor(Math.random() * this.randomWords.length)],
            letterTyped: '',
            lettersTyped: [],
            counter: 0
        }
    }

    computeDisplay(word, usedLetters) {
        return word.replace(/\w/g, (letter) => (usedLetters.includes(letter) ? letter : ' _ '))
    }

    handleKeyClick = letter => {
        letter = letter.toLowerCase()
        this.state.lettersTyped.push(letter)

        this.setState({
            lettersTyped: this.state.lettersTyped,
            letterTyped: letter,
        })

        let uniqueLettersInWord = [...new Set(this.state.word.split(''))];

        if (uniqueLettersInWord.every(e => this.state.lettersTyped.includes(e))) {
            MySwal.fire({
                title: 'You Won!',
                icon: 'success',
                text: 'With ' + this.state.counter + ' tries !',
                confirmButtonText: 'Yeah!',
            }).then(() => {
                this.resetWord()
            })
        } else {
            this.setState({counter: this.state.counter + 1})
        }
    }


    resetWord() {
        this.setState({
            word: this.randomWords[Math.floor(Math.random() * this.randomWords.length)],
            letterTyped: '',
            lettersTyped: [],
            counter: 0
        })
    }

    getLetters() {
        let alphabet = [];
        let start = 'A'.charCodeAt(0);
        let last = 'Z'.charCodeAt(0);
        for (let i = start; i <= last; ++i) {
            alphabet.push(String.fromCharCode(i));
        }
        return alphabet;
    }

    render() {
        return (
            <div className="App">
                <Navigation/>
                <div className="container">
                    <div>
                        <Card variant="info" className="my-5">
                            <Card.Header>
                                <h3>Tries : {this.state.counter}</h3>
                            </Card.Header>
                            <Card.Body className="text-center">
                                {this.computeDisplay(this.state.word, this.state.lettersTyped)}
                            </Card.Body>
                        </Card>
                        <div className="row my-5 m-auto">
                            <Button
                                className="mx-auto d-block my-2"
                                variant="info"
                                onClick={() => {
                                    this.resetWord()
                                }}
                            >
                                Generate a new word </Button>
                        </div>
                        <hr/>
                    </div>
                    <Keyboard
                        word={this.state.word}
                        onClick={this.handleKeyClick}
                        letters={this.getLetters()}
                        lettersTyped={this.state.lettersTyped}
                    />
                </div>
            </div>
        );
    }

}

export default App;
