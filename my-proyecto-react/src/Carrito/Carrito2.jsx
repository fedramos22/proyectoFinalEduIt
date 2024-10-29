import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carrito from './Carrito';

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="none" onClick={handleShow} className="text-center">
            <i class="bi bi-bag text-center"></i>
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Carrito <i class="bi bi-cart3"></i></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Carrito />
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}

export default OffCanvasExample