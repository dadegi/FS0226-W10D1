import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Table extends Component {
  // state = {
  //   selected: '', // ma poi diventerà 'Uno", 'Due' oppure 'Tre'
  // }

  checkSelected = (value) =>
    value === this.props.selectedFromApp ? 'selezionato' : ''

  render() {
    return (
      <>
        <ListGroup className="text-dark">
          <ListGroup.Item
            onClick={() => this.props.setAppState('Uno')}
            className={this.checkSelected('Uno')}
          >
            Uno
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => this.props.setAppState('Due')}
            className={this.checkSelected('Due')}
          >
            Due
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => this.props.setAppState('Tre')}
            className={this.checkSelected('Tre')}
          >
            Tre
          </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">
          Stato del componente: {this.props.selectedFromApp}
        </p>
      </>
    )
  }
}

export default Table
