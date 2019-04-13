import React from 'react';

export class Content extends React.Component{
    //생성자 공식
    //Content의 멤버 변수를 this.state:{count:0}
    constructor(props){
        super(props)

        this.state = {
            count:0,
        }

        this.increaseCount = this.increaseCount.bind(this);         //onClick속성으로 함수를 호출할 때 this 는 윈도우 객체인데 이를 Content객체로 변환해주기 위해서
        this.decreaseCount = this.decreaseCount.bind(this);         //해주는 작업
        this.resetCount = this.resetCount.bind(this);
    }
 
    increaseCount(){
        const current = this.state.count;
        this.setState({
            count: current +1
        })
        console.log(this.state);
    }
    decreaseCount(){
        const current = this.state.count;
        this.setState({
            count: current -1
        })
        console.log(this.state);
    }
    resetCount(){
        
        this.setState({
            count : 0
        })
    }

    render(){
        const {count} = this.state;
        return (
            <div>
            <h1>{count}</h1>
            <button onClick={this.decreaseCount}>Down</button>
            <button onClick={this.increaseCount}>Up</button>
            <button onClick={this.resetCount}>Reset</button>
          </div>
        )

    }
}



