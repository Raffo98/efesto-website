# TVA DIV Template

This template is based on [Vue CLI](https://cli.vuejs.org/)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

---

# Deploy methods

## Modes and Environment Variables

There are three different [Vue Modes](https://cli.vuejs.org/guide/mode-and-env.html) set:

- development: running with `npm run serve`
- staging: customized with --mode staging, running with `npm run build-staging`
- production: running with `npm run build`

Each mode will set its own environment variables associated by `.env` files placed in the root of the project root.

### Basic Variables

- `VUE_APP_PATH` the base url of the application, correspond on where it is served or hosted

## Continuous integration with Github Actions

Github Actions is set to deploy on tva staging server via this [FTP deploy Action](https://github.com/SamKirkland/FTP-Deploy-Action).  
Config file `./.github/workflows/main.yml`

#### Setup

1. Set the deploy path in the `.env.staging` file changing `VUE_APP_PATH` variable
1. Set the FTP password in the Github repository's `ftp_password` secret
1. Set which branch will be deployed in the config file (line 3. Default is `main`)

## Injection (page widget)

- In `main.js` remove router
- in `App.vue`:
  - Remove watcher on router
  - Remove `<router-view></router-view>` and replace it with the unique component of the project
- In `.github/workflows/main.yml` use script `build-staging-all`
- Use `$assetsBasePath` instead of `$baseUrl` for assets
- ~~In `public/index.html` add `lang="it" assets-base-path="/"` to `<div id="app"></div>`~~
- In `src/assets/scss/reset.scss` add parent `#app {...}` to not to affect the host page css
- In `vue.config.js` add

```js
css: {
  extract: false
},
productionSourceMap: false,
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    output: {
      filename: "js/app.[hash].js"
    }
  }
```

# Plugins

Some custom plugins already imported in `main.js`

## tvaMq

Javascript media queries.  
This plugin set a global variable called `$tvaMq` that changes according the viewport size and returns a string with the name of the device: `[mobile, tablet, desktop, large]`.
Customizable with some options:

```js
// tvaMq.js
// these are default values
app.use(tvaMq, {
  mobile: 720,
  tablet: 1024,
  desktop: 1280,
  large: Infinity,
});
```

You can change breakpoints in `App.vue` passing the object above to the function `useTvaMq`

**NB:** If one breakpoint is equal to another it will not be considered in the output.

## globalVariables

A set of variables set globally:

- `$retina`: Boolean, define if the screen has a retina display or not
- `$touchDevice`: Boolean, define if the device is touch or not
- `$baseUrl`: String, define the project base path
- `$assetsBasePath`: String, if present define a path useful for external assets (images, videos). To use when deploy with Injection

# Utilities

are stored under `src/utilities` folder

## Router

From [Official Vue Router](https://router.vuejs.org/)

## Language (i18n)

From [Vue i18n](https://kazupon.github.io/vue-i18n/)

### Language set

There are three ways to set the current language, listed in order of priority (condition in `App.vue`)

1. `route.params.lang` - default case
2. `process.env.VUE_APP_LANG` - in case of different builds for different languages
3. `document.querySelector("#app").getAttribute("lang")` - in case of script inclusion in page (like a page widget)

The usage of one of these methods depends on the type of build the project requires. See also Language switch and Edge case for more docs.

### Language switch

To manage the app language use the route parameter `:lang`.  
To switch language use `router.push({params: {lang: 'it'}})`.  
All locales config are set in `src/utilities/language.js`.

#### Edge case: different urls for different languages

Documented on Nuclino: [here](https://app.nuclino.com/The-Visual-Agency/DIV/Language-switch---edge-case-1a4685a0-d80b-4207-aeed-9c4d75c68143)

## Store (Pinia)

From [Pinia](https://pinia.vuejs.org/)

# Packages and Libraries

## Sass & sass-loader

Needed to handle scss. Node-sass is deprecated, so we will use sass package. For sass-loader, we will need to use an old version, if you need to add it in another Vue 2 project, just run:
`npm install --save-dev sass-loader@7.1.0`

## Icons

For icons we use the [svgicon library](https://mmf-fe.github.io/svgicon/en/). Icons are placed in the folder /assets/icons.
When adding an icon statically, you can use this syntax:

```
<icon data="@icon/<put icon name here>" />
```

When adding an icon dynamically, you'll have to import the icon from the assets/icons.js file, like so:

```
import { myIcon } from '@/assets/icons/icons.js';

<icon :data="myIcon" />
```

To easily add icons to the icons.js file, you can run the `npm run generate-icons` script.

## Run with Docker

To run the project with Docker, make sure you have Docker installed on your pc.
You can install Docker from [this link](https://docs.docker.com/engine/install/). See also [this guide](https://www.makeuseof.com/how-to-install-docker-mac/) for installing Docker on a Mac.

Then, build the Docker image by navigating into the root of this project (the folder that contains the Dockerfile) and running the following command in your console.
NB Change the name of 'tva-div-template' to whatever your project name is in the following commands!

```
docker build . -t tva:tva-div-template
```

Then, run the project in a Docker container by running the following command. For a breakdown of this command, see this article:
[https://mherman.org/blog/dockerizing-a-react-app/](https://mherman.org/blog/dockerizing-a-react-app/)

```
docker run -it --rm -v ${PWD}:/usr/app -v /usr/app/node_modules -p 8080:8080 -e CHOKIDAR_USEPOLLING=true tva:tva-div-template
```
