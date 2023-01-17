/* eslint-disable no-unreachable */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import NewProjects from '../NewProjects';

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      const projects = this.props.data.projects.map((projects) => {
        const projectImage = `images/portfolio/${projects.image}`;
        return;
          <div key={projects.title} className="columns portfolio-item">
            {/* <video /> */}
          </div>;
      });
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>
            <NewProjects />
          </div>
        </div>
      </section>
    );
  }
}

Portfolio.propTypes = {
  data: Array.isRequired,
};

export default Portfolio;
