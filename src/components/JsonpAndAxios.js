import React,{ Component } from "react";
//使用axios来获取数据，但是这样的请求不推荐使用JSONP跨域，最好后端处理跨域
//使用fech-jsonp 来获取跨域请求
 //网络请求接口http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20
 //判断该接口是不是跨域接口请求而得就是在请求看一下里面是不是了一个callback
 //http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&callback=xxx
 //axios的使用：https://github.com/axios/axios
 //https://www.npmjs.com/  里面跨域搜索需要安装的依赖包
 //1、安装cnpm install axios --save
 //2、哪里使用就在哪里引入  import axios from 'axios' \看文档使用
 //fetch-jsonp 的使用 https://github.com/camsong/fetch-jsonp
 //1、安装 cnpm install fetch-jsonp --save
 //2、import FetchJsonp from 'fetch-jsonp'
 import axios from "axios";
 import fetchJsonp from "fetch-jsonp";  
class JsonpAndAxios extends Component { 

	constructor(props){
		super(props);
	
		this.state = {
			
		}
	}
	getJson=()=>{
		//jsonp请求回来后的数据会带上一个callback 
		var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";
		fetchJsonp(url)
		  .then((response)=>{
		    return response.json()
		  }).then((json)=>{
		    console.log('parsed json', json)
		  }).catch((ex)=>{
		    console.log('parsing failed', ex)
		  })
	}
	getData=()=>{
		var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";
		axios.get(url)
		  .then( (response)=>{
		    // handle success
		    console.log("response",response);
		  })
		  .catch((error)=>{
		    // handle error
		    console.log(error);
		  })
		  .then(()=>{
		    // always executed
		  });

	}
	render() {
	
		return(
			<div>
				<h1>axios服务器获取方式</h1>
				<button onClick={this.getData}>点击获取axios</button>
				<hr />
				<br />
				<h1>fetch-jsonp 获取跨域数据请求</h1>
				<button onClick={this.getJson}>点击获取哦JSONP</button>
			</div>
		)
	}
}
export default JsonpAndAxios