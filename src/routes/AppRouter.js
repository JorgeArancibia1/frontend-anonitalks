import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../redux/actions/authAction';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { routes } from './routes';

export const AppRouter = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.auth);
	const { checking, uid } = state;

	useEffect(() => {
		dispatch(startChecking());
	}, [dispatch]);

	if (checking) {
		return <h5>Espere...</h5>;
	}

	return (
		<Router>
			<div>
				<Switch>
					{routes.map((r) => {
						const Guard = r.hasLogged ? PrivateRoute : PublicRoute;
						return r.routes.map((_r) => (
							<Guard
								key={_r.path}
								path={_r.path}
								exact={_r.exact}
								isAuthenticated={!!uid}
								component={_r.component}
							/>
						));
					})}
					<Redirect to="/login" />
				</Switch>
			</div>
		</Router>
	);
};
