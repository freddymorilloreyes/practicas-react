import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './hanoi.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
    <ToastContainer/>
    <>
    <div id="canvas">
  <div className="restart"><i className="fa fa-repeat"></i></div>
  <div className="curtain"></div>
  <ul id="score-panel">
    <li><i className="fa fa-star"></i></li>
    <li><i className="fa fa-star"></i></li>
    <li><i className="fa fa-star"></i></li>
    <li>
      <h1> <span id="moves-num">0</span><span>Moves</span></h1>
    </li>
  </ul>
  <ul className="tower" id="tower-1">
    <li className="disk disk-4" data-value="4"></li>
    <li className="disk disk-3" data-value="3"></li>
    <li className="disk disk-2" data-value="2"></li>
    <li className="disk disk-1 hold" data-value="1"></li>
</ul>
  <ul className="tower" id="tower-2"></ul>
  <ul className="tower" id="tower-3"></ul>
</div>
    </>
  </StrictMode>,
)
