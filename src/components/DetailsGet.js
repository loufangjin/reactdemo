import React,{ Component } from "react";
import url from "url";
class DetailsGet extends Component { 

	constructor(props){
		super(props);
	
		this.state = {
			
		}
	}

	componentDidMount(){
		var detalis = url.parse(this.props.location.search,true).query
		console.log("detalis",detalis)
	}
	render() {
	
		return(
			<div>
				get传值详情页面
			</div>
		)
	}
}
export default DetailsGet