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
          <h1 className="p-2">SIMULA TU CRÉDITO</h1>
          <div className="p-2">
            MONTO TOTAL
            <Slider
              min={5000}
              max={50000}
              size="medium"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
              sx={{ color: 'white' }}
            />
            <InputGroup>
              <Form.Control aria-label="Amount (to the nearest dollar)" />
            </InputGroup>
          </div>
          <div className="p-2">
            PLAZO
            <Slider
              min={3}
              max={24}
              size="medium"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
              sx={{ color: 'white' }}
            />
            <InputGroup>
              <InputGroup.Text></InputGroup.Text>
              <Form.Control aria-label="Amount (to the nearest dollar)" />
            </InputGroup>
          </div>
          <div className="p-2">CUOTA FIJA POR MES</div>
        </div>
      </Stack>
    </div>
  )
}

export default App
