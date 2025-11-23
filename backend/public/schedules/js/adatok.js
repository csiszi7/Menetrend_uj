
// Járattípusok
let jarat = ['busz', 'vonat'];

// indulo állomások
let induloallomas = ['Budapest', 'Győr', 'Pécs', 'Szeged', 'Debrecen', 'Miskolc','Békéscsaba'];
// célállomások
let celallomas =['Budapest', 'Győr', 'Pécs', 'Szeged', 'Debrecen', 'Miskolc','Békéscsaba'];

// Időtartamok (példa)
let idopontok = [
  '3:25(S)', '4:30(IC)', '5:46(IC)', '6:44(IC)', '7:44(IC)', '8:44(IC)', '9:44(IC)', '10:44(IC)', '11:44(IC)', '12:44(IC)', '13:44(IC)', '14:44(IC)', '15:44(IC)', '16:44(IC)', '17:44(IC)', '18:44(IC)', '19:44(IC)', '20:44(IC)',
  '5:28(SZ)', '6:28(SZ)', '7:28(SZ)', '8:28(SZ)', '9:28(SZ)','10:28(SZ)','11:28(SZ)','12:28(SZ)','13:28(SZ)','14:28(SZ)','15:28(SZ)','16:28(SZ)','17:28(SZ)','18:28(SZ)','19:28(SZ)','20:28(SZ)','22:28(SZ)',
  '6:07(SZ)','8:11(SZ)','15:11(SZ)','18:11(SZ)'
  ,'03:10(S10)','04:30(S10)','05:25(S10)','06:25(S10)','07:25(S10)','08:25(S10)','09:25(S10)','10:25(S10)','11:25(S10)','12:25(S10)','13:25(S10)','14:25(S10)','15:25(S10)','16:25(S10)','17:25(S10)','18:25(S10)','19:25(S10)','20:25(S10)','22:25(S10)','5:53(IC)','6:53(IC)','7:53(IC)','8:53(IC)','9:53(IC)','10:53(IC)','11:53(IC)','12:53(IC)','13:53(IC)','14:53(IC)','15:53(IC)','16:53(IC)','17:53(IC)','19:53(IC)'

];

// Állomások
let allomasok = [
'Szeged', 'Szatymaz', 'Kistelek', 'Kiskunfélegyháza', 'Kecskemét', 'Nagykőrös', 'Cegléd', 'Ferihegy', 'Kőbánya-kispest', 'Zugló', 'Budapest-Nyugati', 'Szeged-Rókus','Hódmezővásárhelyi-Népkert ', 'Hódmezővásárhely Vasútállomás', 'Kútvölgy', 'Székkutas', 'Orosháza', 'Orosházi-tanyák', 'Csorvás','Csorvás-alsó', 'Telekgerendás', 'Békéscsaba', 'Kiskundorozsma', 'Jánosszállás', 'Vilmaszállás', 'Őszeszék', 'Balástya','Kapitányság', 'Kisteleki-szőlők','Csengele','Petőfiszállási-tanyák','Petőfiszállás', 'Selymes','Kunsszállás','Városföld', 'Nyársapát','Üllő','Katonatelep','Budapest-Déli','Budapest-Kelenföld','Budaörs','Törökbálint','Biatorbágy','Herceghalom','Bicske alsó','Bicske','Szár','Szárliget','Alsógalla','Tatabánya','Vérteszőlős','Tóvároskert','Tata','Almásfüzitő','Almásfüzitő felső','Szőny','Komárom','Ács','Nagyszentjános','Győrszentiván','Győr-Gyárváros','Győr','Budapest-Keleti','Sárbogárd','Dombóvár','Szentlőrinc','Pécs'
];

// Kedvezmények (%)
let kedvezmeny = [' BKK bérletek és jegyek (csak HÉV utazáshoz)', 'BKK munkavállaló 2. kocsiosztály', 'BKV munkavállaló 2. kocsiosztály', 'Ellátottak utazási utalványa','Ellátottak utazási utalványa', 'FIP igazolvány 1. oszt.', 'Fogyatékossággal élők igazolványa', 'GYSEV igazolvány 1. oszt.', 'GYSEV igazolvány 2. oszt.', 'GYSEV igazolvány-családtag 1. oszt.', 'GYSEV igazolvány-családtag 2. oszt.Díjmentes','Magyar Igazolvány, Magyar hozzátartozói Igazolvány Díjmentes','Magyarország24 jegyDíjmentes','MÁV-START igazolvány 1. oszt. Díjmentes',
  'MÁV-START igazolvány 2. oszt. Díjmentes',
  'MÁV-START igazolvány-családtag 1. oszt. Díjmentes',
  'MÁV-START igazolvány-családtag 2. oszt. Díjmentes',
  'Menekültek igazolása Díjmentes',
  'Nagycsalád tagja Díjmentes',
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


// szeged-> bp(Ic, S), szeged->Békéscsaba(Sz), szeged-> kiskunfélegyháza(Sz), bp->győr(IC), bp->pécs(IC)
let idotartam = ['2:39(S)','2:34(Ic)','2:23(Ic)','2:25(Ic)', '1:11(Sz)','1:42(Sz)','1:50(S10)','2:45(IC)'];


module.exports = {
        jarat, 
        allomasok, 
        kedvezmeny, 
        kortablak, 
        idotartam, 
        idopontok, 
        induloallomas, 
        celallomas 
};


