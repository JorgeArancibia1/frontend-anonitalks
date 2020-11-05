import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { AppRouter } from './routes/AppRouter';
import './styles/index.css'

export const AnoniTalksApp = () => {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  )
}
