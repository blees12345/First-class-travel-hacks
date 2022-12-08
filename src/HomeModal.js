import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import vacation from './vacation.jpg';
function HomePage() {
	const [show, setShow] = useState(true);
	return (
		<div onclick={() => setShow(false)}>
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
					<button className='modal-button'>Learn More!</button>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default HomePage;
