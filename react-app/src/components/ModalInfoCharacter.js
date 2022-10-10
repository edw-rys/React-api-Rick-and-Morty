import React from 'react'
import Modal from 'react-modal';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');


const ModalInfoCharacter = ({ info, modalIsOpen, closeModal }) => {
    const closeModalEvent = () => { closeModal(); }
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModalEvent}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {
                    info != null?
                    <div className="card">
                        <div className='text-center'>
                            <img style={{ maxWidth: '200px'}} className="card-img-top" src={info.image} alt={info.name} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{info.name}</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Especie: {info.specie}</li>
                            <li className="list-group-item">Género: {info.gender}</li>
                            <li className="list-group-item">Estado: {info.status}</li>
                            {
                                info.type ? 
                                <li className="list-group-item">Tipo: {info.location.type}</li>
                                :null
                            }
                            {
                                info.location ? 
                                <li className="list-group-item">Ubicación: {info.location.name}</li>
                                :null
                            }
                            <li className="list-group-item">Creado el: {info.created}</li>
                        </ul>
                    </div>
                    :
                    null
                }
            </Modal>
        </>
    )
}
export default ModalInfoCharacter;