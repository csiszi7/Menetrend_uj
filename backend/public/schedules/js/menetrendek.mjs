async function feltoltes(event) {
    event.preventDefault();

    try {
        // Alap mezők beolvasása
        const jarat = document.querySelector("#jarat").value;
        const induloallomas = document.querySelector("#induloallomas").value;
        const celallomas = document.querySelector("#celallomas").value;

        // Többes kijelölés beolvasása
        const allomasokSelect = document.querySelector("#allomasok");
        const allomasok = Array.from(allomasokSelect.selectedOptions).map(o => o.value);

        const idopontok = document.querySelector("#idopontok").value.split(","); // ha vesszővel választod el
        const kedvezmeny = document.querySelector("#kedvezmeny").value;
        const klima = document.querySelector("#klima").checked; // ha checkbox/radio
        const helyjegy = document.querySelector("#helyjegy").checked;

        const kep1 = document.querySelector("#kep1").value;
        const kep2 = document.querySelector("#kep2").value;
        const kep3 = document.querySelector("#kep3").value;
        const kepek = [kep1, kep2, kep3];

        // Küldés backend felé
        const response = await fetch(`/api/new-schedule`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                jarat,
                induloallomas,
                celallomas,
                allomasok,
                idopontok,
                kedvezmeny,
                klima,
                helyjegy,
                kepek
            }),
        });

        const vissza = await response.json();

        if (response.ok) {
            alert(vissza.msg);
            window.location.href = '/api/schedules-backend';
        } else {
            alert(vissza.msg);
        }

    } catch (error) {
        console.error('Hiba:', error.message);
    }
}
