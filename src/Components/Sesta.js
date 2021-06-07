import React from 'react';
import '../styles.css'
import {Link} from 'react-router-dom';
function Sesta() {
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
<div class="page-right-box-6-1">
                <div class="date">06.06.2019</div>
                <div class="image-name">X-Men: Dark Phoenix</div>
            </div>
            <div class="page-right-box-6-2">
                <iframe src="https://www.youtube.com/embed/q5v7Ch4bxzc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>U novom nastavku X-MEN: DARK PHOENIX, X-MEN-i se suočavaju s njihovim najnevjerojatnijim i najmoćnijim neprijateljem - jednom od njih, Jean Gray. Tijekom spasilačke misije u svemiru, Jean je gotovo ubijena kada je pogođena tajanstvenom kozmičkom silom. Kada se vrati kući, ta sila je učini još moćnijom, ali postaje i nestabilnija. U borbi s novom silom, Jean oslobađa moći koje ne može kontrolirati i razumijeti. Budući da je Jean izvan kontrole, povrijedit će one koje najviše voli te uništiti sve veze koje drže X-MEN-e zajedno. Sada, kada im se obitelj raspala, morat će naći način da se ponovno ujedine - ne samo kako bi spasili Jean, već da spase planet od izvanzemaljaca koji žele zavladati galaksijom.</p>
            </div>

</div>
</div>
  );
}

export default Sesta;
