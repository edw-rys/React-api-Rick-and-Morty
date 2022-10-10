import React from 'react'

const Pagination = ({next, prev, onPrevious, onNext}) => {

    const handlePrev = ()=> {onPrevious();};
    const handleNext = ()=> {onNext();};
    return (
        <nav className='my-5'>
            <ul className='pagination justify-content-center'>
                {
                    prev ? 
                        <li className='page-item'>
                            <button onClick={ handlePrev } className='btn btn-sm btn-warning'>Anterior</button>
                        </li>
                        : null
                }
                {
                    next?
                        <li>
                            <button onClick={ handleNext } className='btn btn-sm btn-primary ml-2'>Próximo</button>
                        </li>
                    :null
                }
            </ul>
        </nav>
    )
}
export default Pagination;