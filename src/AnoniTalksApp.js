import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AppRouter } from './components/routes/AppRouter';
import './styles/index.css'

export const AnoniTalksApp = () => {
  return (
    <Provider store={ store }>
      <AppRouter />
      
    </Provider>
  )
}
