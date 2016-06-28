import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => { this.context.router.push('/'); });
  }

  render() {
    const { post } = this.props;
    // const post = this.props.post;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/posts/list">back to ヽ(ﾟ∀ﾟ)ﾉ</Link>
        <button
          className="btn btn-danger pull-xs-right f ladd"
          onClick={this.onDeleteClick.bind(this)}>
          刪除
        </button>
        <h4 className="ye f">{post.title}</h4>
        <h6 className="ye f">Name: {post.categories}</h6>
        <div className="col-xs-12 ye f"><p>{post.content}</p></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
