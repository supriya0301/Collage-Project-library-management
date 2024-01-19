import React from 'react'
import styles from './navbar.module.css';
import { FaBookOpen } from "react-icons/fa6";
const Navbar = () => {
    return (
        <>
            <div className={styles.Nav}>
                <div className={styles.homebtnconatainer}>
                    <button>Home</button>
                    
                    <h1 className={styles.iconTitle}><span><FaBookOpen /></span>MyLibrary</h1> 
                </div>

                <button>Admin</button>

            </div>
        </>
    )
}



export default Navbar
