Dokumentacja Projektu: Aplikacja do Zamówień
Opis projektu
Projekt to aplikacja webowa stworzona w React, umożliwiająca użytkownikom składanie zamówień i zarządzanie historią tych zamówień. Aplikacja pozwala użytkownikowi na logowanie, przeglądanie swojej historii zamówień oraz wylogowanie się.

Funkcjonalności:
Logowanie i Wylogowanie: Użytkownik może się zalogować za pomocą prostego formularza. Po zalogowaniu, dostęp do aplikacji jest możliwy, a użytkownik może również wylogować się.
Historia Zamówień: Użytkownik może przejrzeć historię swoich zamówień, zawierającą informacje o dacie zamówienia, statusie, łącznej cenie oraz szczegółach zamówionych produktów.
Responsywność: Aplikacja jest w pełni responsywna, co zapewnia wygodne użytkowanie zarówno na komputerach, jak i na urządzeniach mobilnych.


Szczegóły Implementacji
1. Logowanie
Logowanie odbywa się za pomocą prostego formularza, gdzie użytkownik podaje swoje dane (login i hasło). Po udanym logowaniu zmienia się stan aplikacji, co umożliwia dostęp do historii zamówień. W przypadku nieudanej próby logowania wyświetlany jest komunikat o błędzie.



2. Historia Zamówień
Po zalogowaniu użytkownik może kliknąć przycisk "Historia zamówień" w nawigacji. Jeśli użytkownik ma zamówienia, zostaną one wyświetlone w formie listy z danymi o dacie zamówienia, statusie, łącznej cenie oraz zamówionych produktach. W przeciwnym razie zostanie wyświetlona informacja, że użytkownik nie ma żadnych zamówień.

3. Responsywność
Projekt jest w pełni responsywny. Dzięki użyciu @media w CSS, interfejs dostosowuje się do różnych rozmiarów ekranu. Na urządzeniach mobilnych, przyciski i elementy listy są ustawione w kolumnie, co zapewnia lepszą czytelność.


Przyszłe Rozważania
W przyszłości można dodać następujące funkcjonalności:

Integracja z backendem: Aby przechowywać dane o użytkownikach i zamówieniach w bazie danych.
Autoryzacja JWT: W celu zapewnienia bezpiecznego logowania i przechowywania tokenów sesji.
Edytowanie zamówień: Możliwość edytowania istniejących zamówień przez użytkowników.

# Logowanie admina: login: admin / hasło: admin
# Logowanie użytkownika: Trzeba stworzyć samemu własne konto przy logowaniu się.
