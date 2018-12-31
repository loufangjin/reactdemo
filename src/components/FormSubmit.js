import React,{ Component } from "react";
//form提交表单很多坑
//text,checkBox,radio,<textarea>,selected=》option
class FormSubmit extends Component {

	constructor(props){
		super(props)

		this.state={
			name:"",
			sex:"",
			hobby:'',
			city:'',
			area:'',
			citys:["北京","上海","广东"],
			checkBoxLsit:[{
				title:"吃饭",
				checked:true
			},{
				title:"睡觉",
				checked:true
			},{
				title:"打豆豆",
				checked:true
			}]
		}
	}

	handleSelect=(e)=>{
		this.setState({
			city:e.target.value
		})
	}
	HandleName=(e)=>{
		this.setState({
			name:e.target.value
		})
	}
	HandleSex=(e)=>{
		this.setState({
			sex:e.target.value
		})
	}
	formSubmit=(e)=>{
		//阻止表单提交事件，必须写的
		e.preventDefault()
		console.log(this.state.name)
		console.log(this.state.sex)
		console.log(this.state.city)
		console.log(this.state.hobby)
	}
	handleCheck(e){
		var checkBoxs = this.state.checkBoxLsit;
		checkBoxs[e].checked = !checkBoxs[e].checked;
		this.setState({
			hobby:checkBoxs
		})
	}
	HandleArea=(e)=>{
		this.setState({
			area:e.target.value
		})
	}
	
	render(){
	
		return(
	
			<div>
	
					<form onSubmit={this.formSubmit} >
						姓名: <input type="text" value={this.state.name} onChange={this.HandleName} />
						<br />
						性别：<input type="radio" checked={this.state.sex === "1"} value="1" onChange={this.HandleSex} />男
						<input type="radio" checked={this.state.sex === "2"} value="2" onChange={this.HandleSex} />女
						<br />
						居住城市：

						<select value={this.state.city} onChange={this.handleSelect} >
							{
								this.state.citys.map((item,index)=>{
									return <option key={index}> {item} </option>
										
									
								})
							}
						</select>
						爱好：
						{

							this.state.checkBoxLsit.map((item,index)=>{
								return (
									<span key={index}>
										<input type="checkBox" checked={item.checked}  onChange={this.handleCheck.bind(this,index)}/> {item.title}
									</span>
								)
							})
						}

						<br /> <br />
						<textarea value={this.state.area} onChange={this.HandleArea} />
						<input type="submit" defaultValue="提交" />
					</form>
			</div>
		)
	}
}	

export default FormSubmit