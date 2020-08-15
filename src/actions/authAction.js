import { types } from '../types/types'
import { fetchSinToken } from '../helpers/fetch'

export const startLogin = (email, password) => {
  //Se recibe como argumento a dispatch gracias a redux-thunk
  return async(dispatch) => {

    const resp = await fetchSinToken('auth', { email, password }, 'POST' )
    const body = await resp.json();

    // console.log(body);

    if ( body.ok ) {
      localStorage.setItem('token', body.token );
      localStorage.setItem('token-init-date', new Date().getTime() );

      dispatch( login({
        uid: body.uid,
        name: body.name
      }) )
    }
  }
}

export const login = ( user ) => ({
    type: types.authLogin,
    payload: user
})