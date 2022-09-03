import Breads from '../Breads'
import '../Styles/bread.css'



export default function IndexBread({setItem}) {
  return (
    <div>
      <h1>Index</h1>
      <Breads setItem={setItem}/> 
  </div>

  )
}