import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

function Article() {

  const { id  } = useParams()
  const url = `http://localhost:3000/articles?id=${id}`;
  const { data, isLoading, error } = useFetch(url)
	const navigate = useNavigate()
	let article = restructureData(data)

  //Redirect if path does not exist
  useEffect(() => {
    if(!data) {
      setTimeout(() => {
        navigate('/')
      }, 2000);

    }
    
  }, [data, navigate])

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error! Could not fetch data</p>}
      {article && 
        <section>
          <h2>{article.title}</h2>
          <h3>{article.author}</h3>
          <p>{article.body}</p>
        </section>
      }
    </div>
  )
}

//Restructure the data if the given data is an array
const restructureData = (data) => {
	try {
			if(data) {
				return data[0]
			}
		return null
	} catch(e) {
		return data
	}
}

export default Article