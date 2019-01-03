import React,{ Component } from "react";
import { Link ,Redirect} from "react-router-dom";
/*import {
//  BrowserRouter as Router,
//  Route,
//  Link,
//  Redirect,
//  withRouter
//} from "react-router-dom";*/
//api请求接口：列表：http://a.itying.com/api/productlist
//api请求接口：详情：http://a.itying.com/api/productcontent?id=5ac1a22011f48140d0002955
//在git种查看文档
//安装 react 路由：
//1、https://reacttraining.com/react-router/web/guides/quick-start
//2、cnpm install react-router-dom --save
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//按着官网的步骤走
//<Route path="/" exact component={App} />  exact是严格控制 不加的话杂家在其他页面的时候会默认喜爱能加上/第一个路径
//动态路由传值的两种形式：
//动态路由传值： http://localhost:3000/Details/11
// 1 <Route path="/Details/:aid" component={Details} /> 
// 2 <Link to={`/Details/${item.aid}`}>{item.name}</Link>
// 3 详情页面获取 componentDidMount(){console.log(this.props.match.params.aid)}

//get传值：http://localhost:3000/DetailsGet?aid=22
//1 <Route path="/DetailsGet" component={DetailsGet} />
//2 <Link to={`/DetailsGet?aid=${item.aid}`}>{item.name}</Link>
//3 安装 cnpm install url --save 安装url插件便于获取id值
//4 详情页面获取 componentDidMount(){var detalis = url.parse(this.props.location.search,true).query；console.log("detalis",detalis)}
//react解析html vue中直接v-html 

//https://reactjs.org/docs/dom-elements.html
//function createMarkup() {
//  return {__html: 'First &middot; Second'};
//}
//
//function MyComponent() {
//  return <div dangerouslySetInnerHTML={createMarkup()} />;
//}
//<div className="cpntent" dangerouslySetInnerHTML={{__html:__html:this.state.list}}>
//动态路由跳转两种方式：
//1\页面直接跳转：比如---列表详情页面跳转：<Link to={`/Details/${item.aid}`}>{item.name}</Link>
//2\JS控制跳转：比如---登陆成功后跳转
//第一步：import {
//  BrowserRouter as Router,
//  Route,
//  Link,
//  Redirect,
//  withRouter
//} from "react-router-dom";
//第二步：设置控制开关：
//this.state={
//	flag:false
//}
//第三步：render渲染的时候设置Redirect
//if(this.state.flag){
//	return <Redirect to={{ pathname: "/" }} />
//}
//第四步通过条件执行方法事件改变flag的状态
//路由渲染==》
//注意事项：定义state值的时候要看返回的值在定义：[],""，视情况而定
//渲染中传图片的时候要做判断，否则会404因为可以分析生命周期、以及异步加载就知道，第一次渲染图片没有地址，所以会404
class ReactRouter extends Component { 

	constructor(props){
		super(props);
	
		this.state = {
			list:[{
				name:"hello11",
				aid:11
			},{
				name:"hello22",
				aid:22
			},{
				name:"hello33",
				aid:33
			},{
				name:"hello44",
				aid:44
			},{
				name:"hello55",
				aid:55
			}],
			listGet:[{
				name:"getDetails11",
				aid:11
			},{
				name:"getDetails22",
				aid:22
			},{
				name:"getDetails33",
				aid:33
			},{
				name:"getDetails44",
				aid:44
			},{
				name:"getDetails55",
				aid:55
			},],
			listHtml:{
				name:"<p>你好啊react用于解析HTML?怎样进行呢？</p>"
			},
			flag:false,
		}
	}
	changeForm=(e)=>{
		e.preventDefault();
		let username = this.refs.username.value;
		let password = this.refs.password.value;
		if(username === "admin" && password === "123456"){
			this.setState({
				flag:true
			})
		}else{
			alert("登陆失败")
		}
	}
	//let { from } = this.props.location.state || { from: { pathname: "/" } }; es6解构赋值
	//代表存在的时候：this.props.location.state  不存在的时候{ from: { pathname: "/" } }
	//if (redirectToReferrer) return <Redirect to={from} />;
	render() {
		if(this.state.flag){
			//return <Redirect to={{ pathname: "/" }} />
			return <Redirect to='/' />
		}
		
		return(
			<div>
				<form onSubmit={this.changeForm}>
					<input type="text" ref="username"/><br />
					<input type="password" ref="password"/><br />
					<input type="submit" value="执行登陆"/>
				</form>
				<br />
				<hr />
				react解析html
				<br />
				<br />
				{
					<div dangerouslySetInnerHTML={{__html:this.state.listHtml.name}}>

					</div>

				}
				{
					<span>{this.state.listHtml.name}</span>
				}
				<hr />
				路由组件动态路由传值
				<ul>
					{
						this.state.list.map((item,index)=>{
							return (
								<li key={index}>

									<Link to={`/Details/${item.aid}`}>{item.name}</Link>
								</li>
							)
						})
					}
				</ul>
				<br />
				<br />
				<br />
				<hr />
				get路由传值
				<ul>
					{
						this.state.listGet.map((item,index)=>{
							return (
								<li key={index}>

									<Link to={`/DetailsGet?aid=${item.aid}`}>{item.name}</Link>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}
export default ReactRouter