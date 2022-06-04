import React from 'react'
import { useFetch } from '../hooks/useFetch'
import './Home.css'

function Home() {
	const { data: articles, isPending, error } = useFetch('http://localhost:3000/articles')


  return (
    <div className='home'>
        <h2>Homepage</h2>
        {isPending && <p>Loading...</p>}
				{error && <p>Error! Could not fetch data.</p>}
				{articles && articles.map(article => {
					return (
						<div key={article.id} className="card">
							<h3>{article.title}</h3>
							<p>{article.author}</p>
						</div>
					)
				})}
    </div>
  )
}

export default Home