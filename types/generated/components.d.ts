import type { Schema, Struct } from '@strapi/strapi';

export interface DynamicZoneFeatureHighlight extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_feature_highlights';
  info: {
    displayName: 'MediaTeaser';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    layout: Schema.Attribute.Enumeration<
      ['content-left_media-right', 'content-right_media-left']
    > &
      Schema.Attribute.DefaultTo<'content-left_media-right'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    SectionHeader: Schema.Attribute.Component<'shared.section-header', false>;
    sideImages: Schema.Attribute.Media<'images', true>;
    stat: Schema.Attribute.Component<'shared.stat', false>;
    theme: Schema.Attribute.Enumeration<['light', 'dark']>;
  };
}

export interface DynamicZoneHero extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    backgroundType: Schema.Attribute.Enumeration<['image', 'video']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'image'>;
    bgImage: Schema.Attribute.Media<'images'>;
    overlayColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#000000'>;
    overlayOpacity: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0.35>;
    videoFile: Schema.Attribute.Media<'videos'>;
    videoUrl: Schema.Attribute.String;
  };
}

export interface DynamicZoneOurStrengths extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_our_strengths';
  info: {
    displayName: 'CardSection';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.card', true>;
    headerSection: Schema.Attribute.Component<'shared.section-header', false>;
    section_name: Schema.Attribute.String;
    theme: Schema.Attribute.Component<'shared.theme', false>;
  };
}

export interface DynamicZoneUpdate extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_updates';
  info: {
    displayName: 'News-Blogs-Podcasts';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    headerSection: Schema.Attribute.Component<'shared.section-header', false>;
    theme: Schema.Attribute.Enumeration<['light', 'dark']> &
      Schema.Attribute.DefaultTo<'light'>;
  };
}

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {};
}

export interface SectionsHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_slides';
  info: {
    displayName: 'hero-slide';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
    text: Schema.Attribute.String;
    URL: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['simple', 'primary', 'outline', 'muted']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'shared.link', true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {};
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
    text: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface SharedSectionHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_headers';
  info: {
    displayName: 'section-header';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    highlight: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String & Schema.Attribute.Required;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSocialMediaIconLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_media_icon_links';
  info: {
    displayName: 'Social_Media_Icon_Links';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    Link: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedStat extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'stat';
  };
  attributes: {
    label: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedTheme extends Struct.ComponentSchema {
  collectionName: 'components_shared_themes';
  info: {
    displayName: 'Theme';
  };
  attributes: {
    theme: Schema.Attribute.Enumeration<['light', 'dark']>;
  };
}

export interface SocialMediaCardCard extends Struct.ComponentSchema {
  collectionName: 'components_social_media_card_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'shared.link', true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dynamic-zone.feature-highlight': DynamicZoneFeatureHighlight;
      'dynamic-zone.hero': DynamicZoneHero;
      'dynamic-zone.our-strengths': DynamicZoneOurStrengths;
      'dynamic-zone.update': DynamicZoneUpdate;
      'global.footer': GlobalFooter;
      'sections.hero-slide': SectionsHeroSlide;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.form': SharedForm;
      'shared.link': SharedLink;
      'shared.section-header': SharedSectionHeader;
      'shared.seo': SharedSeo;
      'shared.social-media-icon-links': SharedSocialMediaIconLinks;
      'shared.stat': SharedStat;
      'shared.theme': SharedTheme;
      'social-media-card.card': SocialMediaCardCard;
    }
  }
}
