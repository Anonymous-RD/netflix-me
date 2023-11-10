import React from 'react'
import SavedShows from './../components/SavedShows';

const Account = () => {
  return (
  
      <>
      
      <div className='w-full text-white'>
      <img className=' w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />

      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>

        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:yext-5xl font-bold'>My Shows</h1>
        </div>
      </div>
        </div>
        <SavedShows />
        </>
    
  )
}

export default Account