 // Generar partículas de fondo
        function crearParticulas() {
            const particlesContainer = document.getElementById('particles');
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDuration = (Math.random() * 15 + 20) + 's';
                particle.style.animationDelay = Math.random() * 5 + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Corazones flotantes al hover
        function crearCorazonesFlotantes(event) {
            const heartContainer = document.getElementById('heartContainer');
            const rect = heartContainer.getBoundingClientRect();
            
            for (let i = 0; i < 15; i++) {
                const heart = document.createElement('div');
                heart.classList.add('floating-heart');
                heart.textContent = '❤️';
                heart.style.left = rect.left + rect.width / 2 + 'px';
                heart.style.top = rect.top + rect.height / 2 + 'px';
                
                const angle = (i / 15) * Math.PI * 2;
                const distance = 150 + Math.random() * 80;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                
                heart.style.setProperty('--tx', tx + 'px');
                heart.style.setProperty('--ty', ty + 'px');
                
                document.body.appendChild(heart);
                
                setTimeout(() => heart.remove(), 2500);
            }
        }

        // Event listeners
        document.getElementById('heartContainer').addEventListener('mouseenter', crearCorazonesFlotantes);

        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const password = document.getElementById('password').value;
            
            // Aquí puedes agregar validación de contraseña
            if (password == 'Helado' || password == 'helado') {
                /* alert('¡Bienvenido al corazón! 💕');
                document.getElementById('loginForm').reset(); */
                window.location.href = 'home.html';
            }
        });

        // Inicializar
        window.addEventListener('load', crearParticulas);