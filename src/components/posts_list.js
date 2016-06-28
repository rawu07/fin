import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li id="whi" className="list-group-item" key={post.id}>
          <div>
            <Link to={"posts/" + post.id} >
              <span className="pull-xs-right">{post.categories}</span>
              <strong>{post.title}</strong>
            </Link>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right ladd">
          <Link to="/posts/new" className="btn btn-primary f">
            新增
          </Link>
        </div>
        <h3 className="f ye">ヽ(ﾟ∀ﾟ)ﾉ</h3>
        <ul className="list-group f">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsList);
