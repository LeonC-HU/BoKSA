# CMD Utrecht BoKSA prototype

Web application prototype for the **Body of Knowledge Skill and Attitudes (BoKSA)** at the Dutch bachelor program [Communication and Multimedia Design](https://www.hu.nl/voltijd-opleidingen/communication-and-multimedia-design) of the university of applied sciences in Utrecht.

### Goals:
- Create a user friendly overview of all items in the BoKSA with sufficient search and filter functionalities to be used by students and teaching staff. 
- Encourage communication and reach agreement about the required information architecture and (meta)data for the BoKSA by co-designing and creating this website.
- Build a proof-of-concept work-around to create a front-page within a [Canvas LMS](https://www.instructure.com/k12/products/canvas/canvas-lms) as an iFrame that redirects to underlying course pages. In a future version this might be extended to become a stand-alone full-stack website, or be integrated as a Canvas LMS plugin.

## Project Setup

This is a single page application (SPA) without server-side backend. The following web technologies are used:
- [Vite](https://vite.dev/) v5 build tool
- [Vue.js](https://vuejs.org/) v3 using composition API
- [PrimeVue](https://primevue.org/) v4 UI suite in Styled Mode
- [TailwindCSS](https://tailwindcss.com) v4.1
- [Typescript](https://www.typescriptlang.org/)
- [Visual Studio Code](https://code.visualstudio.com) editor with extensions for auto-renaming, debugging, formatting, linting, etc. 
- [GitHub](https://github.com/) with Copilot Pro
- [Npm.js](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/) modules and some other libraries for things like:
  - [Masonry grid](https://github.com/shershen08/vue-masonry)
  - Boilerplate content like [Lorem Ipsum](https://github.com/shershen08/vue-lorem-ipsum) text and [Holder.js](https://holderjs.com) for placeholder images

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Installation

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
