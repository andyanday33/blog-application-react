import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

function Article() {

  const { id  } = useParams()
  const url = `http://localhost:3000/articles?id=${id}`;
  const { data, isLoading, error } = useFetch(url)
	
	let article = restructureData(data)

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