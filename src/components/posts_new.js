import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from "react-router"
import { createPost } from '../actions/index';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog post has been created, navigate the user to the index
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/');
      });
  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3 className="f ye ladd">要寫什麼呢...</h3>
        <div className="form-group">
          <label className="f ye">標題</label>
          <input type="text" id="whi1" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label className="f ye">名字</label>
          <input type="text" id="whi2" className="form-control" {...categories}/>
            <div className="text-help">
              {categories.touched ? categories.error : ''}
            </div>
        </div>
        <div className="form-group">
          <label className="f ye">內容</label>
          <textarea rows="10" id="whi3" className="form-control" {...content}/>
            <div className="text-help">
              {content.touched ? content.error : ''}
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger f">取消</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = '標題要打呀...';
  }
  if (!values.categories) {
    errors.categories = '無名氏...?';
  }
  if(!values.content) {
    errors.content = '你想表達什麼´・ω・`';
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
