import Data from '../../public/Data'
import Card from './Card'
import './main.css'

function Main() {
  return (
    <div>
      <main className='container'>
        <section className='bg '>
            <h1>Products</h1>
            <button className='btn'>Move All To Bag</button>
        </section>
        <section className='hero'>
                <div className="ota">
                {Data.map((kiym, i) => {
                return <Card key={i} ism={kiym.name} pul={kiym.price} rasm={kiym.img}></Card>
            })}
                </div>
            </section>
      </main>
      
    </div>
  )
}

export default Main
