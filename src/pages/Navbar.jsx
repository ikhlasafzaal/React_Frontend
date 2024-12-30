import axios from 'axios';
import React from 'react';


const Navbar = () => {


  const logout = async () => {
    const token = localStorage.getItem("token")
   
    try{
      const response = await axios.post("http://127.0.0.1:5000/logout", null,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    if(response.status === 200){
      localStorage.removeItem("token")
      window.location.assign("/login")
    }
    else{
      alert("error")
    }
  }
  catch(e){
    alert(e)
  }

  };

  return (
    <nav style={styles.navbar}>
      <a href="#home" style={styles.navItem}>Home</a>
      <a href="#profile" style={styles.navItem}>Profile</a>
      <a href="#settings" style={styles.navItem}>Settings</a>
      <button onClick={()=>logout()} style={styles.logoutBtn}>Logout</button>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    overflow: 'hidden',
  },
  navItem: {
    float: 'left',
    display: 'block',
    color: 'white',
    textAlign: 'center',
    padding: '14px 20px',
    textDecoration: 'none',
  },
  logoutBtn: {
    float: 'right',
    backgroundColor: '#f44336', // Red color
    color: 'white',
    padding: '14px 20px',
    border: 'none',
    cursor: 'pointer',
  }
};

export default Navbar;
