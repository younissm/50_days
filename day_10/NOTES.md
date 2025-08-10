# Day 10

## What I created

A page that get a dad joke from an online api

## Screenshots

![Joke](./screenshots/full1.webp)

## What I learned

- When you call a fetch api that automatically defaults to html data you need to set the header to "application/json"
  collapsed:: true

  - ```javascript
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    fetch("https://icanhazdadjoke.com", config)
      .then((res) => res.json())
      .then((data) => {
        jokeEl.innerHTML = data.joke;
      });
    ```
