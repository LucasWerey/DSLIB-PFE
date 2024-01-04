# Components Library for End-of-study project

[![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[![GitHub package.json npm version](https://img.shields.io/github/package-json/v/LucasWerey/DSLIB-PFE?color=58A4B0&label=npm&style=for-the-badge&logo=NPM)](https://github.com/LucasWerey/DSLIB-PFE/pkgs/npm/dslib-pfe)
![Coverage](./badges/coverage.svg)
[![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=dslibpfe&style=for-the-badge&logo=vercel)](https://dslibpfe.vercel.app/)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/LucasWerey/DSLIB-PFE/npm-publish-github-packages.yml?style=for-the-badge&label=Publish&logo=github)

> This repository is used as a component library for the development of our end-of-study application at ECE PARIS. It was developed in Vue3 with Histoire.dev and vite. This facilitates communication between the UX/UI team and the front-end developer.

> > We use our own tailwind configuration based on our Design System

You can find our components on vercel : https://dslibpfe.vercel.app/

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
