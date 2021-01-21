import React from 'react';
import ReactDom from 'react-dom';
import './index.css'


const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return (
    <article className="person">
      <img src={url} alt="person" />
      <h3>{name}</h3>
      <h3>{job}</h3>
      {children}
    </article>
  );
};


const PersonList = () => {
  return (
    <section className="perseon-list">
      <Person img="43" name="Thomas" job="Developer" />
      <Person img="33" name="Victor" job="Designer">
        <p>
          lorem is not just a normal snippet—it’s actually a generator.
        </p>
      </Person>
      <Person img="54" name="John" job="Product Manager" />
    </section>
  );
};


ReactDom.render(<PersonList></PersonList>,
  document.getElementById('root'));