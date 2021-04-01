import React, { ReactChild } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import "@fortawesome/fontawesome-free/scss/brands.scss";
import './Layout.scss';

export interface LayoutProps {
    title: string;
    children?: ReactChild;
}

export const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}