import { useEffect,useState } from 'react'
import './App.css'

const FollowMouse = () => {
  const[enabled,setEnabled] = useState(false)
  const[position,setPosition] = useState({x:0,y:0})
  useEffect(()=>{
    const handleMove = ({ clientX, clientY }) => {
      setPosition({ x: clientX, y: clientY })
    }
    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }
    return ()=>{
      window.removeEventListener('pointermove', handleMove)
    }
  },[enabled])
  return (
    <>
      <div className='follow-mouse' 
        style={{
          transform : `translate(${position.x}px,${position.y}px)`
        }
      }>

      </div>
      <h3>Proyecto 3</h3>
      <button onClick={()=>setEnabled(!enabled)}>
        {enabled ? 'Desactivar ' : 'Activar '} 
        Seguir Puntero
      </button>
    </>
  )
}

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
