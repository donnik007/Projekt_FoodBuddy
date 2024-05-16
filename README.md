# FoodBuddy
App for recipes advisory and management

[Figma Link](https://www.figma.com/file/lBqcVxyfyfynsHZfcukzl9/FoodBuddy?type=design&node-id=0%3A1&mode=design&t=PFB2xc1yoWT3ZOj8-1)

Jest to praktyczna aplikacja kulinarna, która umożliwia przeglądanie, wyszukiwanie i zarządzanie ulubionymi przepisami. Dzięki przejrzystemu interfejsowi użytkownik może łatwo znaleźć inspirację na posiłki, dodawać własne przepisy oraz organizować ulubione dania.

Funkcjonalności:

1) Przeglądanie przepisów: Użytkownik może przeglądać listę dostępnych przepisów w formie kafelków. Każdy kafelek będzie zawierał miniaturkę zdjęcia dania, nazwę dania oraz krótki opis.

2) Dodawanie nowych przepisów: Zalogowani użytkownicy będą mogli dodawać nowe przepisy do aplikacji. Formularz dodawania przepisu będzie zawierał pola na nazwę, opis, listę składników, instrukcje oraz zdjęcie dania.

3) Edycja dodanych przez użytkownika przepisów

4) Wyszukiwanie przepisów: Możliwość szybkiego wyszukiwania przepisów po nazwie dania lub składnikach.

5) Responsywny interfejs: Aplikacja będzie responsywna, dostosowując się do różnych rozmiarów ekranów, co zapewni wygodne korzystanie zarówno na komputerach, tabletach, jak i smartfonach.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Szczegółowy Opis Aplikacji:

Aplikacja FoodBuddy została stworzona z wykorzystaniem nowoczesnych technologii frontendowych i backendowych. Główne narzędzie użyte do jej budowy to Vue.js, z zastosowaniem Vue Router oraz Composition API, co zapewnia elastyczność i wydajność w zarządzaniu stanem aplikacji oraz routingu.
Do stworzenia i zarządzania własną bazą danych użyto platformy Firebase, która oferuje szereg narzędzi usprawniających proces deweloperski. W szczególności, Firestore Database została wykorzystana do przechowywania i synchronizacji danych w czasie rzeczywistym, co pozwala na szybki i skalowalny dostęp do danych.
Ponadto, usługa Firebase Authentication została zaimplementowana w celu zarządzania procesami logowania i rejestracji użytkowników. Dzięki temu użytkownicy mogą łatwo tworzyć konta, logować się i korzystać z aplikacji w sposób bezpieczny i niezawodny.
Dzięki połączeniu tych technologii, FoodBuddy oferuje intuicyjną i responsywną platformę, która zapewnia użytkownikom doskonałe doświadczenia zarówno pod względem funkcjonalności, jak i bezpieczeństwa.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Aplikacja kulinarna z przyjaznym interfejsem i zaawansowanymi funkcjonalnościami zawiera sześć głównych stron, dostępnych z paska nawigacji:

1. Strona główna - Strona startowa aplikacji, na którą użytkownik trafia zaraz po otwarciu. Znajduje się tu zachęcający przycisk przekierowujący do strony z przepisami, mający na celu zainspirowanie użytkownika do przeglądania dostępnych receptur.

2. O nas - Sekcja ta zawiera szczegółowe informacje o autorach aplikacji oraz jej funkcjonalnościach. Użytkownik może dowiedzieć się więcej o zespole, który stworzył aplikację, oraz o celach, jakie przyświecały jej powstaniu.

3. Znajdź przepis - Strona ta stanowi centralne miejsce, gdzie użytkownik może przeglądać wszystkie dostępne przepisy kulinarne. Każdy przepis zawiera informacje o składnikach, krokach przygotowania, czasie przygotowania, typie dania, poziomie trudności oraz autorze. Strona oferuje również rozbudowane opcje filtrowania:
      -Pole wyszukiwania umożliwia znalezienie przepisów na podstawie wpisanej frazy.
      -Suwak (slider) pozwala dostosować czas przygotowania według preferencji użytkownika.
      -Filtr typu multiselect umożliwia wybór składników, jakie mają zawierać wyszukiwane przepisy.
      -Filtr typu dania pozwala na wyświetlanie przepisów według typu: mięsny, bezmięsny, wegański, wegetariański.
      -Filtr poziomu trudności pozwala na wyświetlanie przepisów według stopnia trudności: łatwy, średni, trudny.

4. Dodaj przepis - Strona ta umożliwia użytkownikom dodawanie własnych przepisów do bazy aplikacji. Zawiera formularz, w którym należy uzupełnić wszystkie niezbędne informacje dotyczące przepisu. Istotnym jest, że tylko zalogowani użytkownicy mają możliwość dodawania przepisów; dla niezalogowanych użytkowników strona ta jest niedostępna.

5. Moje przepisy - Strona ta jest podobna do strony "Znajdź przepis", jednak wyświetla wyłącznie przepisy, których autorem jest aktualnie zalogowany użytkownik. Każdy przepis posiada przycisk "Edytuj", umożliwiający użytkownikowi modyfikację i aktualizację własnych receptur. Tak jak w przypadku dodawania przepisów, tylko zalogowani użytkownicy mają dostęp do tej sekcji.

6. Zaloguj - Strona zawiera formularz do logowania i rejestracji nowych użytkowników. Proces rejestracji wymaga podania adresu e-mail oraz hasła (minimum 6 znaków).

7. Cookbook - ksiązka kucharksa po API Githuba

8. ChatBot

Nasza aplikacja ma na celu ułatwienie codziennego gotowania, inspirowanie do tworzenia nowych potraw oraz umożliwienie dzielenia się własnymi kulinarnymi pomysłami z innymi użytkownikami.