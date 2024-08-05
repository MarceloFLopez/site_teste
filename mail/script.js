const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_dsqhi3b';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'INSCREVA-SE';
                alert('Enviado!');
                location. reload();
            }, (err) => {
                btn.value = 'INSCREVA-SE';
                alert(JSON.stringify(err));
            });
    });