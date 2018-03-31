import React from 'react';

import Email from '../../components/Email';

const HelloColorado = () => (
  <Email title="Hello, Colorado">
    <h2>Hello, Colorado</h2>
    <p>
      You can find my template in{' '}
      <code>src/templates/co/hello-colorado.js</code>
    </p>
    <img
      src="https://i.pinimg.com/originals/55/f5/28/55f528eb863c1be41ae4a5ef57e463dc.png"
      alt="Colorado"
      style={{ width: 100, height: 'auto' }}
    />
  </Email>
);

export default HelloColorado;
