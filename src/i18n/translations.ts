interface Translation {
  nav: {
    home: string;
    skills: string;
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
    greeting: string;
    openToWork: string;
    experience: string;
    location: string;
    specialization: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
  };
  sections: {
    skills: string;
    projects: string;
    contact: string;
  };
}

export const translations: Record<string, Translation> = {
  en: {
    nav: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      greeting: "Hey! I'm Adrián Chávez",
      openToWork: "Open to Work",
      experience: "+1 year of experience as Full Stack Developer.",
      location: "From Monterrey, Nuevo León.",
      specialization: "I'm specialized in modern web development and applications unique.",
    },
    about: {
      title: "About",
      description1: "My name is Adrián Chávez, and I'm studying Multiplatform Software Development Engineering.",
      description2: "I'm passionate about both web and mobile application development. I've gained UX/UI design experience through self-learning, always focused on creating high-quality solutions in both design and functionality.",
    },
    sections: {
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      skills: "Habilidades",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
    },
    hero: {
      greeting: "¡Hola! Soy Adrián Chávez",
      openToWork: "Disponible para trabajar",
      experience: "+1 año de experiencia como Desarrollador Full Stack.",
      location: "De Monterrey, Nuevo León.",
      specialization: "Me especializo en desarrollo web moderno y aplicaciones únicas.",
    },
    about: {
      title: "Sobre mí",
      description1: "Mi nombre es Adrián Chávez, y estoy estudiando Ingeniería en Desarrollo de Software Multiplataforma.",
      description2: "Me apasiona el desarrollo de aplicaciones web y móviles. He adquirido experiencia en diseño UX/UI a través del autoaprendizaje, siempre enfocado en crear soluciones de alta calidad tanto en diseño como en funcionalidad.",
    },
    sections: {
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
  },
};
