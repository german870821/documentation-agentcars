export default defineAppConfig({
  ui: {
    colors: {
      primary: 'orange',
      neutral: 'zinc'
    }
  },
  header: {
    // Title to display if no logo
    title: 'Agentcars',
    // Logo configuration
    logo: {
      alt: 'Agentcars',
      // Light mode
      light: 'https://cdn.rentingcarz.com/images/agentcars/Logo-Agent-sin-slogan.png',
      // Dark mode
      dark: 'https://cdn.rentingcarz.com/images/agentcars/Logo-Agent-sin-slogan-blanco.png'
    }
  },
  socials: {
    //x: 'https://x.com/nuxt_js',
    //discord: 'https://discord.com/invite/ps2h6QT',
    //nuxt: 'https://nuxt.com',
    instagram: 'https://www.instagram.com/agentcarsoficial/',
    facebook: 'https://www.facebook.com/AgentCars',
  },
  // github: {
  //   url: 'https://github.com/nuxt-content/docus',
  //   branch: 'main',
  //   rootDir: 'docs'
  // }
})
