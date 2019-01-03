import React from "react";
import { Link ,Route } from "react-router-dom";
//import UserInfo from "./user/UserInfo";
//import UserName from "./user/UserName";
//import Uhome from "./user/Uhome";
import "../assets/css/index.css";


//嵌套路由
//注意嵌套路由是在一个路由基础上进行嵌套/Cuser/UserName  ，q嵌套之后放的位置：<route />
//嵌套路由两种方式实现
//第一种： <Route path={`${this.props.match.url}/Uhome`} component={Uhome} />
//第二种：正常形式
class Cuser extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			
		}
		
	}

	componentDidMount(){
		console.log(this.props.routes)
	}
	render () {
		return (

			<div>
				<div className="content_box">

					<div className="content_left">
						<div>
							<Link to="/Cuser" >分类页1</Link>
						</div>
						<div>
							<Link to="/Cuser/UserName" >分类页2</Link>
						</div>
						<div>
							<Link to={`${this.props.match.url}/Uhome`} >分类页3</Link>
						</div>
						
					</div>

					<div className="content_right">
					{
						this.props.routes.map((item,index)=>{
							if(item.exact){
								return(<Route path={item.path} exact component={item.component} key={index} />)
							}else{
								return(<Route path={item.path} component={item.component} key={index} />)
							}
						})
					}
						
						{/*<Route path="/Cuser" exact component={UserInfo} />*/}
						{/*<Route path="/Cuser/UserName" component={UserName} />*/}
						{/*<Route path={`${this.props.match.url}/Uhome`} component={Uhome} />*/}
					</div>
				</div>
				
			</div>
		)
	}
}

export default Cuser 