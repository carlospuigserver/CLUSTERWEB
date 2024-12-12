// Datos de clusters con estrategia y contenido para las tarjetas
const clusters = [
    {
        nombre: "Cluster 0",
        estrategia: {
            titulo: "Cluster 0: Clientes de ingresos y gastos bajos",
            objetivo: "Incrementar el volumen de compras a través de incentivos económicos y accesibles.",
            beneficios: `
                <ul>
                    <li>Descuentos de entrada (20% en la segunda compra del mes)</li>
                    <li>Bundles económicos</li>
                    <li>Puntos iniciales al registrarse</li>
                </ul>
            `,
            dinamica: `
                <ul>
                    <li>Recompensas inmediatas por cada gasto recurrente</li>
                    <li>Juegos sencillos: “Completa X compras al mes y gana un descuento adicional.”</li>
                </ul>
            `,
            impacto: "Aumentar la retención mediante pequeños incentivos frecuentes, generar lealtad."
        },
        definicion: "Gasto mensual cuota medio, ingresos anuales bajos, perfil: Clientes de ingresos y gastos bajos.",
        gastoMedioMensual: "45€",
        ingresosAnuales: "21.500€",
        edadPromedio: "29 años",
        tarjetas: [
            {
                titulo: "Descuentos Especiales",
                descripcion: "Obtén un 20% de descuento en tu segunda compra cada mes."
            },
            {
                titulo: "Bundles Económicos",
                descripcion: "Accede a paquetes de productos a precios reducidos."
            },
            {
                titulo: "Puntos de Fidelidad",
                descripcion: "Gana puntos al registrarte y canjéalos por recompensas."
            }
        ]
    },
    {
        nombre: "Cluster 1",
        estrategia: {
            titulo: "Cluster 1: Profesionales acomodados con ingresos altos",
            objetivo: "Convertirlos en embajadores leales mediante recompensas VIP.",
            beneficios: `
                <ul>
                    <li>Experiencias exclusivas: eventos privados, lanzamientos especiales</li>
                    <li>Reconocimiento público: “Clientes Élite”</li>
                    <li>Gestores personales: Soporte premium</li>
                </ul>
            `,
            dinamica: `
                <ul>
                    <li>Competencia mensual: “Los 10 clientes con mayor gasto reciben una experiencia VIP.”</li>
                    <li>Programas de puntos avanzados con bonos significativos</li>
                    <li>Comunidades exclusivas para networking</li>
                </ul>
            `,
            impacto: "Incrementar la frecuencia de compra y la lealtad, generar promoción orgánica."
        },
        definicion: "Gasto mensual alto, ingresos anuales altos, perfil: Profesionales con ingresos acomodados.",
        gastoMedioMensual: "47€",
        ingresosAnuales: "43.500€",
        edadPromedio: "61 años",
        tarjetas: [
            {
                titulo: "Eventos Exclusivos",
                descripcion: "Accede a eventos privados y lanzamientos especiales."
            },
            {
                titulo: "Soporte Premium",
                descripcion: "Recibe asistencia personalizada de gestores dedicados."
            },
            {
                titulo: "Reconocimiento VIP",
                descripcion: "Sé reconocido como cliente élite y disfruta de beneficios únicos."
            }
        ]
    },
    {
        nombre: "Cluster 2-0",
        estrategia: {
            titulo: "Cluster 2-0: Clientes mayores, ahorradores con ingresos moderados",
            objetivo: "Incentivar el gasto moderado con beneficios tangibles.",
            beneficios: `
                <ul>
                    <li>Recompensas acumuladas</li>
                    <li>Acceso anticipado a ofertas</li>
                    <li>Beneficios prácticos: entregas gratuitas, productos extra</li>
                </ul>
            `,
            dinamica: `
                <ul>
                    <li>Promociones acumulativas: “Gasta €100/trim y obtén €20 de bono.”</li>
                    <li>Competencias por gasto regular con beneficios adicionales</li>
                </ul>
            `,
            impacto: "Aumentar ligeramente el ticket promedio, mejorar la percepción de valor."
        },
        definicion: "Gasto mensual medio, ingresos anuales moderados, clientes mayores y ahorradores.",
        gastoMedioMensual: "48€",
        ingresosAnuales: "72.000€",
        edadPromedio: "44 años",
        tarjetas: [
            {
                titulo: "Bonificaciones Acumulativas",
                descripcion: "Gasta €100 cada trimestre y recibe €20 de bono."
            },
            {
                titulo: "Acceso Anticipado",
                descripcion: "Disfruta de ofertas exclusivas antes que el público general."
            },
            {
                titulo: "Entregas Gratuitas",
                descripcion: "Recibe tus productos favoritos con entregas sin costo."
            }
        ]
    },
    {
        nombre: "Cluster 2-1",
        estrategia: {
            titulo: "Cluster 2-1: Adultos en etapa media con ingresos altos",
            objetivo: "Fomentar la transición hacia clientes premium (Cluster 1).",
            beneficios: `
                <ul>
                    <li>Membresías Plata: Descuentos en productos premium</li>
                    <li>Ofertas para incrementar el gasto promedio mensual</li>
                    <li>Beneficios familiares: bonificaciones por referidos</li>
                </ul>
            `,
            dinamica: `
                <ul>
                    <li>Incentivos: “Aumenta tu gasto en un 20% y recibe 10% extra.”</li>
                    <li>Gamificación social: competencias entre clientes similares</li>
                </ul>
            `,
            impacto: "Generar comportamiento aspiracional hacia el cluster premium."
        },
        definicion: "Gasto mensual medio, ingresos altos, adultos en etapa media con hábitos de gasto prudentes.",
        gastoMedioMensual: "58€",
        ingresosAnuales: "83.000€",
        edadPromedio: "52 años",
        tarjetas: [
            {
                titulo: "Membresías Plata",
                descripcion: "Descuentos exclusivos en productos premium."
            },
            {
                titulo: "Bonificaciones por Referidos",
                descripcion: "Obtén beneficios al referir a nuevos clientes."
            },
            {
                titulo: "Incentivos de Gasto",
                descripcion: "Aumenta tu gasto en un 20% y recibe un 10% extra."
            }
        ]
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

    // Al seleccionar un grupo, mostramos el loader y luego la pantalla final con las tarjetas
    document.querySelectorAll('.cards .card').forEach(card => {
        card.addEventListener('click', () => {
            const clusterId = card.getAttribute('data-cluster');
            const clusterSeleccionado = clusters.find(c => c.nombre.includes(clusterId));

            if (clusterSeleccionado) {
                // Mostrar loader
                document.getElementById('pantalla-seleccion').style.display = 'none';
                document.getElementById('loader').style.display = 'flex';

                // Simulación de tiempo de carga (2 segundos)
                setTimeout(() => {
                    document.getElementById('loader').style.display = 'none';
                    document.getElementById('pantalla-final').style.display = 'flex';
                    document.body.style.overflow = 'auto';

                    // Mostrar datos del cluster en las tarjetas
                    const tarjetas = clusterSeleccionado.tarjetas;
                    const cardsFinal = document.querySelectorAll('.cards-final .card');

                    cardsFinal.forEach((cardFinal, index) => {
                        if (tarjetas[index]) {
                            cardFinal.querySelector('.card-title').textContent = tarjetas[index].titulo;
                            cardFinal.querySelector('.card-para').textContent = tarjetas[index].descripcion;
                        } else {
                            // Si no hay suficiente contenido, vaciar los campos
                            cardFinal.querySelector('.card-title').textContent = '';
                            cardFinal.querySelector('.card-para').textContent = '';
                        }
                    });

                }, 2000); // Cambia este tiempo según sea necesario
            }
        });
    });

    // Funcionalidad del botón "Regresar" en la pantalla final
    const btnRegresarFinal = document.getElementById('btn-regresar-final');
    if (btnRegresarFinal) {
        btnRegresarFinal.addEventListener('click', () => {
            document.getElementById('pantalla-final').style.display = 'none';
            document.getElementById('pantalla-seleccion').style.display = 'flex';
        });
    }
});
