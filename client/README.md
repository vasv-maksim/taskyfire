# Client
Клиентская часть приложения taskifire

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Структура директорий и файлов
Основа архитектуры приложения - модули.

Модули имеют единую структуру, выражающийся в ограниченном множестве допустимых имен директорий и файлов, их вложенностей. Используется конвенция наименования (см. структуру модуля).
В случае отсутствия в модуле файлов какой-то из сущностей, директория или файл не создается за ненадобностью.
Создания директорий с другими именами и вложенностью файлов или имен файлов с другими постфиксами нежелательны. В случае, если у компонента остутствует код разметки или стиля, файлы компонента все равно создаются, даже если они пустые.

### Структура модуля:
- Файл модуля *.module.ts
- Файл роутинга модуля *-routing.module.ts
- Директория services
  - *.service.ts
  - *.service.spec.ts
  - *.repository.ts (Stateless cервис, посылающий запросы на бек)
- Директория components (Файлы компонента в папке с именем компонента)
  - *.component.html
  - *.component.scss
  - *.component.ts
  - *.component.spec.ts
- Директория store (Файлы ngrx)
  - *.models.ts (Интерфейсы, типы)
  - *.enums.ts
  - *.action.ts
  - *.reducer.ts
  - *.selectors.ts
  - *.entity.ts
  - *.effects.ts
- Директория config (Конфиги, утилиты, прочее)
- Директории *-module.ts других модулей с аналогичной структурой.

### Описание модулей:

AppModule - корневой модуль;

ColumnsModule - модули сущностей;

SharedModule - модуль, который представляет из себя набор компонентов, сервисов и других модулей, которые могут быть использованы другими модулями. Импортирует и экспорирует служебные модули, такие как CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, SpinnerModule, GraphQLModule, DialogsModule и т.д. Перечисленные модули не нужно отдельно экспортировать, если уже был экспортирован SharedModule.

### Стайл-гайд:

В проекте используется ESLint, но дополнительно вводятся некоторые стилевые правила, которых желательно придерживаться:
- В импортах сначала перечисляются внешние библиотеки, затем (через вертикальный отступ) собственноручно созданные или сгенерированные файлы.
- Использовать ";"
- В качестве отступа во всех файлах использовать два пробела.
- Сначала перечисляются библиотеки Angular, затем - RxJS, NgRx, Materual Ui, потом импорты сторонних библиотек.
- Для всех полей и методов класса указываются модификаторы доступа (кроме хуков).
- В классе сначала следуют @Input, потом @Output, потом другие декораторы, затем свойства класса, потом конструктор, потом OnInit, затем остальные методы.
- Для полей, которые не должны меняться использовать readonly.
- Для методов всегда указывается тип возвращаемого значения, даже если это void (кроме хуков).
- Глупые компоненты заканчиваются на слово Dumb.
- Имена Observable переменных должны заканчиваться на "$"
- Имена файлов не должны содержать заглавных букв. В качестве разделителя использовать дефис (kebab-case).
- В коде компонента использовать camelCase.
- Не использовать нижние подчеркивания.
- В шаблоне использовать "", в классе ''. В приложении «».
- Имена методов желательно составлять из двух слов.
- Имена функций, осуществляюших подписку начинать с watch.
- Имена классов желательно составлять из двух-трёх слов.
- Префикс селекторов кастомных компонентов - tkr.
- Тело пустого конструктора, класса или объекта должно выглядеть как { }.
- Скобки функции без параметров должны выглядеть как ().
- Пустых хуков быть не должно.
- Для всех хуков жизненного цикла компонента использовать имплементацию.
- Места, над которые нужно доработать, помечать комментариием как // TODO Что-то сделать. Заглавными буквами, слитно. По TODO периодически будет проходить поиск по проекту.
- Значение из subscribe стараться называть next.
- Комментарии и текст коммитов писать на русском, если есть возможность.
- Параметры функции по умолчанию не должны содержать пробелов вокруг "="

### Установка зависимостей:
- из корня проекта перейти в директорию client. 
- Выполнить команду `npm install`

## Генерация клиентских типов:
Запустить сервер.

Из корня проекта перейти в директорию client. 

Установить зависимости клиента. 

Подтянуть с сервера GraphQl схему, выполнив команду `npm run schema`. 

Схему стоит подгружать после каждого изменения структур данных на беке. 

Желательно удалить старые файлы типов в папке "generated", если они есть. 

Сгенерировать типы командой `npm run codegen`.

Файлы типов появятся в папке client/src/codegen/generated

## Запуск клиента: 
Установить зависимости клиента. 

Cгенирировать клиентские типы. 

Из папки клиента выполнить команду: `npm run start`

## В браузере: 
Открыть страницу по адресу:   `http://localhost:4200/`

## Тесты
Запустить `npm run test`. 
