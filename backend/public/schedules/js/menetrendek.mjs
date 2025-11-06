async function feloltes(event) {
    event.preventDefault();
    try {
        const response = await fetch(`/api/schedules-backend/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nev, ar, leiras, kep1, kep2, kep3 }),
        });

        const vissza = await response.json();

        if (response.ok) {
            window.alert(vissza.msg);
            window.location.href = '/api/schedules-backend';
        } else {
            window.alert(vissza.msg);
        }
    } catch (error) {
        console.log(error.message);
    }
}

async function modositas(event) {
    event.preventDefault();

    try {
        let id = document.querySelector('#id').value;
        let nev = document.querySelector('#nev').value;
        let ar = document.querySelector('#ar').value;
        let leiras = document.querySelector('#leiras').value;
        let kep1 = document.querySelector('#kep1').value;
        let kep2 = document.querySelector('#kep2').value;
        let kep3 = document.querySelector('#kep3').value;
        let kepek = [kep1, kep2, kep3];

        const response = await fetch('/api/one-schedule-backend', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, nev, ar, leiras, kepek }),
        });

        const valasz = await response.json();

        if (response.ok) {
            window.alert(valasz.msg);
            window.location.href = '/api/schedules-backend';
        }
    } catch (error) {
        console.log(error.message);
    }
}