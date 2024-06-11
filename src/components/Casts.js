import React from 'react'
import "../index.css";
import CastsCard from './CastsCard';
const Casts = ({title, peoples}) => {
  return (
    <div className='px-2 mt-5'>
        <h1 className='text-2xl font-semibold py-2 text-white'>{title}</h1>
        <div className='w-full'>
            <div className='movieList flex overflow-x-scroll gap-4'>
                {
                  peoples?.map(people => <CastsCard key={people.id} posterPath={people.profile_path} name={people.original_name} character={people.character}/>)
                }
            </div>
        </div>
        
    </div>
  )
}

export default Casts