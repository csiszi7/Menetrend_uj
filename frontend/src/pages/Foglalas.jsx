import { useEffect, useState } from "react";

const Foglalas = () => {
	const hon = JSON.parse(localStorage.getItem('honnan'));
  	const hov = JSON.parse(localStorage.getItem('hova'));
	const foglalas = JSON.parse(localStorage.getItem('foglalas'))

	const [viszonylat, setViszonylat] = useState({});
	const [honnan, setHonnan] = useState('');
	const [hova, setHova] = useState('');
	const [idopont, setIdopont] = useState('');
	const [elsoKep, setElsoKep] = useState('');
	const [masodikKep, setMasodikKep] = useState('');

	useEffect(() => { 
		setHonnan(hon);
		setHova(hov);
		setIdopont(foglalas.idopont);
		setViszonylat(foglalas.viszony);
		setElsoKep(foglalas.viszonylat.kepek[0]);
		setMasodikKep(foglalas.viszonylat.kepek[1]);
	}, []);

	return (
		<div className="foglalas-tarto" style={ { color: 'white', backgroundColor: 'red', alignItems: 'center' } }>
			<div className="cim">{ honnan } ↪  { hova }</div>
			<p>Időpont: {idopont}</p>
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