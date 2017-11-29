import {Component} from 'react'
import {connect} from 'react-redux'
import {PostList} from './PostList'

class Root extends Component{
    state = {

    }

    render(){
        <div className='root-container'>
            <PostList />
        </div>
    }
}

export default connect()(Root)