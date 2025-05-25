# Telegram Bot Vercel Boilerplate

Telegram Bot Vercel Boilerplate based on Node.js and [grammY](https://grammy.dev) framework.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vdistortion/telegram-bot-vercel-boilerplate)

## Before you start

Fill in all necessary values.

```dotenv
TELEGRAM_BOT_TOKEN="<YOUR_BOT_API_TOKEN>"
```

## Start your local server

```sh
npm ci
npm run dev
```

## Production

You can fork this template and do the necessary changes you need. Then you when are done with your changes simply goto [vercel git import](https://vercel.com/import/git).

Import the `.env` file in the settings: `Settings => Environment Variables`.

The webhook is usually set automatically. If not, open the following URL to trigger manual setup: `https://YOUR_DOMAIN.vercel.app/`.

Feel free to create PR!

## Links

- [@BotFather](https://t.me/BotFather)
- [Public APIs](https://github.com/public-apis/public-apis)
