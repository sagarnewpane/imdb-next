import React from 'react'

function Results({results}) {
  return (
    <div>
        {        
            results.map((result)=>(
            <div key={result.id}>
                <img src={`https://image.tmdb.org/t/p/original/${result.poster_path}`} alt="" width={50}px/>
                <p>{result.title || result.name}</p>
            </div>

            ))
        }
    </div>
  )
}

export default Results