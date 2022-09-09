import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartRounded } from '@material-ui/icons'
import React, {useState} from 'react'

const Product = ({item}) => {
    const iconStyle ='h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer';
    const [hoverEffects , setHoverEffects]=useState(' opacity-0')

    function handleHoverExit () {
        setHoverEffects(' opacity-0');
    }
    function handleHoverEnter () {
        setHoverEffects(' opacity-1 bg-[rgba(0,0,0,0.2)]')
    }

  return (
    <div className='flex items-center justify-center flex-1 min-w-[280px] min-h-[350px] m-2 overflow-hidden rounded-md shadow-lg relative' onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverExit}>
        <img src={item.src} />
        <div className={`flexflex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` + hoverEffects}>
            <div className={iconStyle}>
                <ShoppingCartRounded/>
            </div>
            <div className={iconStyle}>
                <FavoriteBorderOutlined/>
            </div>
            <div className={iconStyle}>
                <SearchOutlined/>
            </div>
        </div>
    </div>
  )
}

export default Product