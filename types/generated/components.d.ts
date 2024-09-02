import type { Schema, Attribute } from '@strapi/strapi';

export interface FooterFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    title: Attribute.String;
    main: Attribute.Text;
    submain: Attribute.Text;
    subtitle: Attribute.String;
    sub: Attribute.String;
    text: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface HeaderNavMenu extends Schema.Component {
  collectionName: 'components_header_nav_menus';
  info: {
    displayName: 'NavMenu';
  };
  attributes: {
    Home: Attribute.String;
    Shop: Attribute.String;
    About: Attribute.String;
    Contact: Attribute.String;
  };
}

export interface HeaderNavIcon extends Schema.Component {
  collectionName: 'components_header_nav_icons';
  info: {
    displayName: 'NavIcon';
  };
  attributes: {
    UserIcon: Attribute.String;
    SearchIcon: Attribute.String;
    FavoriteIcon: Attribute.String;
    Cart: Attribute.String;
  };
}

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    NavMenu: Attribute.Component<'header.nav-menu', true>;
    NavIcon: Attribute.Component<'header.nav-icon'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface BodyProductImage extends Schema.Component {
  collectionName: 'components_body_product_images';
  info: {
    displayName: 'productImage';
  };
  attributes: {
    image: Attribute.String;
    text: Attribute.String;
    subText: Attribute.String;
    price: Attribute.String;
    bannerImage: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    offer: Attribute.String;
  };
}

export interface BodyButton extends Schema.Component {
  collectionName: 'components_body_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.String;
  };
}

export interface BodyBody extends Schema.Component {
  collectionName: 'components_body_bodies';
  info: {
    displayName: 'body';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'body.button', true>;
    productImage: Attribute.Component<'body.product-image', true>;
    template_Id: Attribute.BigInteger;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'footer.footer': FooterFooter;
      'header.nav-menu': HeaderNavMenu;
      'header.nav-icon': HeaderNavIcon;
      'header.header': HeaderHeader;
      'body.product-image': BodyProductImage;
      'body.button': BodyButton;
      'body.body': BodyBody;
    }
  }
}
