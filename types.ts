export interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

export interface NavbarProps {
  logo: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu: MenuItem[];
  auth: {
    book: {
      title: string;
      url: string;
    };
    quote: {
      title: string;
      url: string;
    };
  };
}

export interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

export interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

export interface LogosTypeProps {
  heading?: string;
  logos: Logo[];
  className?: string;
}

export interface StatsTypeProps {
  heading?: string;
  description?: string;
  link: {
    text: string;
    url: string;
  };
  stats: Array<{
    id: string;
    value: string;
    label: string;
  }>;
}

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

export interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

export interface FeaturesType {
  badge?: string;
  heading?: string;
  description?: string;
  tabs: Tab[];
}

export interface ProcessProps {
  id: string;
  number: string;
  title: string;
  description: string;
}

type ToolType = {
  name: string;
  description: string;
  icon: string;
}


export interface ServiceProps {
  title: string;
  slug: string;
  description: string;
  overview: string[];
  tools: ToolType[];
  process: ProcessProps[];
  cta: {
    text: string;
    url: string;
  };
}

export interface ServiceCardProps {
  title: string;
  slug: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface CaseStudy {
  id: number;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  tags: string[];
  color: string;
}