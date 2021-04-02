import React from 'react';
import { Link } from 'gatsby';

export const StaticRouteUrls = {
  home: (): string => '/',
  about: (): string => '/about/',
  people: (): string => '/people/',
  documents: (): string => '/documents/',
  events: (): string => '/events/',
  meetings: (): string => '/meetings/',
  projects: (): string => '/projects/',
  contact: (): string => '/contact/',
  privacy: (): string => '/privacy-policy/',
  socialMedia: {
      facebook: (): string => 'https://www.facebook.com',
      twitter: (): string => 'https:/www.twitter.com',
      instagram: (): string => 'https://www.instagram.com',
      nextdoor: (): string => 'https://www.nextdoor.com'
  }
}

export const StaticRouteLinks = {
  home: <Link to='/'>Home</Link>,
  about: <Link to='/about/'>About</Link>
}
