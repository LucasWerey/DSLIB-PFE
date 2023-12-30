# Components Library for End-of-study project

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

<br>

![GitHub package.json version](https://img.shields.io/github/package-json/v/LucasWerey/DSLIB-PFE?color=blue)

> This repository is used as a component library for the development of our end-of-study application at ECE PARIS. It was developed in Vue3 with Histoire.dev and vite. This facilitates communication between the UX/UI team and the front-end developer.

> > We use our own tailwind configuration based on our Design System

## Clone the repository

```bash
git clone https://github.com/LucasWerey/DSLIB-PFE.git
```

## Install the dependancies

```bash
yarn
```

## Run the Lib

```bash
yarn histoire dev
```

_You will be able to see all our components locally_

## Testing

![check-code-coverage](https://img.shields.io/badge/code--coverage-100%25-blue)

To ensure that our components work properly, unit tests with vitest are carried out each time a new component is added.

```bash
yarn test
```

## Create a new component

We have a script to simplify the creation of new component. <br>
_To update the script go in scripts folder and create-component.ts file_

```bash
yarn create:component
```

## Import the library to your main project

You will find the last version of the library here : https://github.com/LucasWerey/DSLIB-PFE/pkgs/npm/dslib-pfe

In your main project import the library :

```bash
yarn add @lucaswerey/dslib-pfe@0.0.34
```

![Alt text](image.png)
