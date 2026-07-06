import { Alert } from 'react-bootstrap'

const Detail = (props) => (
  <Alert variant="success">
    {props.selectedFromApp || 'Nessun valore selezionato'}
  </Alert>
)

export default Detail

// '' è un valore "FALSY"
// null è un valore "FALSY"
// undefined è un valore "FALSY"
// 0 è un valore "FALSY"
// -0 è un valore "FALSY"
// false è un valore "FALSY"
