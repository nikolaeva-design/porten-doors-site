Пакет Porten Doors — экспорт из репозитория image-logix
============================================================

В архиве сохранена структура каталогов относительно корня Next.js-проекта.

Состав:
- src/components/porten/ — все секции лендинга
- src/constants/porten.ts — тексты и данные
- src/constants/site.ts — SITE_URL и пути OG-изображений
- src/app/page.tsx, layout.tsx, globals.css, sitemap.ts — оболочка приложения
- src/app/about/, projects/, thank-you/, privacy/, terms/ — страницы с Porten Chrome
- src/components/Button.tsx, LegalDocumentPage.tsx — зависимости porten-компонентов
- public/hero/slide-*.png — фоны hero-карусели
- public/growth-system-agency.webp, home-growth-system-editorial.jpeg — превью для OG (из constants/site.ts)
- package.json, tsconfig.json, next.config.ts, postcss.config.mjs, eslint.config.mjs — для сверки окружения

Часть иллюстраций в коде по-прежнему с Unsplash (URL в constants и компонентах).

Импорт в другой репозиторий: распакуйте и скопируйте файлы с сохранением путей, затем npm install и проверьте совпадение версий Next/React из package.json.
