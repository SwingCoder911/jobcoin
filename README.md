# JobCoin App

This is an application meant to allow basic interaction and viewing of a user's "jobcoin" currency.

## Getting started

Pull this app down, 
```
npm install
```
Run the commands
```
webpack

npm run dev-server
```

## Notes

There are a lot of places for improvement here. This is just an MVP app. There's a lot of places where we could probably use more error handling, could use more visually impressive charting, etc.

I don't like having to pass lots of props down several layers of Components but it's there cause I didn't set myself up better from the start.

The CSS is written in my standard default method that doesn't follow any conventional standards. I use hyphen delineated rules, I try not to use any level deeper than 3 rules.

In a bigger application I would like to implement a data layer on the front end that caches responses.

