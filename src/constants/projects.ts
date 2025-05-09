import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "RappiAliados",
    description:
      "RappiAliados es la plataforma de gestión de pedidos para restaurantes. Esta solución impacta a más de 80,000 usuarios activos en todo LATAM. Y representa la principal fuente de ingresos de la empresa.",
    image: "/assets/projects/aliados.png",
    tags: ["React", "Redux", "Typescript"],
    demoUrl: "https://aliados.rappi.com/"
  },
  {
    id: 2,
    title: "Mi Tienda by Rappi",
    description:
      "MiTienda es el lugar para incorporar, nutrir, retener y hacer crecer las tiendas más relevantes en LATAM con las herramientas para operar de una manera rápida y sin fricciones que permite escalar extremadamente rápido.",
    image: "/assets/projects/mitienda.png",
    tags: ["Angular", "TypeScript"],
    demoUrl: "https://mitienda.rappi.com.mx/"
  },
  {
    id: 3,
    title: "Conekta Panel",
    description:
      "Una herramienta para la ejecución fluida de operaciones. Un dispositivo estratégico que permite planeación a largo plazo. Y la única fuente de verdad que los clientes necesitan. Y usan durante el largo de su relación con Conekta.",
    image: "/assets/projects/conekta.png",
    tags: ["React", "Typescript", "GraphQL"],
    demoUrl:
      "https://identity.conekta.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dd6a9e571-1652-43b1-89e7-c081e5052acc%26redirect_uri%3Dhttps%253A%252F%252Fpanel.conekta.com%252Fsignin-oidc%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%2520status%2520cpanel-gateway-api%2520onboarding-gateway-api%26state%3D7432f2968fad4dccb0fc929569781721%26nonce%3Df49b0529a45f421ba31546daa9ff6da6"
  }
];
