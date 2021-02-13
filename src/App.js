import './App.css'
import Sidebar from './Sidebar'
import ChatSection from './ChatSection'

function App() {
  return (
    <div className='app'>
      <div className='appbody'>
        <Sidebar />
        <ChatSection />
      </div>
    </div>
  )
}

export default App
