async function modosit(event, id) {
    event.preventDefault();
    const jarat = document.querySelector('#jarat').value;
    const nap = document.querySelector('#nap').value;
    const kedvezmeny = document.querySelector('#kedvezmeny').value;
    const indulasiido = document.querySelector('#indulasiido').value;
    const erkezesiido = document.querySelector('#erkezesiido').value;
    const ar = document.querySelector('#ar').value;

    const response = await fetch(`/api/schedules-backend/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            jarat,
            nap,
            kedvezmeny,
            ar,
            indulasiido,
            erkezesiido,
        }),
    });

    if (response.ok) {
        const resp = await response.json();
        window.alert(resp.msg);
        window.location.href = '/api/schedules-backend';
    }
}
