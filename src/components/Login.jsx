import PropTypes from 'prop-types';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './Login.css';

const Login = ({ setUserRole }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem('users')) || []
  );


  const adminLogin = 'admin';
  const adminPassword = 'admin';

  const handleLogin = () => {
    if (login === adminLogin && password === adminPassword) {
      setUserRole('admin');
    } else {
      const user = users.find((user) => user.login === login && user.password === password);
      if (user) {
        setUserRole(user.role);
      } else {
        setError('Nieprawidłowy login lub hasło');
      }
    }
  };

  const handleRegister = () => {
    if (users.some((user) => user.login === login)) {
      setError('Taki użytkownik już istnieje');
      return;
    }

    const newUser = { login, password, role: 'user' };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    setError('');
    setIsRegistering(false);
    alert('Rejestracja zakończona sukcesem!');
  };

  return (
    <div className="container mt-5">
      <h2>{isRegistering ? 'Rejestracja' : 'Logowanie'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        type="text"
        placeholder="Login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        className="form-control m-2"
      />
      <input
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control m-2"
      />

      {isRegistering ? (
        <>
          <center><button onClick={handleRegister} className="btn btn-success m-2">
            Zarejestruj
          </button></center>
          <button
            onClick={() => setIsRegistering(false)}
            className="btn btn-secondary m-2"
          >
            Masz już konto? Zaloguj się
          </button>
        </>
      ) : (
        <>
          <center><button onClick={handleLogin} className="btn btn-primary m-2">
            Zaloguj
          </button>
          <button
            onClick={() => setIsRegistering(true)}
            className="btn btn-secondary m-2"
          >
            Nie masz konta? Zarejestruj się
          </button></center>
        </>
      )}
    </div>
  );
};

Login.propTypes = {
  setUserRole: PropTypes.func.isRequired,
};

export default Login;
