import React from 'react';
import '../styles.css'
import {Link} from 'react-router-dom';
function Druga() {
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
<div class="page-right-box-2-1">
                <div class="date">25.04.2019</div>
                <div class="image-name">Avengers : End Game</div>
            </div>
            <div class="page-right-box-2-2">
                <iframe width="1000" height="500" src="https://www.youtube.com/embed/TcMBFSGVi1c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br></br><p>Avengers ENDGAME (Osvetnici: Završnica) je nadolazeći Američki superherojski film pravljen prema timu Avengers iz Marvel stripova, produciraju ga Marvel Studios i distribuira Walt Disney Studios Motion Pictures. On je direktni nastavak na Avengers: Infinity War iz 2018. godine, nastavak na Marvel’s The Avengers (2012) i Avengers: Age of Ultron (2015), te je ukupno 22 film u Marvel Filmskom Svemiru (MCU). Redatelji filma su Anthony i Joe Russo, po scenariju sastavljenog od tima Christopher Markus i Stephen McFeely, a u njemu će glumiti jako puno glumaca iz prijašnjih filmova.</p>
            </div>
</div>
</div>
  );
}

export default Druga;
