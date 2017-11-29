import React, {Component} from 'react'
import { connect } from 'react-redux'

class ListPost extends Component {


    render(){
        return(
            <div>
            </div>
        )
    }
}

function mapStateToProps ({ posts }) { 
    return {
      posts
    }
  }

  export default connect(mapStateToProps)(ListPost)