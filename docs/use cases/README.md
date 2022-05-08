# Модель прецедентів

Вбудовування зображень діаграм здійснюється з використанням сервісу [plantuml.com](https://plantuml.com/).

## Діаграма прецедентів

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml
    actor User
    actor Moderator

    usecase "<b>FTP_AUTH_1\nРеєстрація, авторизація" as FTP_AUTH_1

    usecase "<b>FTP_AUTH_2.1\nСтворення запиту Користувача\n на перехід до Модератора" as FTP_AUTH_2.1

    usecase "<b>FTP_AUTH_CHECK\nОбробка запиту на підвищення статусу" as FTP_AUTH_CHECK

    usecase "<b>FTP_DATA\nРобота з даними та пошук" as FTP_DATA

    usecase "<b>FTP_DATA_CHECK\nОбробка запиту на данні" as FTP_DATA_CHECK

    Moderator --u-|> User

    User -r-> FTP_DATA
    User -r-> FTP_AUTH_1
    User -r-> FTP_AUTH_2.1

    Moderator -r-> FTP_DATA_CHECK
    Moderator -r-> FTP_AUTH_CHECK
@enduml

</center>

## Схеми використання для користувача

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml
actor User

    usecase "<b>FTP_AUTH_1\nРеєстрація, авторизація" as FTP_AUTH_1
    usecase "<b>FTP_AUTH_1.1\nРеєстрація нового користувача" as FTP_AUTH_1.1
    usecase "<b>FTP_AUTH_1.2\nВхід користувача в Систему" as FTP_AUTH_1.2

    usecase "<b>FTP_AUTH_2.1\nСтворення запиту Користувача\n на перехід до Модератора" as FTP_AUTH_2.1

    usecase "<b>FTP_DATA\nРобота з даними та пошук" as FTP_DATA
    usecase "<b>FTP_DATA_1.1\nСтворення Запиту на додання даних" as FTP_DATA_1.1
    usecase "<b>FTP_DATA_1.2\nРедагування даних користувачем\n та створення відповідного запиту" as FTP_DATA_1.2
    usecase "<b>FTP_DATA_1.3\nВидалення даних власником" as FTP_DATA_1.3
    usecase "<b>FTP_DATA_2.1\nПошук даних за фільтрами" as FTP_DATA_2.1
    usecase "<b>FTP_DATA_2.1\nПошук даних за тегами" as FTP_DATA_2.2
    usecase "<b>FTP_DATA_3.1\nЗавантаження Файлу з даними" as FTP_DATA_3.1

    User -r-> FTP_DATA
    User -l-> FTP_AUTH_1
    User -u-> FTP_AUTH_2.1

    FTP_AUTH_1.1 .d.> FTP_AUTH_1 :extends
    FTP_AUTH_1.2 .u.> FTP_AUTH_1 :extends

    FTP_DATA_1.1 ..> FTP_DATA :extends
    FTP_DATA_1.2 .u.> FTP_DATA :extends
    FTP_DATA_1.3 .l.> FTP_DATA :extends
    FTP_DATA_2.1 ..> FTP_DATA :extends
    FTP_DATA_2.2 .u.> FTP_DATA :extends
    FTP_DATA_3.1 .u.> FTP_DATA :extends
@enduml

</center>

## Схеми використання для модератора

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml
    actor Moderator

    usecase "<b>FTP_AUTH_CHECK\nОбробка запиту на підвищення статусу" as FTP_AUTH_CHECK
    usecase "<b>FTP_AUTH_CHECK_1.1\nПідтвердження запиту про перехід\n Користувача до Модератора" as FTP_AUTH_CHECK_1.1
    usecase "<b>FTP_AUTH_CHECK_1.2\nЗапит про перехід Користувача\n до Модератора відхилено" as FTP_AUTH_CHECK_1.2

    usecase "<b>FTP_DATA_CHECK\nОбробка запиту на данні" as FTP_DATA_CHECK
    usecase "<b>FTP_DATA_CHECK_1.1\nОбробка запиту на додання даних" as FTP_DATA_CHECK_1.1
    usecase "<b>FTP_DATA_CHECK_1.2\nОбробка запиту на редагування" as FTP_DATA_CHECK_1.2

    Moderator -r-> FTP_DATA_CHECK
    Moderator -l-> FTP_AUTH_CHECK

    FTP_AUTH_CHECK_1.1 .d.> FTP_AUTH_CHECK :extends
    FTP_AUTH_CHECK_1.2 .u.> FTP_AUTH_CHECK :extends

    FTP_DATA_CHECK_1.1 .u.> FTP_DATA_CHECK :extends
    FTP_DATA_CHECK_1.2 .d.> FTP_DATA_CHECK :extends
@enduml

</center>

## Сценарії

***ID:*** FTP_AUTH_1.1

***НАЗВА:*** Реєстрація нового користувача

***УЧАСНИКИ:*** Користувач, Система

***ПЕРЕДУМОВИ:*** Була натиснута кнопка реєстрації

***РЕЗУЛЬТАТ:*** Користувач зареєстрований у Системі

***ВИКЛЮЧНІ СИТУАЦІЇ:***

FTP_AUTH_1.1_EX_1 - Були введені некоректні, або недопустимі значення полів<br>
FTP_AUTH_1.1_EX_2 - Користувач з електронною адресою вже зареєстрований або такої адреси не існує<br>
FTP_AUTH_1.1_EX_3 - Код аутентифікації введено не вірно

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
    start
    : Натиснув кнопку реєстрації;
    : Отримує сторінку реєстрації;
    : Вводить дані: електронна пошта, пароль, прізвище, ім'я;
    |Система|
    : Перевіряє правильність введених данних;
    note right #ffaaaa
    <b> Можливе винекнення
    <b> FTP_AUTH_1.1_EX_1,
    <b> FTP_AUTH_1.1_EX_2
    end note
    : Відправляє на вказану електронну адресу лист з паролем для повної аутентифікації;
    |Користувач|
    : Вводить пароль аутентифікації;
    |Система|
    : Перевіряє пароль;
    note right #ffaaaa
    <b> Можливе винекнення
    <b> FTP_AUTH_1.1_EX_3
    end note
    : Вносить користувача в базу;
    |Користувач|
    : Отримує повідомлення про успішну реєстрацію;
    stop;
@enduml

</center>  


***ID:*** FTP_AUTH_CHECK_1.2

***НАЗВА:*** Запит про перехід Користувача до Модератора відхилено

***УЧАСНИКИ:*** Користувач, Модератор, Система

***ПЕРЕДУМОВИ:*** Запит про перехід Користувача до Модератора потрапив у Систему

***РЕЗУЛЬТАТ:*** Користувач не може відправити запит про перехід до Модератора наступні 24 години

***ВИКЛЮЧНІ СИТУАЦІЇ:*** -

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Модератор|
    start
    : Починає взаємодію;
    |Система|
    : Інформує Модератора про запит Користувача;
    |Модератор|
    : Відхиляє перехід та записує причину;
    |Система|
    : Генерує повідомлення про відмову;
    : Інформує Користувача про відмову та її причину;
    : Система блокує відправлення запиту про перехід до Модератора наступні 24 години;
    |Модератор|
    : Закінчує взаємодію;
    stop;

@enduml

</center>  


***ID:*** FTP_DATA_1.1

***НАЗВА:*** Створення Запиту на додання даних

***УЧАСНИКИ:*** Користувач, Система

***ПЕРЕДУМОВИ:*** Користувач натиснув на кнопку для додання даних в Систему

***РЕЗУЛЬТАТ:*** Запит на додання даних створено

***ВИКЛЮЧНІ СИТУАЦІЇ:*** -

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
    start
    : Натиснув на кнопку для додання даних в Систему;
    |Система|
    : Відкриває форму для додавання даних;
    |Користувач|
    : Додає файли та (або) текстові дані;
    : Додає тег за потреби;
    : Натискає кнопку підтвердження;
    |Система|
    : Запит на додання даних створено;
    : Запит відправлено;
    stop;

@enduml

</center>  


***ID:*** FTP_DATA_1.2

***НАЗВА:*** Редагування даних користувачем та створення відповідного запиту

***УЧАСНИКИ:*** Користувач, Система

***ПЕРЕДУМОВИ:*** Користувач натиснув на кнопку редагування

***РЕЗУЛЬТАТ:*** Запит на збереження змін створено та відправлено в систему

***ВИКЛЮЧНІ СИТУАЦІЇ:*** -

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
    start
    : Натиснув на кнопку редагування;
    |Система|
    : Створює форму редагування даних;
    |Користувач|
    : Редагує файли;
    : Натискає кнопку підтвердження;
    |Система|
    : Запит на збереження змін створено;
    : Запит відправлено;
    stop;

@enduml

</center>
