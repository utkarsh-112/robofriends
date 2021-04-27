import React,{ Component } from 'react';
import Searchbox from '../components/Searchbox';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll';
import './App.css';
class App extends Component {
	constructor() {
		super()
		this.state= {
			robots: [],
			searchfield: ''	
		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots: users}))
	}
	onsearchchange= (event) => {
		this.setState({ searchfield: event.target.value}) 
	}
	render() {
		const {robots,searchfield}=this.state;
		const filteredrobots =this.state.robots.filter(robot=> {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if(robots.lenght===0){
			return <h1>Loading....</h1>
		}
		else{
		return(
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<Searchbox searchchange={this.onsearchchange}/>
			<Scroll>
				<Cardlist robots={filteredrobots} />
			</Scroll>		
		</div>
		);
	    }
	}
}
export default App;