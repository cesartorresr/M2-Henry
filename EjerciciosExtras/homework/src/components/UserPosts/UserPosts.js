import React from 'react';
import { connect } from 'react-redux';
import { getAllUserPosts } from '../../actions';
import './UserPosts.css';

export class UserPosts extends React.Component {

  render() {
   
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {/*userid*/}</h4>
        
      </div>
    )
  }
}

export function mapStateToProps(state) {
  return {
    userPosts: state.userPosts,
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllUserPosts: () => dispatch(getAllUserPosts())
  }
}
 


export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);