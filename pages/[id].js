import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Results } from '../components/Results';
import requets from '../utils/requets';

export default function Home({data}) {
  console.log("hi");
  return !data ? 
  (<h1>Error</h1> ) : 
  (<>
  <Header/>
  <Navbar/>
  <Results data={data}/>
  </>)
}
export async function getServerSideProps(context){
  const param = context.query.id ? 
  context.query.id
  :
  requets.fetchTrending.url
  
  const request = await fetch(`https://api.themoviedb.org/3${requets[param].url}`)
  const data = await request.json()
  return {
    props:{
      data
    }
  }
}
