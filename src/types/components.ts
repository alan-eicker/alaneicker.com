export type HeaderProps = {
  logoImg: string;
  title: string;
  subtitle: string;
  nav: string[];
};

export type FooterProps = {
  copyright: string;
  contactInfo: {
    phone: string;
    email: string;
  };
  iconCredits: {
    websiteLinkUrl: string;
    websiteLinkText: string;
    iconUrl: string;
    iconName: string;
  };
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
};

export type HeroProps = {
  strapline: string;
  title: string;
  subtitle: string;
  text: string;
};

export type AboutProps = {
  bio: {
    title: string;
    content: string;
  };
  skills: {
    title: string;
    items: {
      name: string;
      icon: string;
    }[];
  }[];
};

export type CareerProps = {
  resume: {
    title: string;
    resumeDownloadUrl: string;
    items: {
      company: string;
      duration: string;
      positionHeld: string;
    }[];
  };
  referrals: {
    title: string;
    items: {
      referee: string;
      jobTitle: string;
      content: string;
    }[];
  };
};

export type DocHeadProps = {
  title: string;
};

export type IoProps = {
  justify: 'center' | 'end' | 'between' | 'around';
  items: {
    name: string;
    icon: string;
    url?: string;
  }[];
  size: number;
  label?: string;
};

export type PrefaceProps = {
  text: string;
};

export type ProjectsProps = {
  title: string;
  featured: {
    title: string;
    subtitle: string;
    content: string;
    url: string;
    urlText: string;
    image: string;
  };
  otherProjects: {
    title: string;
    items: {
      title: string;
      url: string;
      description: string;
      techUsed: string[];
    }[];
  };
};

export type SectionProps = {
  className?: string;
  children: JSX.Element;
  sidebar?: JSX.Element;
  cols?: number[];
  id?: string;
};

export type LayoutProps = {
  header: HeaderProps;
  footer: FooterProps;
  hero: HeroProps;
  sections: {
    [key: string]: any;
  };
};
