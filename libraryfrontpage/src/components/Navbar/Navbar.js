import React from 'react'
import styles from './navbar.module.css';
const Navbar = () => {
    return (
        <>
            <div className={styles.Nav}>
                <div className={styles.homebtnconatainer}>
                    <button>Home</button>
                   
                  <img src='libraryfrontpage/to/public/logo.jpg'
                 
                 
                 style={{width:'20%',height:'10vh'}}
                 />
                       

                    <h1>MyLibrary</h1> 
                </div>

                <button>Admin</button>

            </div>
        </>
    )
}



export default Navbar
