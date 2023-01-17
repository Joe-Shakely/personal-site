import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import datas from '../../data/projects';

const descriptionStyle = {
  position: 'absolute',
};

const liStyle = {
  textDecoration: 'none',
};

const barStyle = {
  ...descriptionStyle,
  // width: `${String(Math.min(100, Math.max((competency / 5.0) * 100.0, 0)))}%`,
};

const videoStyle = {
  cursor: 'pointer',
};

const Cell = ({ data }) => (

  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <a href={data.link} className="image">
        <video style={videoStyle} controls width="100%" poster={`${process.env.PUBLIC_URL}${data.image}`}><source src={`${process.env.PUBLIC_URL}${data.video}`} /><track kind="captions" /></video>
      </a>
      <em><p>{data.desc}</p></em>
      <div className="row bullets">
        <ul style={liStyle}>
          {data.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
    video: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
