import React from 'react';

const Symmetry = () => {
  return(
    <svg viewBox="0 0 250 250">
        <g id="Balance" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Symmetry" fill="#555555">
                <circle id="right-row3-circle1" cx="160" cy="190" r="25"></circle>
                <circle id="right-row2-circle2" cx="220" cy="125" r="25"></circle>
                <circle id="right-row2-circle1" cx="160" cy="125" r="25"></circle>
                <circle id="right-row1-circle1" cx="160" cy="60" r="25"></circle>
                <circle id="left-row3-circle1" cx="90" cy="190" r="25"></circle>
                <circle id="left-row2-circle2" cx="90" cy="125" r="25"></circle>
                <circle id="left-row2-circle1" cx="30" cy="125" r="25"></circle>
                <circle id="left-row1-circle1" cx="90" cy="60" r="25"></circle>
            </g>
        </g>
    </svg>
  )
}

export default Symmetry;