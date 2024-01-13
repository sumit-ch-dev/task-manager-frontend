import './App.css'
import Card from './components/Card/Card'
// import './assets/images'

const App = () => {
  return (
    <div className='container'>
      <div className='column'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>

      <div className='column'>
        <Card />
        <Card />
      </div>

      <div className='column'>
        <Card />
        <Card />
      </div>
      <div className='column'>
        <Card />
        <Card />
        <Card />

        <Card />
        <Card />

      </div>
    </div>
  )
}

export default App