Komponenty
1. AdminPanel.jsx
Panel administracyjny, który pozwala administratorowi zarządzać produktami.
Administrator może:
Dodawać nowe produkty.
Edytować istniejące produkty.
Usuwać produkty.
Komunikacja z API odbywa się za pomocą axiosa.
Wyświetla listę wszystkich produktów i umożliwia usuwanie oraz edytowanie.


2. Cart.jsx
Koszyk zakupowy, który wyświetla produkty dodane przez użytkownika.

Funkcje:
  Aktualizowanie ilości produktów.
  Usuwanie produktów z koszyka.
  Wyczyść koszyk.
  Oblicza łączną cenę zamówienia.
  Składanie zamówienia.
  
Propsy:
  cartItems: Tablica produktów w koszyku.
  updateQuantity: Funkcja aktualizująca ilość produktów.
  removeItem: Funkcja usuwająca produkt z koszyka.
  clearCart: Funkcja do wyczyszczenia koszyka.
  placeOrder: Funkcja do składania zamówienia.

3. Login.jsx
Komponent logowania/rejestracji użytkownika.
Logowanie jako administrator: login admin, hasło admin.
Rejestracja użytkowników za pomocą localStorage.
Funkcje:
Logowanie.
Rejestracja nowych użytkowników.
Obsługa błędów podczas logowania lub rejestracji.
Propsy:
setUserRole: Funkcja do ustawiania roli użytkownika (admin lub user).
4. Navbar.jsx
Pasek nawigacyjny aplikacji dostępny po zalogowaniu.

Funkcje:

Przejście do strony z produktami.
Przejście do historii zamówień.
Wylogowanie użytkownika.
Propsy:

onLogout: Funkcja do wylogowania.
setActivePage: Funkcja zmieniająca aktualną stronę.
5. OrderHistory.jsx
Komponent wyświetlający historię zamówień użytkownika.

Zawiera szczegółowe informacje o każdym zamówieniu:

Data zamówienia.
Status zamówienia (np. "W trakcie realizacji", "Dostarczone").
Łączna cena oraz szczegóły dotyczące każdego produktu w zamówieniu.
Propsy:

orders: Tablica z danymi zamówień użytkownika.
6. ProductCard.jsx
Karta produktu, która wyświetla informacje o produkcie na liście produktów.
Wyświetla:
Nazwę produktu.
Opis.
Cenę.
Obrazek produktu.
Propsy:
product: Obiekt produktu zawierający jego nazwę, cenę, opis i obrazek.
7. ProductForm.jsx
Formularz do dodawania nowych produktów w panelu administratora.
Pozwala na wprowadzenie nazwy produktu, ceny, opisu i URL obrazka.
Po dodaniu produktu, formularz wysyła dane do API i odświeża listę produktów.
Propsy:
onProductAdded: Funkcja do odświeżenia listy produktów po dodaniu nowego.
8. ProductList.jsx
Lista produktów dostępnych dla użytkowników.
Wyświetla wszystkie produkty pobrane z API.
Użytkownik może dodać produkt do koszyka.
Propsy:
addToCart: Funkcja do dodawania produktów do koszyka.


Stylizacja
Projekt używa Bootstrap oraz dodatkowych plików CSS, które znajdziesz w folderach komponentów.

Wymagania systemowe
Node.js w wersji >=14.x
npm lub yarn
Serwer API (np. json-server lub backend w Node.js, Pythonie itp.)


Zależności
React: Biblioteka do budowania interfejsu użytkownika.
axios: Obsługa żądań HTTP.
prop-types: Walidacja typów propsów w komponentach React.
bootstrap: Framework CSS do stylizacji.


Użycie API
Aplikacja korzysta z lokalnego serwera API do zarządzania produktami. Przykład endpointów API:

GET /api/products - pobiera listę wszystkich produktów.
POST /api/products - dodaje nowy produkt.
DELETE /api/products/:id - usuwa produkt o podanym id.
Możesz stworzyć własny backend lub użyć json-server, aby łatwo stworzyć prosty serwer RESTful do obsługi produktów.

# Informacje dla testera
## Logowanie admina: login: admin / hasło: admin
## Logowanie użytkownika: Trzeba stworzyć samemu własne konto przy logowaniu się.

# Inne ważne rzeczy!
## Baza na localhost/xampp, nazwa bazy dowolna ale do zmiany w pliku index.cjs (baza na samym dole plików)
## Odpalanie backendu klasycznie, cd backend oraz node index.cjs
## Odpalanie frontend klasycznie npm run dev
## Uwaha powyższy projekt jest bez modułów nodea, proszę zainstalować zależności przed korzystaniem z projektu!
## Projekt tworzony w React Vite!

