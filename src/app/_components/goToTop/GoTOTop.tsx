
'use client'
import React from 'react'
import CusotmButton from '../button/CusotmButton'
import Image from 'next/image'
import GoToTopIcon from '@shapes/gotoTop.svg'


const handleGoToTop = ()=>{
    window.scrollTo({top:0 , behavior:'smooth'});
}
const GoTOTop = () => {
  return (
    <CusotmButton onClick={handleGoToTop} className=' h-full !px-4 min-w-0' icon={<Image src={GoToTopIcon} alt='icon' width={32} height={32}/>} />
  )
}

export default GoTOTop