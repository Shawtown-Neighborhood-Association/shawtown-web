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
  Home: () => <Link to={StaticRouteUrls.home()}>Home</Link>,
  About: () => <Link to={StaticRouteUrls.about()}>About</Link>,
  People: () => <Link to={StaticRouteUrls.people()}>People</Link>,
  Documents: () => <Link to={StaticRouteUrls.documents()}>Documents</Link>,
  Events: () => <Link to={StaticRouteUrls.events()}>Events</Link>,
  Meetings: () => <Link to={StaticRouteUrls.meetings()}>Meetings</Link>,
  Projects: () => <Link to={StaticRouteUrls.projects()}>Projects</Link>,
  Contact: () => <Link to={StaticRouteUrls.contact()}>Contact</Link>,
  Privacy: () => <Link to={StaticRouteUrls.privacy()}>Privacy Policy</Link>
}
