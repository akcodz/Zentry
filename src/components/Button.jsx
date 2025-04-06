import React from 'react'

const Button = ({title,id,rightIcon,leftIcon,containerClass}) => {
    
  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upComingVideoIndex);
  };

  return (
    <button id={id}  className={`w-fit group relative z-10 cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black  ${containerClass}`}>
         {leftIcon}
        <span className='relative incline-flex overflow-hidden font-general text-sm uppercase'>
            <div>{title}</div>
        </span>
        {rightIcon}
        
        </button >
  )
}

export default Button