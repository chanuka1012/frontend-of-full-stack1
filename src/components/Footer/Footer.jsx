import React from 'react';

export default function Footer() {
  return (
    <footer  style={{ backgroundColor: '#ADB2D4', color: 'white', padding: '10px 20px', textAlign: 'center' ,width:'100%'}}>
      <p>&copy; {new Date().getFullYear()} Our Application. All rights reserved.</p>
    </footer>
  );
}
