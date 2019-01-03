//路由模块化,便于路由管理
//路由中的嵌套路由如何实现
//难点也是重点
/*传值：固定写法
render={props => (
  <route.component {...props} routes={route.routes} />
)}
*/
import Cname from "./components/Cname";
import Cuser from "./components/Cuser";
	import UserInfo from "./components/user/UserInfo";
	import UserName from "./components/user/UserName";
	import Uhome from "./components/user/Uhome";
let routes =[{
	path:"/",
	component:Cname,
	exact:true
},{
	path:"/Cuser",
	component:Cuser,
	routes: [{ //嵌套路由传值
        path: "/Cuser/",
        component: UserInfo,
        exact:true
    },{
	    path: "/Cuser/UserName",
	    component: UserName
    },{
	    path: "/Cuser/Uhome",
	    component: Uhome
    }]
}] 
export default routes