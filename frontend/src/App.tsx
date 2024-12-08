import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'

import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'

import './styles/global.css'

import CounterView from './modules/counter/views/counter.view.tsx'
import LoginView from './modules/auth/views/login.view.tsx'
import RegisterView from './modules/auth/views/register.view.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >
                <Browser>
                    <Routes>
                        <Route path="/*" element={<></>} />
                        <Route path='/login' element={<LoginView />} />
                        <Route path='/register' element={<RegisterView />} />
                        <Route path='/counter' element={<CounterView />} />
                    </Routes>
                </Browser>
            </PersistGate>
        </Provider>
    </StrictMode>,
)
