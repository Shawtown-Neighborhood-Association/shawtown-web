import React, { ReactChild } from 'react';
import Footer from './Footer/Footer';
import "@fortawesome/fontawesome-free/scss/brands.scss";

import './Layout.scss';

export interface LayoutProps {
    title: string;
    children?: ReactChild;
}

export const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <div>
            <h1>Header - {props.title}</h1>
            {props.children}
            <Footer />
        </div>
    )
}