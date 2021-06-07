import React from 'react';
import '../styles.css'
import {Link} from 'react-router-dom';
function Cetvrta() {
  return (
<div className="all">
    <div class="str-left">
    <div class="page-name">Cineplex</div>
    <div class="line"></div>
    <div class="menu">
        <ul>
            <li><a href="">Ponude  <i class="far fa-calendar-alt"></i></a>
                <ul>
                    <li><Link to="/Druga">Avengers</Link></li>
                    <li><Link to="/Treca">Pokemoni</Link></li>
                    <li><Link to="/Cetvrta">Johm Wick 3</Link></li>
                    <li><Link to="/Peta">Aladin</Link></li>
                    <li><Link to="/Sesta">X-Men</Link></li>
                </ul>
            </li>
            <li><Link to="">Kontakt  <i class="far fa-address-book"></i></Link></li>
            <li><Link to="/Login">Registracija <i class="far fa-address-card"></i></Link></li>
            <li><Link to="/">Početna  <i class="fas fa-home"></i></Link></li>
        </ul>
    </div>
</div>
<div class="page-right">
<div class="page-right-box-4-1">
                <div class="date">16.05.2019</div>
                <div class="image-name">John Wick 3</div>
            </div>
            <div class="page-right-box-4-2">
                <iframe src="https://www.youtube.com/embed/pU8-7BX9uxs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br></br><p>Super-Ubojica John Wick (Keanu Reeves) je u bijegu nakon što je ubio člana međunarodnog udruženja ubojica, s cijenom od 14 milijuna dolara na njegovu glavu – on je meta plaćenih ubojica diljem svijeta.ohn Wick: Chapter 3 – Parabellum je nadolazeći Američki neo-noir akcijski triler film redatelja Chad Stahelski i scenarista Derek Kolstad, Chris Collins & Marc Abrams i Shay Hatten. To će biti treći film u John Wick filmskoj franšizi, nakon John Wick (2014) i John Wick: Chapter 2 (2017). Zvijezde filma su Keanu Reeves, Halle Berry, Mark Dacascos, Ian McShane, Lance Reddick, Boban Marjanović i Laurence Fishburne.Film je nazvan  John Wick: Chapter 3 — Parabellum, prema slavnoj izreci “Si vis parcem, para bellum,” što znači, “Ako želite mir, pripremite se za rat.John Wick: Chapter Parabellum dolazi u kina 17. svibnja 2019. godine od Lionsgatea.</p>
            </div>
</div>
</div>
  );
}

export default Cetvrta;
