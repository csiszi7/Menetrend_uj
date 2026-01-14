import { useEffect, useState } from "react";
import './Foglalas.css';

const Foglalas = () => {
	const hon = JSON.parse(localStorage.getItem('honnan'));
  const hov = JSON.parse(localStorage.getItem('hova'));
	const foglalas = JSON.parse(localStorage.getItem('foglalas'))


	// const [viszonylat, setViszonylat] = useState({});
	const [honnan, setHonnan] = useState('');
	const [hova, setHova] = useState('');
	const [idopont, setIdopont] = useState('');
	const [ar, setAr] = useState(0);
	const [elsoKep, setElsoKep] = useState('');
	const [masodikKep, setMasodikKep] = useState('');

	useEffect(() => { 
		setHonnan(hon);
		setHova(hov);
		setIdopont(foglalas.idopont);
		// setViszonylat(foglalas.viszony);
		setElsoKep(foglalas.viszonylat.kepek[0]);
		setMasodikKep(foglalas.viszonylat.kepek[1]);
    setAr(foglalas.ar);
	}, []);

	return (
		<div className="foglalas-tarto" style={ { padding: '35px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', maxWidth: '1500px', margin: '80px auto', backgroundColor: '#f9f9f9', } }>
			<div className="cim">{ honnan } ↪  { hova }</div>
			<p>Időpont: {idopont}</p>
      			<span>Viszonylat Honnan {hon.indIdo}  </span>
						<span>Honnan {hon}</span>
						<span>Hova {hov}</span>
						<span>Viszonylat Hova {hov}</span>
						<span>Teljes Ár {ar} </span>
						<span><button onClick={() => foglalas(foglalas)}>Foglalás</button></span>
			<div
  className="kepek-sor"
  style={{
    display: 'flex',
    gap: '16px',
    margin: '16px 0',
    justifyContent: 'center'
  }}
>
  <img
    src={elsoKep}
    alt="Induló állomás"
    style={{
      width: '320px',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '8px'
    }}
  />

  <img
    src={masodikKep}
    alt="Érkező állomás"
    style={{
      width: '320px',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '8px'
    }}
  />
</div>
		</div>
	);
};

export default Foglalas;