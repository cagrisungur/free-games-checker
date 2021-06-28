# About
This package designed for get free games from online stores. Also thanks to [@Auropic](https://github.com/AuroPick/AuroPick) , I was inspired while doing the project.

## Techs
- [node.js](https://nodejs.org/en/) - As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications
- [axios](https://axios-http.com/docs/intro) - Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.
- [typescript](https://nodejs.dev/learn/nodejs-with-typescript) - Basically, it's a superset of JavaScript that adds new capabilities to the language. Most notable addition are static type definitions, something that is not present in plain JavaScript.

## Includes
- [x] Epic Store

## Future Updates

- [ ] Steam
- [ ] Ubisoft

## Installation

``npm i free-games-checker``

## Usage 

```typescript
const { getEpicGames } from "free-games-checker"

getEpicGames("TR").then(res => {
    // TODO
}).catch(err => {
    // TODO
});
```

## Output

```json
[
  {
    "id": "8d50972d297f448cb3718d6e8094327a",
    "title": "Sonic Mania",
    "description": "Sonic Mania",
    "mainImage": "https://cdn1.epicgames.com/45e7cf3c49054f2fb20b673d9b0ae69e/offer/EGS_SonicMania_Lab42_S6-510x680-b83646998d6a711b6997e076e091c015.jpg",
    "urlSlug": "amethystgeneralaudience"
  },
  {
    "id": "58a2b650955f4920876afe86dfb563c1",
    "title": "Horizon Chase Turbo",
    "description": "Horizon Chase Turbo",
    "mainImage": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HorizonChaseTurbo_AQUIRIS_S2_1200x1600-7b51e6b8f8cf6ebd50f5fb77be96ad9d",
    "urlSlug": "lutetiumgeneralaudience"
  }
]

```

## Support

- The biggest support is a star for me.