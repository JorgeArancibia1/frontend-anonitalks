import { LoginScreen } from '../screens/Login/LoginScreen';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { RegisterScreen } from '../screens/Login/RegisterScreen';
import { AboutScreen } from '../screens/About/AboutScreen';

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
		layout: 'Home',
		hasLogged: true,
		routes: [
			{
				exact: true,
				path: '/',
				component: HomeScreen,
			},
		],
	},
	{
		layout: 'About',
		hasLogged: true,
		routes: [
			{
				exact: true,
				path: '/about',
				component: AboutScreen,
			},
		],
	},
];
