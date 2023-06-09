export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};
export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type Dictionary = {
  banner: {
    text: string;
    paragraph: string;
  };
  demo: {
    place_holder: string;
    button_children: string;
    copy:string
    copy_message:string
    link:string
    resume:string
  };
  footer: {
    built_by: string;
    hosted_on: string;
    source_code: string;
  };
};
