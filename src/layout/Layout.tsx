import React, { ReactChild } from 'react';
import { Helmet } from 'react-helmet';

import Footer from './Footer/Footer';
import Header from './Header/Header';

import "@fortawesome/fontawesome-free/scss/brands.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";
import './Layout.scss';

export interface LayoutProps {
    title: string;
    description: string;
    children?: ReactChild;
}

export const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <div>
            <Helmet title={`${props.title} - Shawtown Neighborhood Association`} />
              <meta name="description" content={props.description} />
              <meta name="robots" content="index, follow" />
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;
