import { Close } from '@material-ui/icons'
import React, { useState } from 'react'

const Annouce = () => {
    const[AnnouceStyle, setAnnouceStyle] = useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center');

    const handleClose=()=>{
        setAnnouceStyle(AnnouceStyle + " hidden ")
    }

  return (
    <div className={AnnouceStyle}>
      <h2>Hurry up 50% off Sale!</h2>
      <Close className='cursor-pointer' onClick={handleClose}/>
    </div>
  )
}

export default Annouce;