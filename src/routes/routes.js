import { LoginScreen } from '../screens/Login/LoginScreen';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { RegisterScreen } from '../screens/Login/RegisterScreen';

export const routes = [
	{
		layout: 'inicio-sesion',
		hasLogged: false,
		routes: [
			{
				exact: true,
				path: '/login',
				component: LoginScreen,
			},
			{
				exact: true,
				path: '/signup',
				component: RegisterScreen,
			},
		],
	},
	{
		layout: 'app',
		hasLogged: true,
		routes: [
			{
				exact: true,
				path: '/',
				component: HomeScreen,
			},
		],
	},
];
