
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <div className='App  w-full '>
      <div className="container max-w-[94%] pt-[40px] md:max-w-[96%] mx-auto">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default App

