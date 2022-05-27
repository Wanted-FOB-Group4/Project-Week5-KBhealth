import { Route, Routes } from 'react-router-dom'

import { Dashboard } from './Dashboard'
import { Details } from './Details'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='details' element={<Details />} />
      <Route path='*' element={<div>404</div>} />
    </Routes>
  )
}

export default App
