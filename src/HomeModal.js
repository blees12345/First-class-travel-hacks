import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import vacation from './vacation.jpg';
function HomePage() {
	const [show, setShow] = useState(true);
	const handleClose = () => setShow(false);

  useEffect(() => {
		const timeout = setTimeout(() => {
			setShow(false);
		}, 3000);
	}, []);
	return (
		<div onclick={() => setShow(false)}  >
			<Modal contentClassName='Modal' show={show} onHide={() => setShow(false)}>
				<Modal.Header className='modal-header' closeButton>
					First Class Travel Hacks
				</Modal.Header>
				<Modal.Body className='modal-body'>
					<img
						className='vaca'
						src={vacation}
						alt='sandy beach'
						onClick={() => setShow(false)}></img>

					<button className='modal-button' onClick={() => setShow(false)}
					>
						Learn More!
					</button>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default HomePage;
