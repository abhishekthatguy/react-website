
import React , {Component} from'react';
import './Avtar.css';
import 'tachyons';
import AvtarList from './AvtarList';

    class Avtar extends Component{
        constructor(){
            super();
            this.state={
                name:"Welcome To My DashBoard"
            }
        }
        handleChange(){
            this.setState({
                name:"Thank You From Heart! Please Visit Again"
            })
        }
        render(){
            const ArrayListItems=[{
                id:"1",
                name:"Avii singh",
                designation:"Front-end Developer"
            },
            {
                id:"2",
                name:"Jatin Shukla",
                designation:"Back-end Developer"
            },
            {
                id:"3",
                name:"Prashant Sirohi",
                designation:"Assistant Manager"
            },
            {
                id:"4",
                name:"Vikas Kumar",
                designation:"Back-end Developer"
            }];
                const arrayCardDisplay=ArrayListItems.map((arrayCard,i)=>{
                return <AvtarList key={i} id={ArrayListItems[i].id} name={ArrayListItems[i].name} designation={ArrayListItems[i].designation}/>
            });
            return(
                <div className="container_body tc">
                    <h1 className="tc">{this.state.name}</h1>
                        {arrayCardDisplay}
                    <p>You can Subscribe us </p>
                    <button onClick={()=>this.handleChange()}>Subscribe</button>
                </div>
            )
        }
            
        
    }


export default Avtar;