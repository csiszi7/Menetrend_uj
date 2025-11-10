async function modosit(event, id) {
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
    const response = await fetch(`/api/schedules-backend/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            jarat,
            nap,
            kedvezmenyek,
            ar,
            indulasiido,
            erkezesiido,
            idotartamok,
            kortablak,
            allomasok,
            idopontok,
            induloallomas,
            celallomas,
            indulasideje,
            visszaideje,
            helyjegy,
            klima
        }),
    });

    if (response.ok) {
        const resp = await response.json();
        window.alert(resp.msg);
        window.location.href = '/api/schedules-backend';
    }
}
