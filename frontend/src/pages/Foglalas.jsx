import { useEffect, useState } from "react";

const Foglalas = () => {
	const hon = JSON.parse(localStorage.getItem('honnan'));
  	const hov = JSON.parse(localStorage.getItem('hova'));
	const foglalas = JSON.parse(localStorage.getItem('foglalas'))

	const [viszonylat, setViszonylat] = useState({});
	const [honnan, setHonnan] = useState('');
	const [hova, setHova] = useState('');
	const [idopont, setIdopont] = useState('');

	useEffect(() => { 
		setHonnan(hon);
		setHova(hov);
		setIdopont(foglalas.idopont);
		setViszonylat(foglalas.viszony);
	}, []);

	return (
		<div className="foglalas-tarto" style={ { color: 'white', backgroundColor: 'red' } }>
			<div className="cim">{ honnan } ↪  { hova }</div>
			<p>Időpont: {idopont}</p>
		</div>
	);
};

export default Foglalas;