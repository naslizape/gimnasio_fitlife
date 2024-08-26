document.addEventListener('DOMContentLoaded', () => {
    // Mostrar servicios
    const btnServicios = document.getElementById('btnServicios');
    btnServicios.addEventListener('click', () => {
        document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' });
    });

    // Manejo del formulario de inscripción
    const inscripcionForm = document.getElementById('inscripcionForm');
    inscripcionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm(inscripcionForm)) {
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const plan = document.getElementById('plan').value;

            console.log('Formulario de Inscripción Enviado');
            console.log(`Nombre: ${nombre}`);
            console.log(`Correo Electrónico: ${email}`);
            console.log(`Teléfono: ${telefono}`);
            console.log(`Plan Seleccionado: ${plan}`);
        } else {
            console.log('Formulario de Inscripción con errores');
        }
    });

    // Manejo del formulario de contacto
    const contactoForm = document.getElementById('contactoForm');
    contactoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombreContacto = document.getElementById('nombreContacto').value;
        const emailContacto = document.getElementById('emailContacto').value;
        const mensaje = document.getElementById('mensaje').value;

        console.log('Formulario de Contacto Enviado');
        console.log(`Nombre: ${nombreContacto}`);
        console.log(`Correo Electrónico: ${emailContacto}`);
        console.log(`Mensaje: ${mensaje}`);
    });

    // Manejo del formulario de login
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const usuario = document.getElementById('usuario').value;
        const password = document.getElementById('password').value;

        console.log('Formulario de Login Enviado');
        console.log(`Usuario: ${usuario}`);
        console.log(`Contraseña: ${password}`);
    });

    function validateForm(form) {
        let isValid = true;
        form.querySelectorAll('input, select').forEach(input => {
            if (!input.value) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#CCCCCC';
            }
        });
        return isValid;
    }
});