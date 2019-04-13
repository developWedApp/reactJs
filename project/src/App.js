import React from 'react'
import {Header} from './component/header/Header'
import {Footer} from './component/footer/Footer'
import {Content} from './component/content/Content'

export class App extends React.Component{
    render(){
        return (
            <div>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>




        )
    }
}

// 리액트 컴포넌트를 상속받은 앱을 태그로 사용할 수 있다.