import React from "react";
import { Link, Route } from "react-router-dom";
import Uhome from "./user/Uhome";

class Cname extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			
		}
		
	}

	render () {
		return (

			<div>
				<Link to="/ ">首页组件内容</Link>
				<div>
					<Route path="/" component={Uhome} />
				</div>
			</div>
		)
	}
}

export default Cname 