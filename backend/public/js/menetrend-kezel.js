async function torles(id) {
    const response = await fetch(`/api/schedules-backend/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        window.alert('Sikeres törlés!');
        window.location.href = '/api/schedules-backend';
    }
}
