// Every original URL is preserved (/about.html …). Clean aliases (/about) resolve to the same page.
export const PAGES = [
  { key: '', file: 'index.html', clean: '/', component: 'Site', title: "N'kisi Global Consulting" },
  { key: 'about', file: 'about.html', clean: '/about', component: 'AboutPage', title: "About Us – N'kisi Global Consulting" },
  { key: 'services', file: 'services.html', clean: '/services', component: 'ServicesPage', title: "Services – N'kisi Global Consulting" },
  { key: 'projects', file: 'projects.html', clean: '/projects', component: 'ProjectsPage', title: "Projects – N'kisi Global Consulting" },
  { key: 'founder', file: 'founder.html', clean: '/founder', component: 'FounderPage', title: "Founder – N'kisi Global Consulting" },
  { key: 'clients', file: 'clients.html', clean: '/clients', component: 'ClientsPage', title: "Clients – N'kisi Global Consulting" },
  { key: 'contact', file: 'contact.html', clean: '/contact', component: 'ContactPage', title: "Contact Us – N'kisi Global Consulting" },
  { key: 'work', file: 'work-with-us.html', clean: '/work-with-us', component: 'WorkPage', title: "Work With Us – N'kisi Global Consulting" },
];

export const pathsFor = (p) => [...new Set([p.clean, '/' + p.file])];
export const ROUTE_PATHS = new Set(PAGES.flatMap(pathsFor));
