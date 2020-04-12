# splatoon2.ink.js

**splatoon2.ink.js** is a package connected to the [splatoon2.ink](https://splatoon2.ink) api to get actual and next stages.

## Installation

Use [npm](https://npmjs.com) to install this package ([there](https://www.npmjs.com/package/splatoon2.ink.js)).
```bash
npm i --s splatoon2.ink.js
```

## Usage

For the moment, ther is only one function that allows you to receive the actual stages and the stages for the next rotation. Here is how to use it:

```javascript
const api = require('splatoon2.ink.js')
const Client = new api.Client("en"); // You can define your language between english and french (en or fr)

Client.getStages(function(res) {
  console.log(res.first)
  console.log(res.next)
})
```

This should return you the following elements :
```javascript
{
  ranked: {
    stage_a: {
      name: 'Stage a name',
      image: 'Stage a image url'
    },
    stage_b: {
      name: 'Stage b name',
      image: 'Stage b image url'
    },
    mode: 'Ranked mode'
  },
  league: {
    stage_a: {
      name: 'Stage a name',
      image: 'Stage a image url'
    },
    stage_b: {
      name: 'Stage b name',
      image: 'Stage b image url'
    },
    mode: 'League mode'
  },
  regular: {
    stage_a: {
      name: 'Stage a name',
      image: 'Stage a image url'
    },
    stage_b: {
      name: 'Stage a name',
      image: 'Stage a image url'
    },
    mode: 'Regular Battle'
  },
  starts_at: "Started/starts at timestamp",
  ends_at: "Ends at timestamp"
}
```

This is all... For the moment!

This readme will be updated when new things go to the api.

## **__Liscence__**

[ISC](https://en.wikipedia.org/wiki/ISC_license/)
