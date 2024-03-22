import type { Schema, Attribute } from '@strapi/strapi';

export interface AtomsHeaderPages extends Schema.Component {
  collectionName: 'components_home_header_pages';
  info: {
    displayName: 'link';
    description: '';
    icon: 'cube';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface AtomsIconLink extends Schema.Component {
  collectionName: 'components_atoms_icon_links';
  info: {
    displayName: 'Icon Link';
    icon: 'cube';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'atoms.header-pages': AtomsHeaderPages;
      'atoms.icon-link': AtomsIconLink;
    }
  }
}
