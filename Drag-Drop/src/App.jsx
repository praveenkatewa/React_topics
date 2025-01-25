
import './App.css'

function App() {
 

  return (
    <>
    <div className="App"> 
    <h1> Task Manager</h1>
    <input 
      type='text'
    />

  <div className='board'>
    <div className='todo'>
      <h2 className='todo-col'>Todo</h2>
      <div className='task-item'>
      hello 
      <div className='btns'>
      <span className='btn'>✏️  </span>
      <span className='btn'> 🗑️</span>
    
       </div>
      
    </div>
    


  </div>

    <div className='doing'>
      <h2 className='doing-col'>Doing</h2>

    </div>
    <div className='done'>
      <h2 className='done-col'>Done</h2>

    </div>


    </div>

    </div>
     
    </>
  )
}

export default App
