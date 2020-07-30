import React from 'react';
import { LinkedinIcon } from '../../style/style';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="linkedin">
          <h4>
            Alice Atalla
          </h4>
          <a href="https://www.linkedin.com/in/aliceatalla/">
            <LinkedinIcon />
          </a>
          <h4>
            Jessica Tavares
          </h4>
          <a href="https://www.linkedin.com/in/j%C3%A9ssicatavaresrocha/">
            <LinkedinIcon />
          </a>
          <h4>
            Matheus Domingos
          </h4>
          <a href="https://www.linkedin.com/in/matheusysd/">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
