import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='container mt-5 '>
            <div className=" bg-light">
                <div className="card-body text-center p-5">
                    <h1 >
                    A warm welcome!
                    </h1>
                    <p >Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                    <button className='btn btn-primary'>Call to action</button>
                </div>
            </div>
      </div>
    )
  }
}
