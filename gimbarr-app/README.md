![Logo GIMBARR](https://github.com/jyuly12/gimbarr/blob/main/gimbarr-app/assets/LogoXL.png)

<hr>

This project uses NextJs together with prism for the creation of a complete web page, for the community that practices gimbarr

## Getting Started

First, run the development server:

```bash
npm run dev
```


## FILE TREE

This is the structure handled in the files

```bash
├── README.md
└── gimbarr-app
    ├── README.md
    ├── assets
    │   ├── LogoSM.png
    │   ├── LogoXL.png
    │   ├── UserDefault.png
    │   └── background.png
    ├── components
    │   ├── button.tsx
    │   ├── input.tsx
    │   ├── loginlayout.tsx
    │   ├── menuItem.tsx
    │   ├── navBar.tsx
    │   ├── posts
    │   │   ├── Index.tsx
    │   │   ├── create.tsx
    │   │   └── profile.tsx
    │   ├── settingsModal.tsx
    │   ├── slidebar.tsx
    │   ├── tournaments
    │   │   ├── Index.tsx
    │   │   ├── create.tsx
    │   │   └── profile.tsx
    │   └── user
    │       └── settings.tsx
    ├── lib
    │   ├── prisma.ts
    │   └── video.ts
    ├── next-env.d.ts
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── pages
    │   ├── _app.tsx
    │   ├── about.tsx
    │   ├── account-settings.tsx
    │   ├── api
    │   │   ├── auth
    │   │   │   └── [...nextauth].ts
    │   │   ├── post
    │   │   │   ├── [id].ts
    │   │   │   ├── create.ts
    │   │   │   └── update
    │   │   │       └── [id].ts
    │   │   ├── publish
    │   │   │   └── [id].ts
    │   │   ├── tournaments
    │   │   │   ├── [id].ts
    │   │   │   ├── create.ts
    │   │   │   └── update
    │   │   │       └── [id].ts
    │   │   └── user
    │   │       └── create.ts
    │   ├── auth
    │   │   ├── login.tsx
    │   │   └── register.tsx
    │   ├── events.tsx
    │   ├── index.tsx
    │   ├── myProfile.tsx
    │   ├── post
    │   │   └── [id].tsx
    │   └── profile
    │       └── create.tsx
    ├── postcss.config.js
    ├── prisma
    │   └── schema.prisma
    ├── public
    │   ├── favicon.ico
    │   ├── images
    │   │   └── login.avif
    │   └── vercel.svg
    ├── styles
    │   └── globals.css
    ├── tailwind.config.js
    ├── tsconfig.json
    └── yarn.lock
```
## Technologies 

- NextJS
- Typescript
- Tailwind CSS
- Prisma ORM

## Author

Julieth Gonzalez - Full Stack developer - [Github](https://github.com/jyuly12)
