// Datos de clusters con estrategia (sin necesidad de cálculo)
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
        definicion: "Gasto mensual cuota medio, ingresos anuales bajos, perfil: Clientes de ingresos y gastos bajos, posiblemente en etapas iniciales de vida o con recursos limitados."
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
        definicion: "Gasto mensual alto, ingresos anuales altos, perfil: Profesionales con ingresos y estilo de vida acomodados."
    },
    {
        nombre: "Cluster 2-0",
        estrategia: {
            titulo: "Cluster 2-0: Clientes mayores, ahorradores y con ingresos moderados",
            objetivo: "Incentivar el gasto moderado con beneficios tangibles y relevantes.",
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
            impacto: "Aumentar ligeramente el ticket promedio sin incomodar, mejorar la percepción de valor."
        },
        definicion: "Gasto mensual medio, ingresos anuales moderados, perfil: Clientes mayores, posiblemente ahorradores o con gastos controlados."
    },
    {
        nombre: "Cluster 2-1",
        estrategia: {
            titulo: "Cluster 2-1: Adultos en etapa media con ingresos altos",
            objetivo: "Fomentar la transición hacia clientes premium (Cluster 1).",
            beneficios: `
                <ul>
                    <li>Membresías Plata: Descuentos en productos premium</li>
                    <li>Ofertas para incrementar su gasto promedio mensual</li>
                    <li>Beneficios familiares: bonificaciones por referidos</li>
                </ul>
            `,
            dinamica: `
                <ul>
                    <li>Incentivos por aumentar el gasto: “Aumenta tu gasto en un 20% y recibe 10% extra.”</li>
                    <li>Gamificación social: competencias entre clientes similares</li>
                </ul>
            `,
            impacto: "Generar un comportamiento aspiracional que los mueva al cluster premium."
        },
        definicion: "Gasto mensual medio, ingresos anuales altos, perfil: Adultos en etapa media de la vida, con hábitos de gasto prudentes."
    }
];

// Al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Botón para pasar de la pantalla inicial a la pantalla de selección
    document.getElementById('btn-calcular').addEventListener('click', () => {
        document.getElementById('pantalla-inicial').style.display = 'none';
        document.getElementById('pantalla-seleccion').style.display = 'flex';
        document.body.style.overflow = 'auto';
    });

    // Al hacer clic en una tarjeta de cluster
    document.querySelectorAll('.cards .card').forEach(card => {
        card.addEventListener('click', () => {
            const clusterId = card.getAttribute('data-cluster');

            // Buscar el cluster por nombre
            const clusterSeleccionado = clusters.find(c => c.nombre.includes(clusterId));

            if (clusterSeleccionado) {
                document.getElementById('pantalla-seleccion').style.display = 'none';
                document.getElementById('pantalla-cluster').style.display = 'block';

                document.getElementById('resultado-cluster').innerHTML = `
                    <h3>${clusterSeleccionado.estrategia.titulo}</h3>
                    <p><strong>Objetivo:</strong> ${clusterSeleccionado.estrategia.objetivo}</p>
                    <div class="beneficios">
                        <strong>Beneficios:</strong> ${clusterSeleccionado.estrategia.beneficios}
                    </div>
                    <div class="dinamica">
                        <strong>Dinámica:</strong> ${clusterSeleccionado.estrategia.dinamica}
                    </div>
                    <div class="impacto">
                        <strong>Impacto Esperado:</strong> ${clusterSeleccionado.estrategia.impacto}
                    </div>
                    <p><strong>Definición de perfil:</strong> ${clusterSeleccionado.definicion}</p>
                `;
            }
        });
    });
});
