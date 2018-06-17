# Dumb Stencil

[![Build Status](https://travis-ci.org/jagreehal/dumb-stencil.svg?branch=master)](https://travis-ci.org/jagreehal/dumb-stencil)

Web component version of Brad Frosts' [Dumb React](https://github.com/bradfrost/dumb-react) using [Stencil](https://stenciljs.com/).

See his [blog post](http://bradfrost.com/blog/post/dumb-react/) for more info.

## Differences

Typescript as it's used by Stencil and PostCSS because who's got time for browser inconsistencies!

## Stencil w/ Storybook Starter

This repo uses the HTML fetaures of Storybook v4.

## Using This Repo

- `git clone https://github.com/jagreehal/dumb-stencil.git && cd dumb-stencil`
- `npm install`
- `npm start` will start the application and run storybook.

## Building components

Start building in the `src/components` folder with this folder structure

```js
- ComponentName
  - component-name.css
  - component-name.stories.tsx
  - component-name.tsx
  - component-name.spec.tsx
```
