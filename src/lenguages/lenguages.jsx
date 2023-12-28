import { v4 as uuidv4 } from "uuid";
import { Images } from "../images/Images";

export const languages = {
  es: {
    current: "es",
    navbar: {
      about: "Sobre mi",
      projects: "Proyectos",
      contact: "Contáctame",
    },
    titleTabs: {
      about: "Sobre mi",
      experience: "Experiencia",
      education: "Educación",
      all: "Todos",
      web: "web Dev",
      design: "Diseño",
    },
    titleButton: {
      download: "Descargar CV",
      contact: "Hablemos",
    },
    whatIDo: "Diseñadora | Frontend | UX - UI",
    titleSkills: "Habilidades",
    writeMe:"Escribeme ",
    author: "Diseñado y construido por ",
    about:
      "¡Hola! Me llamo Carolina Uribe Botero, soy diseñadora y desarrolladora frontend Colombiana, tengo una gran pasión por los efectos de interfaz de usuario, la creación de experiencia de usuario intuitivo y dinámicas. Me destaco por ser una persona organizada, solucionadora de problemas, con gran atención al detalle y apasionada por el estudio. Estudiante en desarrollo de software y aéreas a fines involucrados directamente en frontend, brindando un mejor conocimiento en el área del desarrollo con mi experiencia en el diseño.",
    experience: [
      {
        id: uuidv4(),
        date: "Julio 2020 - Diciembre 2021",
        institution: "Ana Arredondo | Servisoft (Marca Desarrollo)",
        rol: "Diseñadora",
        detail:
          "Desarrollo de colecciones, Investigación de tendencias,desarrollar la marca segun el requerimiento solicitado segimiento de muestras, costeo, fichas.",
      },

      {
        id: uuidv4(),
        date: "Agosto 2015 - Junio 2019",
        institution: "Cueros Velez",
        rol: "Analista Ingenieria",
        detail:
          "Desarrollo inicial para el area de metodos y tiempos,sobre-consumo de materiales,desarrollo de instructivos,costeo,creacion de producto inicial al sistema, valoracion de materiales.",
      },

      {
        id: uuidv4(),
        date: "Enero 2013 - Junio 2015",
        institution: "Uniformes Y Suministros",
        rol: "Diseñadora",
        detail:
          "Desarrollo del producto desde el diseño grafico, visual,asesoria; patronaje, trazo, consumo, solicitud de material,analisis tendencia, solicitud insumos para confección,toma de tiempos, fichas tecnicas.",
      },
    ],
    education: [
      {
        id: uuidv4(),
        date: "Actualmente - 2024",
        institution: "Sena",
        rol: "Tecnologia En Analisis Y Desarrollo De Software",
        urlInstitution: "https://www.sena.edu.co/es-co/Paginas/default.aspx",
      },

      {
        id: uuidv4(),
        date: "320h - 2023",
        institution: "ITM",
        rol: "React Js",
        urlInstitution: "https://www.itm.edu.co/",
      },

      {
        id: uuidv4(),
        date: "15h - 2023",
        institution: "Linkeding Learning",
        rol: "Metodologias Agiles Para Programación",
        urlInstitution: "https://www.linkedin.com/learning/",
      },

      {
        id: uuidv4(),
        date: "240h - 2022",
        institution: "Politecnico Andino",
        rol: "Curso Desarrollo Frontend",
        urlInstitution: "https://www.poliandino.edu.co/",
      },

      {
        id: uuidv4(),
        date: "230h - 2022",
        institution: "UPB",
        rol: "Curso Programación Web",
        urlInstitution: "https://www.upb.edu.co/es/home",
      },

      {
        id: uuidv4(),
        date: "2011-2013",
        institution: "Area Andina",
        rol: "Profesional Diseño De Modas",
        urlInstitution: "https://www.areandina.edu.co/",
      },
    ],
    projects: [
      {
        id: uuidv4(),
        nameProjects: "App Clima",
        description:
          "Aplicacion para revisar el estado del clima actual segun la ciudad ingresada",
        technology: [
          "Figma",
          "React",
          "Material UI",
          "Api OpenWeather",
          "Versel",
        ],
        imgProjects: [Images.imgAppClima],
        imgScreens: [Images.screenAppClima],
        imgLogo: [Images.logoAppClima],
        colors: ["#6C757D", "#FFFFFF"],
        typography: ["Lato"],
        category: ["all", "web", "design"],
        urlOriginalWeb: null,
        urlDemo: "https://app-clima-react-dusky.vercel.app/",
        urlFigma:
          "https://www.figma.com/proto/Qo2XYFY9rFV8cC3kMgjBIL/API_Clima?type=design&node-id=1-2&t=EJTaCqOG7pLDm7yI-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2",
        urlGitHub: "https://github.com/caro1017/app-clima-react",
      },

      {
        id: uuidv4(),
        nameProjects: "App Nasa",
        description:
          "Aplicacion para generar la informacion directa de la nasa (Imagen satelital | Autor | Descripcion) Segun la fecha ingresada",
        technology: ["Figma", "React", "Material UI", "Api Nasa", "Versel"],
        imgProjects: [Images.imgAppNasa],
        imgScreens: [Images.screenAppNasa],
        imgLogo: [Images.logoAppNasa],
        colors: ["#EAEDF0", "#1F2B43"],
        typography: ["Inter"],
        category: ["all", "web", "design"],
        urlOriginalWeb: null,
        urlDemo: "https://app-nasa-react.vercel.app/",
        urlFigma:
          "https://www.figma.com/proto/9XETHLfSGMgKOozoMJ75tn/API-Nasa?type=design&node-id=129-139&t=4lXRdHETqDmsv8hE-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=129%3A139",
        urlGitHub: "https://github.com/caro1017/app-nasa-react",
      },

      {
        id: uuidv4(),
        nameProjects: "Bendita tu eres",
        description: "Pagina web de ropa y accesorios tipo Ecomerece sencillo ",
        technology: ["Figma", "React", "Materialize", "Versel"],
        imgProjects: [Images.imgBenditaTuEres],
        imgScreens: [Images.screenBenditaTuEres],
        imgLogo: [Images.logoBenditaTuEres],
        colors: ["#000000", "#97989A", "#F3C1C4", "#FFFFFF"],
        typography: ["Inter"],
        category: ["all", "web", "design"],
        urlOriginalWeb: null,
        urlDemo: "https://bendita-tu-eres-react.vercel.app/",
        urlFigma:
          "https://www.figma.com/proto/EeG5KUvB9tCrkMm4D8NdE9/Bendita_tu_eres?type=design&node-id=253-122&t=Qo5k7zLdW8okp6CL-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=253%3A122",
        urlGitHub: "https://github.com/caro1017/bendita-tu-eres-react",
      },

      {
        id: uuidv4(),
        nameProjects: "Harley Davinson Landing Page",
        description: "Landing Page inspirada en la marca Harley-Davinson ",
        technology: ["Figma", "Html", "Css", "JavaScript", "Versel"],
        imgProjects: [Images.imgHarleyDavinson],
        imgScreens: [Images.screenHarleyDavinson],
        imgLogo: [Images.logoHarleyDavinson],
        colors: [
          "#000000",
          "#939598",
          "#D1D2D4",
          "#FFFFFF",
          "#ED9035",
          "#B75F07",
        ],
        typography: ["Encode Sans"],
        category: ["all", "web", "design"],
        urlOriginalWeb: null,
        urlDemo: "https://harley-davinson-landing-page.vercel.app/",
        urlFigma:
          "https://www.figma.com/proto/YhbyCXghriXeS3AsUFBLGT/Landin-Page-Harley-Davinson?type=design&node-id=2-68&t=Qo5k7zLdW8okp6CL-0&scaling=scale-down&page-id=2%3A67&starting-point-node-id=2%3A68",
        urlGitHub: "https://github.com/caro1017/harley-davinson-landing-page",
      },

      {
        id: uuidv4(),
        nameProjects: "La Fortaleza",
        description: "Pagina web de EcoHotel",
        technology: ["Figma", "React", "Material UI", "Versel"],
        imgProjects: [Images.imgLaFortaleza],
        imgScreens: [Images.screenLaFortaleza],
        imgLogo: [Images.logoLaFortaleza],
        colors: ["#D1D2D4", "#FF5D02", "#057F2A", "#26362B", "#1C2723"],
        typography: ["Poppins"],
        category: ["all", "web", "design"],
        urlOriginalWeb: null,
        urlDemo: "https://la-fortaleza-react.vercel.app/",
        urlFigma:
          "https://www.figma.com/proto/2RJn6BmS00D7JBJnthSYs5/La_Fortaleza?type=design&node-id=103-88&t=Qo5k7zLdW8okp6CL-0&scaling=scale-down&page-id=103%3A2&starting-point-node-id=103%3A88",
        urlGitHub: "https://github.com/caro1017/la-fortaleza-react",
      },

      {
        id: uuidv4(),
        nameProjects: "Plataforma Training",
        description:
          "Plataforma de Gestión de Ejercicios y Rutinas (First Movile)",
        technology: ["Figma", "React", "Material UI", "Versel"],
        imgProjects: [Images.imgTraning],
        imgScreens: [Images.screenTraning],
        imgLogo: [Images.logoTraning],
        colors: ["#010141", "#F50739", "#F5F7F9"],
        typography: ["Encode Sans"],
        category: ["all", "web", "design"],
        urlOriginalWeb: null,
        urlDemo: "https://platform-training.vercel.app/",
        urlFigma:
          "https://www.figma.com/proto/iaDDH8T5tzj08DbPMtYxsG/Plataforma-Training?type=design&node-id=338-1155&t=Qo5k7zLdW8okp6CL-0&scaling=scale-down&page-id=136%3A1501&starting-point-node-id=338%3A1155",
        urlGitHub: "https://github.com/caro1017/platform-training",
      },

      {
        id: uuidv4(),
        nameProjects: "Rediseño 2VM ",
        description: "Rediseño primer scroll web 2VM. Agencia de Marketing",
        technology: ["Figma"],
        imgProjects: [Images.img2VM],
        imgScreens: [Images.screen2VM],
        imgLogo: [Images.logo2VM],
        colors: ["#000000", "#FFFFFF", "#0300E4"],
        typography: ["Montserrat"],
        category: ["all", "design"],
        urlOriginalWeb: "https://dosvecesmarketing.com/",
        urlDemo: null,
        urlFigma:
          "https://www.figma.com/proto/HSbnJw6dc4JhB9yY4O2efW/Prueba-Rapida---Redise%C3%B1o-Mimusa?type=design&node-id=4-74&t=JozEUwEAzP3dQOHf-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4%3A74",
        urlGitHub: null,
      },

      {
        id: uuidv4(),
        nameProjects: "Rediseño Grupo Asis",
        description:
          "Rediseño primer scroll web Grupo Asis. Editorial Marketing",
        technology: ["Figma"],
        imgProjects: [Images.imgGrupoAsis],
        imgScreens: [Images.screenGrupoAsis],
        imgLogo: [Images.logoGrupoAsis],
        colors: ["#000000", "#FFFFFF", "#9A9C9E", "#B20321"],
        typography: ["Raleway"],
        category: ["all", "design"],
        urlOriginalWeb: "https://www.grupoasis.com/en/home/",
        urlDemo: null,
        urlFigma:
          "https://www.figma.com/proto/HSbnJw6dc4JhB9yY4O2efW/Prueba-Rapida---Redise%C3%B1o-Mimusa?type=design&node-id=144-53&t=JozEUwEAzP3dQOHf-0&scaling=scale-down&page-id=144%3A4&starting-point-node-id=144%3A53",
        urlGitHub: null,
      },

      {
        id: uuidv4(),
        nameProjects: "Rediseño Elogia",
        description: "Rediseño primer scroll web Elogia. Agencia Marketing",
        technology: ["Figma"],
        imgProjects: [Images.imgElogia],
        imgScreens: [Images.screenElogia],
        imgLogo: [Images.logoElogia],
        colors: ["#ABADAF", "#FFFFFF", "#C73E32"],
        typography: ["Raleway"],
        category: ["all", "design"],
        urlOriginalWeb: "https://elogia.net/",
        urlDemo: null,
        urlFigma:
          "https://www.figma.com/proto/HSbnJw6dc4JhB9yY4O2efW/Prueba-Rapida---Redise%C3%B1o-Mimusa?type=design&node-id=144-306&t=JozEUwEAzP3dQOHf-0&scaling=scale-down&page-id=144%3A100&starting-point-node-id=144%3A306",
        urlGitHub: null,
      },
    ],
  },
  en: {
    current: "en",
    navbar: {
      about: "About me",
      projects: "Projects",
      contact: "Contact me",
    },
    titleTabs: {
      about: "About me",
      experience: "Experience",
      education: "Education",
      all: "All",
      web: "web Dev",
      design: "Design",
    },
    titleButton: {
      download: "Download CV",
      contact: "Let's talk",
    },
    whatIDo: "Designer | Frontend | UX - UI",
    titleSkills: "Skills",
    writeMe:"Write Me",
    author: "Designed & Built by ",
    about:
      "Hello! My name is Carolina Uribe Botero, I am a Colombian frontend designer and developer, I have a great passion for user interface effects, creating intuitive and dynamic user experiences. I stand out for being an organized person, a problem solver, with great attention to detail and passionate about studying. Student in software development and related areas directly involved in frontend, providing better knowledge in the area of development with my experience in design.",
    experience: [
      {
        id: uuidv4(),
        date: "July 2020 - December 2021",
        institution: "Ana Arredondo | Servisoft (Brand Development)",
        rol: "Designer",
        detail:
          "Collection development, trend research, develop the brand according to the requested requirement, sample tracking, costing, files.",
      },

      {
        id: uuidv4(),
        date: "August 2015 - June 2019",
        institution: "Cueros Velez",
        rol: "Engineering Analyst",
        detail:
          "Initial development for the area of methods and times, over-consumption of materials, development of instructions, costing, creation of initial product to the system, evaluation of materials.",
      },

      {
        id: uuidv4(),
        date: "January 2013 - June 2015",
        institution: "Uniformes Y Suministros",
        rol: "Designer",
        detail:
          "Product development from graphic, visual design, consulting; pattern making, outline, consumption, material request, trend analysis, request for manufacturing inputs, timing, technical sheets.",
      },
    ],
    education: [
      {
        id: uuidv4(),
        date: "Currently - 2024",
        institution: "Sena",
        rol: "Technology in Software Analysis and Development",
        urlInstitution: "https://www.sena.edu.co/es-co/Paginas/default.aspx",
      },

      {
        id: uuidv4(),
        date: "320h - 2023",
        institution: "ITM",
        rol: "React Js",
        urlInstitution: "https://www.itm.edu.co/",
      },

      {
        id: uuidv4(),
        date: "15h - 2023",
        institution: "Linkeding Learning",
        rol: "Agile Methodologies for Programming",
        urlInstitution: "https://www.linkedin.com/learning/",
      },

      {
        id: uuidv4(),
        date: "240h - 2022",
        institution: "Politecnico Andino",
        rol: "Frontend Development Course",
        urlInstitution: "https://www.poliandino.edu.co/",
      },

      {
        id: uuidv4(),
        date: "230h - 2022",
        institution: "UPB",
        rol: "Web Programming Course",
        urlInstitution: "https://www.upb.edu.co/es/home",
      },

      {
        id: uuidv4(),
        date: "2011-2013",
        institution: "Area Andina",
        rol: "Professional Fashion Design",
        urlInstitution: "https://www.areandina.edu.co/",
      },
    ],
    projects: [
      {
        id: uuidv4(),
        nameProjects: "Clima App",
        description:
          "Application to check the current weather status in the entered city",
        technology: [
          "Figma",
          "React",
          "Material UI",
          "Api OpenWeather",
          "Versel",
        ],
        imgProjects: [Images.imgAppClima],
        imgScreens: [Images.screenAppClima],
        imgLogo: [Images.logoAppClima],
        colors: ["#6C757D", "#FFFFFF"],
        typography: ["Lato"],
        category: ["all", "web", " design"],
        urlOriginalWeb: null,
        urlDemo: "https://app-clima-react-dusky.vercel.app/",
        urlFigma:
          "https://www.figma.com/proto/Qo2XYFY9rFV8cC3kMgjBIL/API_Clima?type=design&node-id=1-2&t=EJTaCqOG7pLDm7yI-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2",
        urlGitHub: "https://github.com/caro1017/app-clima-react",
      },

      {
        id: uuidv4(),
        nameProjects: "Nasa App",
        description:
          "Application to generate direct information from NASA (Satellite image | Author | Description) According to the date entered",
        technology: ["Figma", "React", "Material UI", "Api Nasa", "Versel"],
        imgProjects: [Images.imgAppNasa],
        imgScreens: [Images.screenAppNasa],
        imgLogo: [Images.logoAppNasa],
        colors: ["#EAEDF0", "#1F2B43"],
        typography: ["Inter"],
        category: ["all", "web", " design"],
        urlOriginalWeb: null,
        urlDemo: "https://app-nasa-react.vercel.app/",
        urlFigma:
          "https://www.figma.com/proto/9XETHLfSGMgKOozoMJ75tn/API-Nasa?type=design&node-id=129-139&t=4lXRdHETqDmsv8hE-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=129%3A139",
        urlGitHub: "https://github.com/caro1017/app-nasa-react",
      },

      {
        id: uuidv4(),
        nameProjects: "Bendita tu eres",
        description: "Simple Ecomerece-type clothing and accessories website",
        technology: ["Figma", "React", "Materialize", "Versel"],
        imgProjects: [Images.imgBenditaTuEres],
        imgScreens: [Images.screenBenditaTuEres],
        imgLogo: [Images.logoBenditaTuEres],
        colors: ["#000000", "#97989A", "#F3C1C4", "#FFFFFF"],
        typography: ["Inter"],
        category: ["all", "web", " design"],
        urlOriginalWeb: null,
        urlDemo: "https://bendita-tu-eres-react.vercel.app/",
        urlFigma:
          "https://www.figma.com/proto/EeG5KUvB9tCrkMm4D8NdE9/Bendita_tu_eres?type=design&node-id=253-122&t=Qo5k7zLdW8okp6CL-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=253%3A122",
        urlGitHub: "https://github.com/caro1017/bendita-tu-eres-react",
      },

      {
        id: uuidv4(),
        nameProjects: "Harley Davinson Landing Page",
        description: "Landing Page inspired by the Harley-Davidson brand",
        technology: ["Figma", "Html", "Css", "JavaScript", "Versel"],
        imgProjects: [Images.imgHarleyDavinson],
        imgScreens: [Images.screenHarleyDavinson],
        imgLogo: [Images.logoHarleyDavinson],
        colors: [
          "#000000",
          "#939598",
          "#D1D2D4",
          "#FFFFFF",
          "#ED9035",
          "#B75F07",
        ],
        typography: ["Encode Sans"],
        category: ["all", "web", " design"],
        urlOriginalWeb: null,
        urlDemo: "https://harley-davinson-landing-page.vercel.app/",
        urlFigma:
          "https://www.figma.com/proto/YhbyCXghriXeS3AsUFBLGT/Landin-Page-Harley-Davinson?type=design&node-id=2-68&t=Qo5k7zLdW8okp6CL-0&scaling=scale-down&page-id=2%3A67&starting-point-node-id=2%3A68",
        urlGitHub: "https://github.com/caro1017/harley-davinson-landing-page",
      },

      {
        id: uuidv4(),
        nameProjects: "La Fortaleza",
        description: "EcoHotel website",
        technology: ["Figma", "React", "Material UI", "Versel"],
        imgProjects: [Images.imgLaFortaleza],
        imgScreens: [Images.screenLaFortaleza],
        imgLogo: [Images.logoLaFortaleza],
        colors: ["#D1D2D4", "#FF5D02", "#057F2A", "#26362B", "#1C2723"],
        typography: ["Poppins"],
        category: ["all", "web", " design"],
        urlOriginalWeb: null,
        urlDemo: "https://la-fortaleza-react.vercel.app/",
        urlFigma:
          "https://www.figma.com/proto/2RJn6BmS00D7JBJnthSYs5/La_Fortaleza?type=design&node-id=103-88&t=Qo5k7zLdW8okp6CL-0&scaling=scale-down&page-id=103%3A2&starting-point-node-id=103%3A88",
        urlGitHub: "https://github.com/caro1017/la-fortaleza-react",
      },

      {
        id: uuidv4(),
        nameProjects: "Training Platform",
        description: "Exercise and Routine Management Platform (First Mobile)",
        technology: ["Figma", "React", "Material UI", "Versel"],
        imgProjects: [Images.imgTraning],
        imgScreens: [Images.screenTraning],
        imgLogo: [Images.logoTraning],
        colors: ["#010141", "#F50739", "#F5F7F9"],
        typography: ["Encode Sans"],
        category: ["all", "web", " design"],
        urlOriginalWeb: null,
        urlDemo: "https://platform-training.vercel.app/",
        urlFigma:
          "https://www.figma.com/proto/iaDDH8T5tzj08DbPMtYxsG/Plataforma-Training?type=design&node-id=338-1155&t=Qo5k7zLdW8okp6CL-0&scaling=scale-down&page-id=136%3A1501&starting-point-node-id=338%3A1155",
        urlGitHub: "https://github.com/caro1017/platform-training",
      },

      {
        id: uuidv4(),
        nameProjects: "2VM Redesign",
        description: "Redesign of first 2VM web scroll. Marketing Agency",
        technology: ["Figma"],
        imgProjects: [Images.img2VM],
        imgScreens: [Images.screen2VM],
        imgLogo: [Images.logo2VM],
        colors: ["#000000", "#FFFFFF", "#0300E4"],
        typography: ["Montserrat"],
        category: ["all", " design"],
        urlOriginalWeb: "https://dosvecesmarketing.com/",
        urlDemo: null,
        urlFigma:
          "https://www.figma.com/proto/HSbnJw6dc4JhB9yY4O2efW/Prueba-Rapida---Redise%C3%B1o-Mimusa?type=design&node-id=4-74&t=JozEUwEAzP3dQOHf-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4%3A74",
        urlGitHub: null,
      },

      {
        id: uuidv4(),
        nameProjects: "Asis Group Redesign",
        description:
          "Redesign of first Grupo Asis web scroll. Editorial Marketing",
        technology: ["Figma"],
        imgProjects: [Images.imgGrupoAsis],
        imgScreens: [Images.screenGrupoAsis],
        imgLogo: [Images.logoGrupoAsis],
        colors: ["#000000", "#FFFFFF", "#9A9C9E", "#B20321"],
        typography: ["Raleway"],
        category: ["all", " design"],
        urlOriginalWeb: "https://www.grupoasis.com/en/home/",
        urlDemo: null,
        urlFigma:
          "https://www.figma.com/proto/HSbnJw6dc4JhB9yY4O2efW/Prueba-Rapida---Redise%C3%B1o-Mimusa?type=design&node-id=144-53&t=JozEUwEAzP3dQOHf-0&scaling=scale-down&page-id=144%3A4&starting-point-node-id=144%3A53",
        urlGitHub: null,
      },

      {
        id: uuidv4(),
        nameProjects: "Elogia Redesign",
        description: "First web scroll redesign Elogia. Marketing Agency",
        technology: ["Figma"],
        imgProjects: [Images.imgElogia],
        imgScreens: [Images.screenElogia],
        imgLogo: [Images.logoElogia],
        colors: ["#ABADAF", "#FFFFFF", "#C73E32"],
        typography: ["Raleway"],
        category: ["all", " design"],
        urlOriginalWeb: "https://elogia.net/",
        urlDemo: null,
        urlFigma:
          "https://www.figma.com/proto/HSbnJw6dc4JhB9yY4O2efW/Prueba-Rapida---Redise%C3%B1o-Mimusa?type=design&node-id=144-306&t=JozEUwEAzP3dQOHf-0&scaling=scale-down&page-id=144%3A100&starting-point-node-id=144%3A306",
        urlGitHub: null,
      },
    ],
  },
};
