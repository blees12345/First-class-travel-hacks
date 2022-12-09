import React, { useState, useEffect, useSession } from 'react';
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


  const [count, setCount] = useState(0);

  useEffect(() => {
    // Access count value from session storage
    var pageView = sessionStorage.getItem("pageView");
    if (pageView == null ) {
			// Initialize page views count
			pageView = 0;
	}	else  {
			pageView = Number(pageView) + 1;
		};
	if(pageView >1){
		return setShow(false)
	}
		
	 console.log(pageView);
    // Update session storage
    sessionStorage.setItem("pageView", pageView);
    setCount(pageView);
  }, []); 
//  sessionStorage.clear();
//   console.log(count)
	return (
		<div onClick={() => setShow(false)}  >
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
			</Modal >
		</div>
	);
}

export default HomePage;
