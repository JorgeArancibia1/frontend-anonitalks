import { LoginScreen } from '../screens/LoginScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

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
