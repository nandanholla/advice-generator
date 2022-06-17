# Advice Generator

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## The Challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

## Screenshots

![Desktop Screenshot](/assets/desktop.png "Desktop Screenshot")

![Active State](/assets/active.png "Active state")

![Mobile Screenshot](/assets/mobile.png "Mobile Screenshot")

## Built with

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles

## Run Locally

Clone the project

```bash
  git clone https://github.com/nandanholla/advice-generator.git
```

Go to the project directory

```bash
  cd project-folder-name
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px
## API Reference

### [Advice Slip JSON API](https://api.adviceslip.com/)

#### Get random advice

```http
  GET /api/advice
```

| HTTP Method | GET   |
| :-------- | :------- | 
| URL | [https://api.adviceslip.com/advice](https://api.adviceslip.com/advice) |
| Description | Returns a random advice slip as a [slip object](https://api.adviceslip.com/#object-slip). |

Note: _Advice is cached for 2 seconds. Any repeat-request within 2 seconds will return the same piece of advice._

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Light Cyan | ![#cee3e9](https://via.placeholder.com/10/cee3e9?text=+) #cee3e9 |
| Neon Green | ![#52ffa8](https://via.placeholder.com/10/52ffa8?text=+) #52ffa8 |
| Dark Grayish Blue | ![#323a49](https://via.placeholder.com/10/323a49?text=+) #323a49 |
| Dark Blue | ![#1f2632](https://via.placeholder.com/10/1f2632?text=+) #1f2632 |

## Author

- Frontend Mentor - [@nandanholla](https://www.frontendmentor.io/profile/nandanholla)
- Twitter - [@nandanholla](https://www.twitter.com/nandanholla)
