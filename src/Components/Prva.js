import React from 'react';
import '../styles.css'
import {Link} from 'react-router-dom';
function Prva() {
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
            <li><a href="">Kontakt  <i class="far fa-address-book"></i></a></li>
            <li><Link to="/Login">Registracija <i class="far fa-address-card"></i></Link></li>

            <li><a href="">Početna  <i class="fas fa-home"></i></a></li>
        </ul>
    </div>
</div>
<div class="page-right">
    <div class="page-right-box-1">
        <div class="date">25.04.2019</div>
        <div class="image-name">Avengers : End Game</div>
        
    </div>
    <div class="page-right-box-2">
        <div class="date">16.05.2019</div>
        <div class="image-name">Pokémon detektiv Pikachu</div>
    </div>
    <div class="page-right-box-3">
        <div class="date">16.05.2019</div>
        <div class="image-name">John Wick 3</div>
    </div>
    <div class="page-right-box-4">
        <div class="date">23.05.2019</div>
        <div class="image-name">Aladin</div>
    </div>
    <div class="page-right-box-5">
        <div class="date">06.06.2019</div>
        <div class="image-name">X-Men: Dark Phoenix</div>
    </div>
</div>
</div>
  );
}

export default Prva;
