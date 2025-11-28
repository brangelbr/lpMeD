import React from 'react';

export const Logo = ({ className = "h-10 w-auto", lightMode = false }: { className?: string; lightMode?: boolean }) => (
  <svg 
    viewBox="0 0 2800 605" 
    className={className}
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    fillRule="evenodd" 
    clipRule="evenodd" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeMiterlimit="1.5"
  >
    <g id="Camada1">
      <g>
        <path d="M17.777,594.223l117.333,0.667l0,-423.333l192.667,180l309.333,-294.667l0,-42.667l-116.667,0l-193,193.333l-191.667,-193.333l-118,0l0,580Z" style={{fill: lightMode ? '#ffffff' : '#6b737e', stroke: lightMode ? '#ffffff' : '#6c757e', strokeWidth:'1px'}}/>
        <path d="M520.277,594.889l-0.5,-206.714l117.333,-111.5l0,318.214l-116.833,0Z" style={{fill: lightMode ? '#ffffff' : '#6b737e', stroke: lightMode ? '#ffffff' : '#6c757e', strokeWidth:'1px'}}/>
        <path d="M327.444,397.694l-157.167,-150l-0.5,126l157.667,150.5l534.833,-509.971l-94.037,0c-30.015,3.273 -50.581,12.846 -64.596,26.786l-376.201,356.685Z" style={{fill: lightMode ? '#ffffff' : '#2fb670', stroke: lightMode ? '#ffffff' : '#2fb670', strokeWidth:'1px'}}/>
      </g>
      <g transform="matrix(8.082154,0,0,8.082154,-8407.109997,-2676.128872)">
        <text x="1151.944px" y="365.277px" style={{fontFamily:'"Arial Narrow", "Impact", "Plus Jakarta Sans", sans-serif', fontWeight: '700', fontSize:'46.275px', fill: lightMode ? '#ffffff' : '#2f2f2f'}}>Marca</text>
        <text x="1151.944px" y="404.286px" style={{fontFamily:'"Arial Narrow", "Impact", "Plus Jakarta Sans", sans-serif', fontWeight: '700', fontSize:'46.275px', fill: lightMode ? '#ffffff' : '#2f2f2f'}}>em dia</text>
      </g>
    </g>
  </svg>
);