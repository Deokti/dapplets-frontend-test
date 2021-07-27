# Testing Only 

Тестовое задание на вакансию “[Frontend Developer](https://docs.google.com/document/d/1A67hVEF5fb6Uk1Y341PeyV9Yr1UUWLtANITxSzWVHHY/edit#heading=h.dn2s0spi21rh)” в компанию Dapplets Project.

Ссылка на работающее приложение: [Dapplets Frontend Test](https://dapplets-frontend-test.vercel.app/)

## Используемые технологии
- NextJS
- TypeScript
- Eslint / Stylelint
- SCSS (Grid / Flex)

## Что реализовано

- Адаптивная вёрстка для desktop и mobile устройств
- Состояние интерфейса сохраняется в LocalStorage *(installed/not installed)*
- Drag & drop для сортировки элементов списка
- Вывод ошибок, которые произошли при загрузке сообщения
- Вывод error/sucsess при создании новых тегов
- Панигация при скроллинге до конца страницы
- Оповещения, удачно ли прошло получение новых dapplets или произошла ошибка

## Что не рализовано
- Поиск *(на самом деле я его реализовал и даже написал функцию debounce, однако не знал как использовать её в этом приложении. По этой причине удалил поиск, оданко debounce осталась. Вдруг что-нибудь да придумаю.)*
- Фильтрация элементов по *Release Date*
- Сортировка по *Descending*