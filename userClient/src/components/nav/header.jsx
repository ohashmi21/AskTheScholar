import React, { useState} from 'react';
import AskAQuestion from './askAQuestion';
export default function Header() {
    const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
    <h1>Ask A Scholar</h1>
    <AskAQuestion show={showModal} onHide={handleCloseModal} />
    </>
    )
}

