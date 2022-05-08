import React from 'react';
import { icons } from '../../contents/registerForm';

function BottomSection() {
  return (
    <div style={{ textAlign: 'center' }}>
      <p><small>sponsored by</small></p>
      <div className="bottom-icons-container">
        {icons.map((icon) => (
          <a href={icon.url} className="bottom-icon">
            <img src={icon.source} alt={icon.alt} style={{ maxHeight: '70%', objectFit: 'contain' }} />
          </a>
        ))}
      </div>
      <p>
        <small>
          Already have an account?
          <a href="link" style={{ color: 'green', fontWeight: 'bold' }}>Sign In</a>
        </small>
      </p>
    </div>
  );
}

export default BottomSection;
