export interface HeaderProps {
  title: string;
  subtitle: string;
  nav: string[];
  blogUrl: {
    url: string;
    name: string;
  };
}

export interface FooterProps {
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
}

export interface HeroProps {
  strapline: string;
  title: string;
  subtitle: string;
  text: string;
}

export interface AboutProps {
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
  };
}

export interface CareerProps {
  resume: {
    title: string;
    resumeDownloadUrl: string;
    items: {
      company: string;
      url?: string;
      duration: string;
      positionHeld: string[];
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
}

export interface DocHeadProps {
  title: string;
}

export interface IconListProps {
  justify?: 'center' | 'end' | 'between' | 'around';
  items: {
    name: string;
    icon: string;
    url?: string;
  }[];
  size?: number;
  label?: string;
}

export interface PrefaceProps {
  text: string;
}

export interface ProjectsProps {
  title: string;
  featured: {
    title: string;
    subtitle: string;
    content: string;
    urls: {
      href: string;
      text: string;
    }[];
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
}

export interface SectionProps {
  className?: string;
  sidebar?: JSX.Element;
  cols?: number[];
  id?: string;
  children?: JSX.Element | any[];
}

export interface LayoutProps {
  header: HeaderProps;
  footer: FooterProps;
  hero: HeroProps;
  sections: {
    [key: string]: any;
  };
}

export interface ProjectBoxProps {
  title: string;
  description: string;
  url: string;
  techUsed: string[];
}

export interface FeaturedProjectProps {
  sectionTitle: string;
  projectTitle: string;
  projectImage: string;
  projectSubtitle: string;
  projectDescription: string;
  projectUrls: {
    href: string;
    text: string;
  }[];
}

export interface OtherProjectsProps {
  items: {
    title: string;
    description: string;
    url: string;
    techUsed: string[];
  }[];
}
