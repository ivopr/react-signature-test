import SignatureCanvas from 'react-signature-canvas'
import './App.css'

function App() {
  return (
      <SignatureCanvas penColor="white" canvasProps={{className: "sigCanvas"}} />
  )
}

export default App
