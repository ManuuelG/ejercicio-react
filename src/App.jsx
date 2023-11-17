import { useState } from 'react'
import Stack from 'react-bootstrap/Stack'
import Slider from '@mui/material/Slider'
import Input from '@mui/material/Input'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function App() {
  const [montoTotal, setmontoTotal] = useState(25000)
  const [plazo, setplazo] = useState(12)
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  const handleShow2 = () => setShow2(true)
  const handleClose2 = () => setShow2(false)

  const calculoCuota = function CalculoCuota() {
    const division = montoTotal / plazo

    return division.toFixed(2)
  }

  return (
    <div>
      <Stack gap={4} className="center-container">
        <div className="border-container">
          <h2 className="p-2">SIMULÁ TU CRÉDITO</h2>
          <div className="p-2">
            MONTO TOTAL
            <Slider
              min={5000}
              max={50000}
              size="small"
              onChange={e => setmontoTotal(e.target.value)}
              value={montoTotal}
              valueLabelDisplay="auto"
              sx={{ color: 'white' }}
            />
            <Input
              min={5000}
              max={50000}
              onChange={e => setmontoTotal(e.target.value)}
              type="number"
              value={montoTotal}
            />
          </div>

          <div className="p-2">
            PLAZO
            <Slider
              min={3}
              max={24}
              size="small"
              onChange={e => setplazo(e.target.value)}
              value={plazo}
              valueLabelDisplay="auto"
              sx={{ color: 'white' }}
            />
            <Input
              min={3}
              max={24}
              onChange={e => setplazo(e.target.value)}
              type="number"
              value={plazo}
            />
          </div>

          <h4 className="p-2">
            {'CUOTA FIJA POR MES ' + calculoCuota() + '€'}
            <br />
            <br />
            <Button variant="primary" onClick={handleShow}>
              OBTENÉ CREDITO
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>OPERACION</Modal.Title>
              </Modal.Header>
              <Modal.Body>¡Operación realizada con éxito!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  CERRÁ
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  GUARDÁ CAMBIOS
                </Button>
              </Modal.Footer>
            </Modal>

            <Button variant="primary" onClick={handleShow2}>
              VÉ DETALLES DE CUOTA
            </Button>

            <Modal show={show2} onHide={handleClose2}>
              <Modal.Header closeButton>
                <Modal.Title>Detalles</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {'CUOTA FIJA DE ENERO ' + calculoCuota() + '€'} <br />{' '}
                {'CUOTA FIJA DE FEBRERO ' + calculoCuota() + '€'} <br />
                {'CUOTA FIJA DE MARZO ' + calculoCuota() + '€'}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose2}>
                  CERRÁ
                </Button>
                <Button variant="primary" onClick={handleClose2}>
                  GUARDÁ CAMBIOS
                </Button>
              </Modal.Footer>
            </Modal>
          </h4>
        </div>
      </Stack>
    </div>
  )
}

export default App
