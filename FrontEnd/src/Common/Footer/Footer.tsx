import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Rasel Hossain Adib. All rights reserved.</p>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  backgroundColor: '#1F2544',
  padding: '10px',
  textAlign: 'center',
  color:"white",
  marginTop:"10px"
};

export default Footer;
