import { Link } from "react-router-dom";
import './Jegy.css';



const Jegy = () => {

  return (
   <div>
    <br />
    <br /> 
    <p>
      VÁSÁROLJA MEG JEGYÉT ONLINE! 
      <br />
      Belföldi és nemzetközi menetjegyét online is megvásárolhatja ezen a weboldalon vagy a MÁV applikációkban. Az online vásárlás nem csupán kényelmesebb és gyorsabb, <br /> de bizonyos díjtermékek esetén olcsóbb is, mint az automatából vagy a jegypénztárból vásárolva. Azonos felhasználói fiókkal a böngészőben megvásárolt jegyek a MÁV és MÁV+ app-ban is elérhetők.
    </p>
    <form action="#"> 
   <select name="Közlekedési eszközök" id="kozeszk"> 
    <option value="vasut">Vasút</option> 
    <option value="busz">Busz</option> 
    <option value="hev">Hév</option> 
    </select> <br />

    <label htmlFor="honnan">Honnan</label>
    <input type="text" name="Honnan" id="honnan" />
    <br />

    <label htmlFor="eritnve">Érintve</label>
    <input type="text" name="Érintve" id="eritnve" />
    <br />

    <label htmlFor="hova">Hova</label>
    <input type="text" name="Hova" id="hova" />
    <br />

    <select name="Kedvezmények" id="kedvezmenyek">
      <option value="BKK bérletek és jegyek">
        BKK bérletek és jegyek (csak HÉV utazáshoz)
      </option>
      <option value="BKK munkavállaló 2. osztály">
        BKK munkavállaló 2. kocsiosztály
      </option>
      <option value="BKV munkavállaló 2. osztály">
        BKV munkavállaló 2. kocsiosztály
      </option>
      <option value="Ellátottak utazási utalványa">
        Ellátottak utazási utalványa (díjmentes)
      </option>
      <option value="FIP igazolvány 1. osztály">
        FIP igazolvány 1. oszt. (50%)
      </option>
      <option value="Fogyatékossággal élők igazolványa">
        Fogyatékossággal élők igazolványa (díjmentes)
      </option>
      <option value="GYSEV igazolvány 1. osztály">
        GYSEV igazolvány 1. oszt. (díjmentes)
      </option>
      <option value="GYSEV igazolvány 2. osztály">
        GYSEV igazolvány 2. oszt. (díjmentes)
      </option>
      <option value="GYSEV családtag 1. osztály">
        GYSEV igazolvány-családtag 1. oszt. (díjmentes)
      </option>
      <option value="GYSEV családtag 2. osztály">
        GYSEV igazolvány-családtag 2. oszt. (díjmentes)
      </option>
      <option value="Magyar igazolvány">
        Magyar Igazolvány, Magyar hozzátartozói Igazolvány (díjmentes)
      </option>
      <option value="Magyarország24 jegy">
        Magyarország24 jegy (díjmentes)
      </option>
      <option value="MÁV-START igazolvány 1. osztály">
        MÁV-START igazolvány 1. oszt. (díjmentes)
      </option>
      <option value="MÁV-START igazolvány 2. osztály">
        MÁV-START igazolvány 2. oszt. (díjmentes)
      </option>
      <option value="MÁV-START családtag 1. osztály">
        MÁV-START igazolvány-családtag 1. oszt. (díjmentes)
      </option>
      <option value="MÁV-START családtag 2. osztály">
        MÁV-START igazolvány-családtag 2. oszt. (díjmentes)
      </option>
      <option value="Menekültek igazolása">
        Menekültek igazolása (díjmentes)
      </option>
      <option value="Nagycsalád tagja">Nagycsalád tagja (díjmentes)</option>
      <option value="Nemzetközi bérlet 1. osztály">
        Nemzetközi bérlet, menetjegy 1. o. (díjmentes)
      </option>
      <option value="Nemzetközi bérlet 2. osztály">
        Nemzetközi bérlet, menetjegy 2. o. (díjmentes)
      </option>
      <option value="Országbérlet">Országbérlet</option>
      <option value="OSZZSD igazolvány">
        OSZZSD igazolvány magáncélú (díjmentes)
      </option>
      <option value="Rendőr igazolvány">
        Rendőr - készenléti igazolvány (203) (díjmentes)
      </option>
      <option value="U jelű igazolvány">
        U jelű, vagy azzal egyenértékű utazási igazolvány (díjmentes)
      </option>
      <option value="VOLÁN szabadjegy">
        VOLÁN szabadjegy (országos) (díjmentes)
      </option>
    </select>
    <br />

    <select name="Utasvelfetel" id="utasfelvetel">
      <option value="Kisgyerek_0_3">Kisgyerek (0-3 éves)</option>
      <option value="Kisgyerek_3_6">Kisgyerek (3-6 éves)</option>
      <option value="Gyerek_6_14">Gyerek (6-14 éves)</option>
      <option value="Gyerek_14_18">Gyerek [14-18 éves]</option>
      <option value="Fiatal_18_25">Fiatal [18-25 éves]</option>
      <option value="Nyugdijas_65plusz">
        Nyugdíjas/senior (65+ éves)
      </option>
      <option value="Kerekpar">Kerékpár</option>
      <option value="Kutya">Kutya</option>
    </select>
    <input type="date" name="szul.datum" id="szuldat" />
    <br />
    <br />

    <p>odaút időpontja</p>
    <label htmlFor="hanykor">Mikor?</label>
    <input type="date" id="hanykor" name="appt" /> Hánykor?{" "}
    <input type="time" name="Mikor?" id="mikor" />
    <br />

    <p>visszaút időpontja</p>
    Mikor?<input type="date" id="hanykor_vissza" name="appt" />Hánykor? {" "}
    <input type="time" name="Mikor?" id="mikor_vissza" />
    <br />

    <label htmlFor="klimas">Csak klímás járattal</label>
    <input type="checkbox" name="klimas" id="klimas" />
    <br />

    <label htmlFor="helyjegy">Csak helyjegyet szeretnék</label>
    <input type="checkbox" name="helyjegy" id="helyjegy" />
    <br />

    <button name="+Utas" id="+utas">+ Utas</button>
    <button type="reset">Törlés</button>
    <button name="keres" id="keres">Keresés</button>
  </form>
  
</div>
  )
}

export default Jegy
