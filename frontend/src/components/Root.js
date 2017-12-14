import React, {Component} from 'react'
import {connect} from 'react-redux'
import PostList from './PostList'
import PostHeader from './PostHeader'

class Root extends Component{
    state = {
        selectBy: ''
    }

    componentDidMount() {
        this.setState({selectBy:'Date'})
    }

    orderPostBy = (opinion) => {
        this.setState({selectBy:opinion})
    }

    render(){
        const {selectBy} = this.state
        const selectCategory = this.props.match.params.category || 'All'
        return(
            <div className='root-container'>
                <PostHeader 
                    selectBy = {selectBy}
                    orderPostBy = {this.orderPostBy}
                />
                <PostList 
                    selectCategory = {selectCategory}
                    selectBy = {selectBy}
                />
            </div>
        )
    }
}

export default connect()(Root)