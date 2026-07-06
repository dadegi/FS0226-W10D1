import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'
import { Component } from 'react'

class App extends Component {
  // Non posso fare in modo che lo stato di Table sia visibile nel componente Detail, ma posso fare
  // in modo che entrambi condividano lo stesso stato -> devo ELEVARLO nel componente PADRE DI ENTRAMBI
  // più vicino, e ri-passarlo in basso ad entrambi come PROP

  // sposto lo stato di Table qui in App
  state = {
    selected: '', // ma poi diventerà 'Uno", 'Due' oppure 'Tre'
  }

  // ora sono in grado di passare lo stato come prop sia a Table che a Detail -> lo condividono!
  // ...però Table era anche in grado di modificare lo stato, cliccando sugli elementi di lista...
  // ...dobbiamo ripristinare questa funzionalità!

  // dobbiamo passare a Table this.setState()
  setAppState = (newValue) => {
    // tipicamente newValue assume il valore di "Uno", "Due" o "Tre"
    this.setState({
      selected: newValue, // "Uno", "Due" o "Tre"
    })
  }

  // l'idea sarebbe che Table invocasse -> this.props.setAppState('Due')
  // dobbiamo passare a Table NON SOLO il "valore" di state, ma anche un modo per "cambiarlo!"

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Table
                  // LEGGE LO STATO
                  selectedFromApp={this.state.selected}
                  // però Table dev'essere messo in grado anche di MODIFICARE lo stato di App...
                  setAppState={this.setAppState}
                  // setAppState è una funzione! la passo a Table
                />
              </Col>
              <Col className="my-auto">
                <Detail
                  // LEGGE LO STATO
                  selectedFromApp={this.state.selected}
                />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App

// STATE ELEVATION (TL, DR -> Too Long, Didn't Read)
// lo stato dei componenti non si può condividere tra elementi allo stesso livello (cioè NON
// in una relazione padre-figlio). L'unico modo per mettere in comunicazione questi componenti "fratelli"
// è trovare il loro "padre in comune" e spostare lo stato lì; a quel punto potete ripassarlo in bass
// a tutti i figli che lo vogliono leggere tramite le props
