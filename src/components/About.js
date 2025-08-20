import Contact from './Contact';
import UserClass from './UserClass';
import React from 'react';

class About extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        return(
            <div>
                <h1>About</h1>
                <h2>This is about page</h2>
                <UserClass name="Saranya Class" location="AP"/>
            </div>
        )
    }
}


export default About;