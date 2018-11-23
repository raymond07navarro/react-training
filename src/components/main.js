import React from 'react';
import LandingPage from './landingpage';
import Plan from './plan';
import Benefit from './benefit';
import BenefitView from './benefitview'
import { browserHistory, Router, Route} from 'react-router';

const Main = () => (
	<Router history={browserHistory}>
			<Route exact path="/" component={LandingPage} />
			<Route path={"/plans"} component={Plan} />
			<Route path={"/benefits"} component={Benefit} />
			<Route path={"/benefits/:code/view"} component={BenefitView} />
	</Router>
);

export default Main;