import React,{Component} from 'react';
import NavBar from '../Components/navbar';

class Home extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <div className='container'>
                    <h2>Welcome to Home</h2>
                    <p>
                    <b>Immigration</b> is the international movement of people into a destination country of which they are not natives or where they do not possess citizenship in order to settle or reside there, especially as permanent residents or naturalized citizens, 
                            or to take-up employment as a migrant worker or temporarily as a foreign worker.</p>
                            <p> As for economic effects, research suggests that migration is beneficial both to the receiving and sending countries. Research, with few exceptions, finds that immigration on average has positive economic effects on the native population, but is mixed as to whether low-skilled immigration adversely affects low-skilled natives. Studies show that the elimination of barriers to migration would have profound effects on world GDP, with estimates of gains ranging between 67 and 147 percent. Development economists argue that
                            reducing barriers to labor mobility between developing countries and developed countries would be one 
                            of the most efficient tools of poverty reduction</p>
                 </div>
            </div>
        );
    }
}

export default Home;