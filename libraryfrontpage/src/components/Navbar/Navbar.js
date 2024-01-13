import React from 'react'
import styles from './navbar.module.css';
const Navbar = () => {
    return (
        <>
            <div className={styles.Nav}>
                <div className={styles.homebtnconatainer}>
                    <button>Home</button>
                    <h1>MyLibrary</h1>
                </div>

                <button>Admin</button>

            </div>
        </>
    )
}

export default Navbar
