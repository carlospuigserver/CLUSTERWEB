// script.js

// Datos de clusters con estrategia
const clusters = [
    {
        nombre: "Cluster 1",
        estrategia: {
            presentacion: "Enfocado en ahorro y optimización",
            titulo: "Optimiza tu experiencia sin gastar de más",
            resumen: "Tu perfil: Clientes jóvenes con hábitos de consumo moderados. Te ofrecemos opciones que se ajustan a tus necesidades.",
            beneficios: `
                <ul>
                    <li>Bono de datos gratuito por responder encuestas.</li>
                    <li>Guía: "5 trucos para ahorrar en tu plan".</li>
                    <li>Comparativa: "¿Estás usando la cantidad correcta de datos? Descúbrelo".</li>
                </ul>
            `,
            llamadoAccion: {
                texto: "Optimiza mi plan ahora",
                enlace: "cluster1.html" // Redirigir a página específica
            },
            resultado: "Mostrarles cómo ajustar su plan para ahorrar."
        },
        definicion: "Gasto mensual cuota medio, ingresos anuales bajos, perfil: Clientes de ingresos y gastos bajos."
    },
    {
        nombre: "Cluster 2",
        estrategia: {
            presentacion: "Enfocado en productividad y valor añadido",
            titulo: "Conéctate sin límites, trabaja sin interrupciones",
            resumen: "Tu perfil: Profesionales que demandan velocidad y estabilidad. Mejoramos tu experiencia con servicios avanzados.",
            beneficios: `
                <ul>
                    <li>Acceso a herramientas de productividad (como almacenamiento en la nube).</li>
                    <li>Incremento de velocidad temporal gratuito por ser cliente Pro.</li>
                    <li>Invitación a probar nuevos servicios antes del lanzamiento.</li>
                </ul>
            `,
            llamadoAccion: {
                texto: "Descubre herramientas para ser más productivo",
                enlace: "cluster2.html" // Redirigir a página específica
            },
            resultado: "Redirigir a un configurador de servicios personalizados."
        },
        definicion: "Gasto mensual alto, ingresos anuales altos, perfil: Profesionales con ingresos acomodados."
    },
    {
        nombre: "Cluster 3",
        estrategia: {
            presentacion: "Enfocado en estabilidad y soluciones familiares",
            titulo: "Hogar conectado, siempre confiable",
            resumen: "Tu perfil: Usuarios con necesidades familiares. Descubre cómo optimizar la conectividad en tu hogar.",
            beneficios: `
                <ul>
                    <li>Añade una línea adicional y obtén un 15% de descuento.</li>
                    <li>Configura tu red para la mejor experiencia en streaming familiar.</li>
                    <li>Soporte técnico personalizado para dispositivos domésticos.</li>
                </ul>
            `,
            llamadoAccion: {
                texto: "Configurar mi hogar conectado",
                enlace: "cluster3.html" // Redirigir a página específica
            },
            resultado: "Proporcionar recomendaciones específicas para mejorar su red doméstica."
        },
        definicion: "Gasto mensual medio, ingresos anuales moderados, clientes mayores y ahorradores."
    },
    {
        nombre: "Cluster 4",
        estrategia: {
            presentacion: "Enfocado en exclusividad y prestigio",
            titulo: "Un mundo de privilegios a tu alcance",
            resumen: "Tu perfil: Clientes exclusivos que merecen lo mejor. Disfruta de servicios y beneficios diseñados solo para ti.",
            beneficios: `
                <ul>
                    <li>Invitaciones a eventos privados y acceso prioritario a productos.</li>
                    <li>Línea de atención VIP para resolver tus dudas en minutos.</li>
                    <li>Aumento de velocidad gratuito como agradecimiento por tu lealtad.</li>
                </ul>
            `,
            llamadoAccion: {
                texto: "Explora tus beneficios Elite",
                enlace: "cluster4.html" // Redirigir a página específica
            },
            resultado: "Mostrar un portal exclusivo con servicios destacados."
        },
        definicion: "Gasto mensual medio, ingresos altos, adultos en etapa media con hábitos de gasto prudentes."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const btnBienvenido = document.getElementById('btn-bienvenido');
    btnBienvenido.style.pointerEvents = 'auto';
    btnBienvenido.style.position = 'relative';
    btnBienvenido.style.zIndex = '9999';

    // Al hacer clic en "bienvenido", vamos a la pantalla intermedia
    btnBienvenido.addEventListener('click', () => {
        document.getElementById('pantalla-inicial').style.display = 'none';
        document.getElementById('pantalla-intermedia').style.display = 'block';
        document.body.style.overflow = 'auto';
    });

    // Al hacer clic en "Continuar" en la pantalla intermedia, vamos a la selección de grupo
    document.getElementById('btn-continuar').addEventListener('click', () => {
        document.getElementById('pantalla-intermedia').style.display = 'none';
        document.getElementById('pantalla-seleccion').style.display = 'flex';
        document.body.style.overflow = 'auto';
    });

    // Al seleccionar un grupo, mostramos el loader y luego el resultado del cluster
    document.querySelectorAll('.cards .card').forEach(card => {
        card.addEventListener('click', () => {
            const clusterId = card.getAttribute('data-cluster');
            const clusterSeleccionado = clusters.find(c => c.nombre === `Cluster ${parseInt(clusterId) + 1}`);

            if (clusterSeleccionado) {
                // Mostrar loader
                document.getElementById('pantalla-seleccion').style.display = 'none';
                document.getElementById('loader').style.display = 'flex';

                // Simulación de tiempo de carga (2 segundos)
                setTimeout(() => {
                    document.getElementById('loader').style.display = 'none';
                    document.getElementById('pantalla-cluster').style.display = 'flex';

                    // Mostrar datos del cluster
                    const resultadoCluster = document.getElementById('resultado-cluster');
                    resultadoCluster.innerHTML = `
                        <div class="card">
                            <div class="card-content">
                                <p class="card-title">${clusterSeleccionado.estrategia.titulo}</p>
                                <p class="card-para"><strong>Presentación:</strong> ${clusterSeleccionado.estrategia.presentacion}</p>
                                <p class="card-para"><strong>Resumen personalizado:</strong> ${clusterSeleccionado.estrategia.resumen}</p>
                                <p class="card-para"><strong>Beneficios destacados:</strong> ${clusterSeleccionado.estrategia.beneficios}</p>
                                <p class="card-para"><strong>Llamado a la acción:</strong></p>
                                <button class="btn-accion" data-enlace="${clusterSeleccionado.estrategia.llamadoAccion.enlace}">${clusterSeleccionado.estrategia.llamadoAccion.texto}</button>
                            </div>
                        </div>
                    `;
                    
                    // Agregar evento al botón de acción
                    const btnAccion = document.querySelector('.btn-accion');
                    btnAccion.addEventListener('click', () => {
                        const enlace = btnAccion.getAttribute('data-enlace');
                        if (enlace) {
                            window.location.href = enlace;
                        }
                    });
                }, 2000); // Cambia este tiempo según sea necesario
            }
        });
    });
});
