import {Navigate, Routes, Route} from 'react-router-dom'
import { ConsultaFatura } from './pages/ConsultaFatura'
import { Fatura } from './pages/Fatura'
export const AppRouter = () => {
  return(
    <Routes>
    <Route path='/faturas' Component={Fatura}/>
    <Route path='/consultas' Component={ConsultaFatura}/>
    <Route path='*' element={<Navigate to="/faturas"/>}/>
  </Routes>
  )

}