
// Járattípusok
let jarat = ['busz', 'vonat'];

// Állomások
let allomasok = ['Budapest', 'Győr', 'Pécs', 'Szeged', 'Debrecen', 'Miskolc','Békéscsaba'];

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
  '3:25', '4:30', '5:46', '6:44', '7:44', '8:44', '9:44', '10:44', '11:44', '12:44', '13:44', '14:44', '15:44', '16:44', '17:44', '18:44', '19:44', '20:44', '5:28', '6:28', '7:28', '8:28', '9:28','10:28','11:28','12:28','13:28','14:28','15:28','16:28','17:28','18:28','19:28','20:28','22:28','6:07','8:11','15:11','18:11',
];

// szeged-> bp(Ic, S), szeged->Békéscsaba(Sz), szeged-> kiskunfélegyháza(Sz) indulások
let idotartam = ['2:39(S)','2:34(Ic)','2:23(Ic)','2:25(Ic)', '1:11(Sz)','1:42(Sz)'];

// helyegy
let helyegy=[
'1.osztály','2.osztály'
];

// indulo állomások
let induloallomas = [
'Szeged', 'Szatymaz', 'Kistelek', 'Kiskunfélegyháza', 'Kecskemét', 'Nagykőrös', 'Cegléd', 'Ferihegy', 'Kőbánya-kispest', 'Zugló', 'Budapest-Nyugati', 'Szeged-Rókus','Hódmezővásárhelyi-Népkert ', 'Hódmezővásárhely Vasútállomás', 'Kútvölgy', 'Székkutas', 'Orosháza', 'Orosházi-tanyák', 'Csorvás','Csorvás-alsó', 'Telekgerendás', 'Békéscsaba', 'Kiskundorozsma', 'Jánosszállás', 'Vilmaszállás', 'Őszeszék', 'Balástya','Kapitányság', 'Kisteleki-szőlők','Csengele','Petőfiszállási-tanyák','Petőfiszállás', 'Selymes'
];
// célállomások
let celallomas =[
'Szeged', 'Szatymaz', 'Kistelek', 'Kiskunfélegyháza', 'Kecskemét', 'Nagykőrös', 'Cegléd', 'Ferihegy', 'Kőbánya-kispest', 'Zugló', 'Budapest-Nyugati', 'Szeged-Rókus','Hódmezővásárhelyi-Népkert ', 'Hódmezővásárhely Vasútállomás', 'Kútvölgy', 'Székkutas', 'Orosháza', 'Orosházi-tanyák', 'Csorvás','Csorvás-alsó', 'Telekgerendás', 'Békéscsaba', 'Kiskundorozsma', 'Jánosszállás', 'Vilmaszállás', 'Őszeszék', 'Balástya','Kapitányság', 'Kisteleki-szőlők','Csengele','Petőfiszállási-tanyák','Petőfiszállás', 'Selymes',
  'budapest-keleti', 'budapest-déli'
];

// klíma
let klima = [
'igen', 'nem'
];

// visszaido
let visszaideje =[
    '4:30', '5:40', '6:50', '7:50', '8:50', '9:550', '10:50', '11:50', '12:50', '13:50', '14:50', '15:50', '16:50', '17:50', '18:50', '19:50', '20:50','22:00',
    '5:47', '6:47', '7:47', '8:47', '9:47','10:47','11:47','12:47','13:47','14:45','15:47','16:45','17:47','18:47','19:47','20:47','22:45',
    '5:33', '6:33', '8:33', '14:33','18:33','00:01'
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


