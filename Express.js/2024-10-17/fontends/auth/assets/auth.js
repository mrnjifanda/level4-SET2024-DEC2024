function getUrlPage(name) {
    return 'http://127.0.0.1:5500/fontends/auth/' + name + '.html';
}

function logout() {
    localStorage.removeItem('token');
    window.location.href = getUrlPage('login');
}

function isAuth(isDashboardPage = false) {
    const token = localStorage.getItem('token');
    if (isDashboardPage && !token) {
        window.location.href = getUrlPage('login');
        return false;
    }

    if (!isDashboardPage && token) {
        window.location.href = getUrlPage('dashboard');
        return false;
    }
}

const form = document.querySelector('.form-submit');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const isRegister = form.classList.contains('form-register');
        const formData = new FormData(form);
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        };
        if (isRegister) {
            data.first_name = formData.get('first_name');
            data.last_name = formData.get('last_name');
            data.username = formData.get('username');
            data.password_confirm = formData.get('password_confirm');
        }

        try {
            const request = await fetch(form.action, {
                method: form.method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (request.ok) {
                const response = await request.json();
                if (isRegister) {
                    window.location.href = getUrlPage('login')
                } else {
                    localStorage.setItem('token', response.token);
                    window.location.href = getUrlPage('dashboard')
                }
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    });
}
