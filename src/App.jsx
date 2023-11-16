import Stack from 'react-bootstrap/Stack'
import Slider from '@mui/material/Slider'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

function App() {
  return (
    <div>
      <Stack gap={4} className="center-container">
        <div className="border-container">
          {' '}
          <div className="p-2">SIMULA TU CRÉDITO</div>
          <div className="p-2">
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control aria-label="Amount (to the nearest dollar)" />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
            MONTO TOTAL
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
              sx={{ color: 'white' }}
            />
          </div>
          <div className="p-2">
            PLAZO
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
              sx={{ color: 'white' }}
            />
          </div>
          <div className="p-2">CUOTA FIJA POR MES</div>
        </div>
      </Stack>
    </div>
  )
}

export default App
