import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Layout.css';
interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <main className='layout-main'>
                {props.children}
            </main>
            <footer className='layout-footer'>
                <p>&copy; Site created in 2024 by Mohand-Ameziane ZAIDI. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;