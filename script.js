// Datos promedio de cada cluster:
const clusters = [
    {
        nombre: "Cluster 0",
        edad: 29.0,
        ingresos: 21406.24,
        gasto: 45.41,
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
        }
    },
    {
        nombre: "Cluster 1",
        edad: 52.2,
        ingresos: 82913.95,
        gasto: 58.02,
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
        }
    },
    {
        nombre: "Cluster 2-0",
        edad: 61.0,
        ingresos: 43520.77,
        gasto: 46.58,
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
        }
    },
    {
        nombre: "Cluster 2-1",
        edad: 43.5,
        ingresos: 72360.64,
        gasto: 47.94,
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
        }
    }
];

// Función para calcular la distancia al cluster
function distanciaEuclidea(edadUser, ingresosUser, gastoUser, c) {
    return Math.sqrt(
        Math.pow(edadUser - c.edad, 2) +
        Math.pow(ingresosUser - c.ingresos, 2) +
        Math.pow(gastoUser - c.gasto, 2)
    );
}

// Al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-calcular').addEventListener('click', () => {
        // Ocultamos la pantalla inicial
        document.getElementById('pantalla-inicial').style.display = 'none';
        // Mostramos la pantalla del formulario
        document.getElementById('pantalla-formulario').style.display = 'flex';
        // Permitimos scroll en la segunda pantalla (si es necesario)
        document.body.style.overflow = 'auto';
    });

    document.getElementById('form-datos').addEventListener('submit', (e) => {
        e.preventDefault();
        const edad = parseFloat(document.getElementById('edad').value);
        const ingresos = parseFloat(document.getElementById('ingresos').value);
        const gasto = parseFloat(document.getElementById('gasto').value);

        // Calcular la distancia a cada cluster
        let distancias = clusters.map((c) => {
            return {
                nombre: c.nombre,
                dist: distanciaEuclidea(edad, ingresos, gasto, c),
                estrategia: c.estrategia
            };
        });

        // Ordenar por distancia mínima
        distancias.sort((a, b) => a.dist - b.dist);

        // Tomar el cluster con la menor distancia
        const clusterAsignado = distancias[0];

        // Mostrar la pantalla de cluster con la estrategia
        document.getElementById('pantalla-formulario').style.display = 'none';
        document.getElementById('pantalla-cluster').style.display = 'block';

        document.getElementById('resultado-cluster').innerHTML = `
            <h3>${clusterAsignado.estrategia.titulo}</h3>
            <p><strong>Objetivo:</strong> ${clusterAsignado.estrategia.objetivo}</p>
            <div class="beneficios">
                <strong>Beneficios:</strong> ${clusterAsignado.estrategia.beneficios}
            </div>
            <div class="dinamica">
                <strong>Dinámica:</strong> ${clusterAsignado.estrategia.dinamica}
            </div>
            <div class="impacto">
                <strong>Impacto Esperado:</strong> ${clusterAsignado.estrategia.impacto}
            </div>
        `;
    });
});
