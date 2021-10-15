import React, { Component } from "react";

const TITLES = [
    'A Software Engineer',
    'Critical Thinker',
    'Quick Learner',
    'Problem Solver',
    'Fitness Enthusiast'
];

class Title extends Component{
    state = {titleIndex : 0, fadeIn: true };

    componentDidMount(){
        this.timeout = setTimeout(()=> this.setState({ fadeIn: false}),1000);
        //console.log('Title mounted');
        this.animateTitle();
         
    }

    componentWillUnmount(){
        //console.log('will unmount');

        clearInterval(this.titleInterval);
        clearTimeout(this.timeout); 
    }

    animateTitle = () => {
            this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({titleIndex,fadeIn:true});
        },2000);
        this.timeout = setTimeout(()=> this.setState({ fadeIn: false}),1000);
        //console.log('this.setInterval', this.setInterval);
    } 
    render()
    {
        const {fadeIn, titleIndex} = this.state;
        const title = TITLES[titleIndex];
         
        return(
            <p className={fadeIn? 'title-fade-in':'title-fade-out'}>I am {title }</p>
        )
    }

}

export default Title;