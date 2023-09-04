import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className = "my-3">
        <div className="card">
        <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '0'}
              } >
          <span className=" badge rounded-pill bg-danger" style={{left:'90%' , zIndex:'1' }}>{source}<span className="visually-hidden">unread messages</span>
                </span></div>
            <img src={!imageUrl?"https://liftlearning.com/wp-content/uploads/2020/09/default-image.png":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {!author? "Unknow":author}  on {new Date (date).toGMTString()}</small></p>
                <a href={newsUrl} className="btn btn-sm btn-dark">Get more information</a>
            </div>
            </div>
      </div>
    )
  }
}
