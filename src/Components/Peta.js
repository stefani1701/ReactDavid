import React from 'react';
import '../styles.css'
import {Link} from 'react-router-dom';
function Peta() {
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
    <div class="page-right-box-5-1">
                <div class="date">23.05.2019</div>
                <div class="image-name">Aladin</div>
            </div>
            <div class="page-right-box-5-2">
                <iframe src="https://www.youtube.com/embed/foyufD52aog" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br></br><p>Igrana verzija Disney klasika iz 1992 godine, koja je pravljena prema Arapskim narodnim pričama istog imena iz One Thousand and One Nights i Francuske interpretacije od Antoine Galland. Zvijezde filma su Mena Massoud kao Aladdin, a uz njega Naomi Scott, Will Smith, Marwan Kenzari, Navid Negahban, Nasim Pedrad, Billy Magnussen i Numan Acar. Uzbudljiva igrana adaptacija Disneyjevog animiranog klasika, “Aladin”, uzbudljiva je priča o šarmantnom uličnom štakoru Aladinu, hrabroj i samodostatnoj princezi Jasmine i Duhu koji može biti ključ njihove budućnosti,. U režiji Guya Ritchieja, koji donosi svoj jedinstveni talenat za brzu akciju u fiktivni lučki grad Agrabah, “Aladdin” su napisali John August i Ritchie na temelju Disneyevog “Aladdina”. U film glumi Will Smith kao Genie ; Mena Massoud kao Aladdin; Naomi Scott kao Jasmine; Marwan Kenzari kao Jafar; Navid Negahban kao sultan; Nasim Pedrad kao Dalia i Billy Magnussen kao princ Anders.</p>
            </div>
</div>
</div>
  );
}

export default Peta;
