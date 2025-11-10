
// Járattípusok
let jarat = ['busz', 'vonat'];

// Állomások
let allomasok = ['Budapest', 'Győr', 'Pécs', 'Szeged', 'Debrecen', 'Miskolc'];

// Kedvezmények (%)
let kedvezmenyek = [' BKK bérletek és jegyek (csak HÉV utazáshoz)', 'BKK munkavállaló 2. kocsiosztály', 'BKV munkavállaló 2. kocsiosztály', 'Ellátottak utazási utalványa','Ellátottak utazási utalványa', 'FIP igazolvány 1. oszt.', 'Fogyatékossággal élők igazolványa', 'GYSEV igazolvány 1. oszt.', 'GYSEV igazolvány 2. oszt.', 'GYSEV igazolvány-családtag 1. oszt.', 'GYSEV igazolvány-családtag 2. oszt.Díjmentes','Magyar Igazolvány, Magyar hozzátartozói Igazolvány Díjmentes','Magyarország24 jegyDíjmentes','MÁV-START igazolvány 1. oszt. Díjmentes',
  'MÁV-START igazolvány 2. oszt. Díjmentes',
  'MÁV-START igazolvány-családtag 1. oszt. Díjmentes',
  'MÁV-START igazolvány-családtag 2. oszt. Díjmentes',
  'Menekültek igazolása Díjmentes',
  'Nagcsalád tagja Díjmentes',
  'Nemzetközi bérlet, menetjegy 1. o.Díjmentes',
  'Nemzetközi bérlet, menetjegy 2. o. Díjmentes',
  'Országbérlet',
  'OSZZSD igazolvány magáncélú Díjmentes',
  'Rendőr - készenléti igazolvány (203) Díjmentes',
  'START Klub VIP kártya Díjmentes',
  'U jelű, vagy azzal egyenértékű utazási igazolvány Díjmentes',
  'VOLÁN szabadjegy (országos) Díjmentes'];

// Kortábla minták
let kortablak = ['Kisgyerek (0-3 éves)',
  'Kisgyerek (3-6 éves)',
  'Gyerek (6-14 éves)',
  'Gyerek [14-18 éves]',
  'Felnőtt [25-65 éves]',
  'Nyugdíjas/senior (65+ éves)'];

// Időtartamok (példa)
let idopontok = [
  '3:25', '4:30', '5:46', '6:44', '7:44', '8:44', '9:44', '10:44', '11:44', '12:44', '13:44', '14:44', '15:44', '16:44', '17:44', '18:44', '19:44', '20:44'
];

// Például indulási és visszaidő minták
let idotartam = ['2:30'];

// helyegy
let helyegy=[
'1.osztály','2.osztály'
];

// indulo állomások
let induloallomas = [
'Szeged', 'Szatymaz', 'kistelek', 'Kiskunfélegyháza', 'Kecsekmét', 'Nagykőrös', 'Cegléd', 'Ferihegy', 'Kőbánya-kispest', 'Zugló', 'Budapest-Nyugati', 'Szeged-Rókus','Hódmezővásárhelyi-Népkert ', 'Hódmezővásárhely Vasútállomás', 'Kútvölgy', 'Székkutas', 'Orosháza', 'Orosházi-tanyák', 'Csorvás','Csorvás-alsó', 'Telekgerendás', 'Békéscsaba'
];
// célállomások
let celallomas =[
'budapest-nyugati', 'budapest-keleti', 'budapest-déli'
];

// klíma
let klima = [
'igen', 'nem'
];

// visszaido
let visszaideje =[
'munkara var'
];

module.exports = {
        jarat, 
        allomasok, 
        kortablak, 
        idotartamok, 
        idopontok, 
        kedvezmenyek, 
        induloallomas, 
        celallomas, 
        visszaideje, 
        klima, 
        helyjegy
};


