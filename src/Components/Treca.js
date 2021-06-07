import React from 'react';
import '../styles.css'
import {Link} from 'react-router-dom';
function Treca() {
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
<div class="page-right-box-3-1">
                <div class="date">16.05.2019</div>
                <div class="image-name">Pokémon detektiv Pikachu</div>
            </div>
            <div class="page-right-box-3-2">
                <iframe src="https://www.youtube.com/embed/1roy4o4tqQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br></br><p>Priča počinje nestankom privatnog istražitelja Harryja Goodmana, kada njegov 21-godišnji sin Tim pokuša saznati što se zapravo dogodilo. U istrazi će mu pomoći Harryjev bivši Pokémon partner, detektiv Pikachu, koji ima najčudniji smisao za humor. Tim i Pikachu će udružiti snage kako bi razotkrili zapetljanu tajnu. U potrazi za tragovima u suvremenoj metropoli u kojoj žive ljudi i Pokémoni, susreću se s raznolikim likovima te otkrivaju šokantnu tajnu koja bi mogla uništiti cijeli Pokémon svijet.Pokemon groznica i dalje trese svijet, a kako se čini, neće tako brzo prestati, jer uskoro na velika platna stiže prva živa Pokémon avantura – POKÉMON DETEKTIV PIKACHU sapopularnim Ryanom Reynoldsom u ulozi legendarnog Pikachua!</p>
            </div>

</div>
</div>
  );
}

export default Treca;
