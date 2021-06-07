import "../styles.css";
import { useState, useRef } from "react";

export default function App() {
  const [korisnik, postavikorisnik] = useState({ime: "", prezime: ""});
  const [prezime, postaviprezime] = useState("");
  const [ime, postaviime] = useState("");

  const inputRef = useRef("");

  const dodajkorisnik = (un_ime, un_prezime) =>
    postavikorisnik({ ime: un_ime, prezime: un_prezime});
  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    dodajkorisnik(ime, prezime);
  };


  return (

<div class="login">
  <a href="/" class="povr">&#60; -- </a>
	<h1>Login</h1>
    <form onSubmit={handleSubmit}>
    	<input type="text" name="u" placeholder="Ime" required="required" value={ime} onChange={(e) => postaviime(e.target.value)}/>
    	<input type="text" name="u" placeholder="Prezime" required="required" ref={inputRef} value={prezime} onChange={(e) => postaviprezime(e.target.value)} />
        <input type="password" name="p" placeholder="Lozinka" required="required" />
        <button type="submit" >Registriraj se</button>
    </form>
    <p className="pe">Hvala {korisnik.ime} {korisnik.prezime} na korištenju naše usluge!</p>  
</div>
  );
}
