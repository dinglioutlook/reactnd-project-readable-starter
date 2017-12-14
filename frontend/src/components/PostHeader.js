import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const PostHeader = (props) =>{
    const {categories, order, orderPostBy} = props;
    const orderby = ['Date', 'Votes'];
    return (
        <div className='post-Header'>
           < div className='sorted-by-categories'>
                Categories:
                <div className='btn-group'>
                    {categories.map((category) => (
                     <Link 
                        key = {category.name}
                        to = {`/${category.name}`}>
                        <button type ='button' >
                            {category.name}
                        </button>
                    </Link>   
                    ))}
                </div>

                <div className='sort-by'>
                    Order by:
                    <div className = 'btn-group'>
                        {orderby.map((option) =>(
                            <button 
                                type = 'button'
                                key = {option.length}
                                onClick = {()=>orderPostBy(option)}
                            >{option}
                            </button>
                        )
                    )
                        }
                    </div>
                </div>

                <div className='add-post'>
                    <Link className="add-post-link" to="/addPost">Add Post</Link> 
                </div>
           </div>
        </div>
    )
}

function mapStateToProps({categories}){
    return {
        categories
    }
}

export default connect(mapStateToProps)(PostHeader)

