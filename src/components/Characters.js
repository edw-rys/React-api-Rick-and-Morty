import React from 'react'

 const Characters = ({characters = [], openItem}) => {
  return (
    <div className='row'>
        {
            characters.map((item, index) => (
                <div key={index} className='col mb-4'>
                    <div className='card c-pointer' onClick={(e)=> {openItem(item.id)}} style={{minWidth: "200px"}}>
                        <img src={item.image} alt={item.name}/>
                        <div className='card-body'>
                            <h5 className='card-title'>{ item.name }</h5>
                            <hr />
                            <p>Especie: {item.species}</p>
                            <p>Localización: {item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))
        }
        
    </div>
  )
}

export default Characters;