import React,{ Component } from "react";
class Details extends Component { 

	constructor(props){
		super(props);
	
		this.state = {
			
		}
	}

	componentDidMount(){
		console.log(this.props.match.params.aid)
	}
	render() {
	
		return(
			<div>
				详情页面
			</div>
		)
	}
}
export default Details