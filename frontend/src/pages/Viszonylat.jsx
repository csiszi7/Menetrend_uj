import { useContext, useEffect, useState } from "react";
import { MenetrendContext } from "../context/MenetrendContext";
import './Viszonylat.css';

const Viszonylat = () => {
	const hon = JSON.parse(localStorage.getItem('honnan'));
  	const hov = JSON.parse(localStorage.getItem('hova'));
	const viszony = JSON.parse(localStorage.getItem('viszonylatok'));
	
	const [viszonylatok, setViszonylatok] = useState([]);
	const [idopontok, setIdopontok] = useState([]);
	const [idoIntervallumok, setIdoIntervallumok] = useState(['0:00']);
	const [indulo, setIndulo] = useState('');
	const [cel, setCel] = useState('');
	const [honnan, setHonnan] = useState('');
	const [honnanIndex, setHonnanIndex] = useState(0);
	const [hova, setHova] = useState('');
	const [hovaIndex, setHovaIndex] = useState(0);

	function erkezesiIdoSzamol(kezdo, tartam) {
		let kezdoIdoOra = +kezdo.split(':')[0];    
		let kezdoIdoPerc = +kezdo.split(':')[1];    
		let tartamIdoOra = +tartam.split(':')[0];
		let tartamIdoPerc = +tartam.split(':')[1];

		let ora =  kezdoIdoOra + tartamIdoOra;
		let perc = kezdoIdoPerc + tartamIdoPerc;

		if ((kezdoIdoPerc + tartamIdoPerc) >= 60) {
			ora += 1
			perc = kezdoIdoPerc + tartamIdoPerc - 60;
		}
		
		let idopont = '';

		if (ora >= 24) {
			ora -= 24;
		}

		if (perc < 10) {
			idopont = `${ora}:0${perc}`
		} else {
			idopont = `${ora}:${perc}`
		}

		return idopont;     
	}

	useEffect(() => {	
		console.log(viszony[0]);
		console.log(viszony[0].idotartamAllomasig);
		let tartam = viszony[0].idotartamAllomasig;

		for (let i = 0; i < tartam.length; i++) {
			let pont = erkezesiIdoSzamol(idoIntervallumok[i], tartam[i]);
			let tomb = idoIntervallumok.push(pont);
			setIdoIntervallumok(tomb);
		}
				
		let atad = [];
		

		for (let i = 0; i < viszony[0].allomasok.length; i++) {
			const objektum = { allomas: viszony[0].allomasok[i], tartam: idoIntervallumok[i]}
			atad.push(objektum);
			
		}

		let tomb = [];

		for (let i = 0; i < viszony[0].idopontok.length; i++) {
			const indIdo = erkezesiIdoSzamol(viszony[0].idopontok[i].split('(')[0], idoIntervallumok[0]);
			const indIdoHonnan = erkezesiIdoSzamol(viszony[0].idopontok[i].split('(')[0], idoIntervallumok[viszony[0].allomasok.indexOf(hon)]);
			const erkIdoHova = erkezesiIdoSzamol(viszony[0].idopontok[i].split('(')[0], idoIntervallumok[viszony[0].allomasok.indexOf(hov)]);
			const erkIdo = erkezesiIdoSzamol(viszony[0].idopontok[i].split('(')[0], idoIntervallumok[idoIntervallumok.length - 1]);
			const idopontObj = { indIdo, indIdoHonnan, erkIdoHova, erkIdo };
			tomb.push(idopontObj);
		}

		console.log(tomb);
		
		
		setViszonylatok(atad)
		setIdopontok(tomb);
		setIndulo(viszony[0].induloallomas)
		setCel(viszony[0].celallomas)
		// setIdopontok(viszony[0].idopontok);
		setHonnan(hon);
		setHonnanIndex(viszony[0].allomasok.indexOf(hon))
		setHova(hov);
		setHovaIndex(viszony[0].allomasok.indexOf(hov))
	}, []);

	const foglalas = (tetel) => {
		console.log(tetel);
		localStorage.setItem('foglalas', JSON.stringify({ viszonylat: viszony[0], idopont: tetel.indIdo }));
		window.location.href = `/foglalas`;
	}

	return (
		<div className="viszonylat-tarto">
			<div className="cim">{ honnan } ↪  { hova }</div>
			<div className="tartalom">
				<div className="bal-tarto" style={ { backgroundColor: 'green' } }>
					<table>
						<tbody>
							{viszonylatok.map((elem, index) => {
								return(
									<tr key={index}>
										<td style={ { textAlign: 'right' } }>{ elem.allomas }</td>
										{ honnanIndex - 1 < index && index < hovaIndex + 1 ? 
											<>
												<td>🔴</td>
												<td style={{color: 'red'}}>{elem.tartam}</td>
											</>
											:
											<>
												<td>🔵</td>
												<td style={{color: 'blue'}}>{elem.tartam}</td>
											</>
										}
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
				<div className="jobb-tarto" style={ { backgroundColor: 'blue' } }>
					<div className="allomasok">
						<span>Viszonylat Honnan</span>
						<span>Honnan</span>
						<span>Hova</span>
						<span>Viszonylat Hova</span>
						<span>Teljes Ár</span>
						<span>Foglalás</span>
					</div>
					<div className="allomasok">
						<span>{indulo}</span>
						<span>{honnan}</span>
						<span>{hova}</span>
						<span>{cel}</span>
						<span></span>
						<span></span>
					</div>
					{idopontok.map((elem, index) => {
						return (
							<div className="allomasok" key={ index }>
								<span>{elem.indIdo}</span>
								<span>{elem.indIdoHonnan}</span>
								<span>{elem.erkIdoHova}</span>
								<span>{elem.erkIdo}</span>
								<span>3500 Ft</span>
								<span><button onClick={() => foglalas(elem)}>Foglalás</button></span>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	);
}

export default Viszonylat;