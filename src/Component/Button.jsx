/* eslint-disable react/prop-types */
import React from 'react';
import './Button.css';

export default function Button({ title, color, setModal, width1 }) {
  return (
    <div>
      <button
        type="submit"
        style={{ backgroundColor: color, padding: width1 }}
        className="pool"
        onClick={() => {
          setModal(true);
        }}
      >
        {title}
      </button>
    </div>
  );
}
