import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }



  render() {
    return (
      <div className="neco">

        <strong><p id="neco1">留言板。</p></strong>
        <div id="neco2">
          <Link to="/posts/new" className="btn btn-primary">
            新增
          </Link>
        </div>
        <div id="neco3">
          <Link to="/posts/list" className="btn btn-danger">
            ヽ(ﾟ∀ﾟ)ﾉ
          </Link>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
