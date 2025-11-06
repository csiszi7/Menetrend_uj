async function letrehoz(event) {
    event.preventDefault();
    const jarat = document.querySelector('#jarat').value;
    const idotartamok = document.querySelector('#idotartamok').value;
    const kedvezmenyek = document.querySelector('#kedvezmenyek').value;
    const kortablak = document.querySelector('#kortablak').value;
    const allomasok = document.querySelector('#allomasok').value;
    const idopontok = document.querySelector('#idopontok').value;
    const induloallomas = document.querySelector('#induloallomas').value;
    const celallomas = document.querySelector('#celallomas').value;
    const indulasideje = document.querySelector('#indulasideje').value;
    const visszaideje = document.querySelector('#visszaideje').value;
    const helyjegy = document.querySelector('#helyjegy').value;
    const klima = document.querySelector('#klima').value;
;
    // const peldanySzam = document.querySelector('#peldanySzam').value;
    // const kep = document.querySelector('#kep').value;

    const response = await fetch('/api/new-schedule', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
        jarat, 
        allomasok, 
        kortablak, 
        idotartamok, 
        idopontok, 
        kedvezmenyek, 
        induloallomas, 
        celallomas, 
        indulasideje, 
        visszaideje, 
        klima, 
        helyjegy 
        }),
    });

    console.log(response);

    if (response.ok) {
        const resp = await response.json();
        window.alert(resp.msg);
        window.location.href = '/api/schedules-backend';
    }
}
