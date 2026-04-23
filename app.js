const bebidas = [
  { nombre: "AQUARIUS MANZANA", factor: 4.398791047 },
  { nombre: "AQUARIUS MANZANA JS", factor: 4.398791047 },
  { nombre: "AQUARIUS NARANJA", factor: 4.398504508 },
  { nombre: "AQUARIUS NARANJA JS", factor: 4.398504508 },
  { nombre: "AQUARIUS PERA", factor: 4.398472441 },
  { nombre: "AQUARIUS PERA JS", factor: 4.398472441 },
  { nombre: "AQUARIUS POMELO", factor: 4.39915288 },
  { nombre: "AQ POMELO CON JARABE SIMPLE", factor: 4.39915288 },
  { nombre: "AQUARIUS POMELO ROSADO", factor: 4.397537379 },
  { nombre: "AQUARIUS POMELO ROSADO JS", factor: 4.397537379 },
  { nombre: "AQUARIUS LIMONADA", factor: 4.398117606 },
  { nombre: "AQUARIUS LIMONADA JS", factor: 4.398117606 },
  { nombre: "AQUARIUS UVA", factor: 4.398326707 },
  { nombre: "AQURIUS UVA JS", factor: 4.398326707 },
  { nombre: "AQUARIUS MANZANA ZERO", factor: 4.399956 },
  { nombre: "CARIOCA MANZANA", factor: 2.999794573 },
  { nombre: "HI-C NARANJA DIET", factor: 2.999816501 },
  { nombre: "CEPITA 100% MANZANA", factor: 2.998503359 },
  { nombre: "CEPITA DURAZNO 20%", factor: 2.998792511 },
  { nombre: "CEPITA DURAZNO 20% JS", factor: 2.998792511 },
  { nombre: "CEPITA FRESH NARANJA", factor: 4.999263008 },
  { nombre: "CEPITA FRESH POMELO", factor: 3.998985029 },
  { nombre: "CEPITA FRESH MANZANA", factor: 5.49992301 },
  { nombre: "CEP MANZANA 25%", factor: 2.998772974 },
  { nombre: "CEP MANZ 25% JS", factor: 2.998772974 },
  { nombre: "CEPITA MANZANA 0%", factor: 2.999438503 },
  { nombre: "CEPITA MANZANA ROJA", factor: 2.99842051 },
  { nombre: "CEPITA MULTIFRUTA 25% JS", factor: 3.00002449 },
  { nombre: "CEPITA MULTIFRUTA 25%", factor: 3.00002449 },
  { nombre: "CEPITA NARANJA CERO", factor: 3.000049868 },
  { nombre: "CEPITA NARANJA 25% NUTRI JMAF", factor: 2.998853497 },
  { nombre: "CEPITA NARANJA 25% NUTRI JS", factor: 2.998853497 },
  { nombre: "CEP NARANJA 20% HF", factor: 2.998648823 },
  { nombre: "CEP NARANJA 20% HF JS", factor: 2.998648823 },
  { nombre: "CEPITA NARANJA 20% TETRA JMAF", factor: 2.998648823 },
  { nombre: "CEPITA NARANJA 20% TETRA JS", factor: 2.998648823 },
  { nombre: "CEPITA MANGO FRUTILLA", factor: 2.99928278 },
  { nombre: "CEPITA MANGO FRUTILLA JS", factor: 2.99928278 },
  { nombre: "CEPITA MANDARINA ANANA", factor: 2.999305661 },
  { nombre: "CEPITA MANDARINA ANANA JS", factor: 2.999305661 },
  { nombre: "COCA COLA", factor: 1 },
  { nombre: "COCA-COLA OREO ZERO", factor: 6.399947488 },
  { nombre: "COCA COLA JARABE JMAF", factor: 6.4 },
  { nombre: "COCA COLA JARABE JS", factor: 6.4 },
  { nombre: "COCA COLA COFFEE", factor: 6.4 },
  { nombre: "COCA COLA LIGHT", factor: 6.399947488 },
  { nombre: "COCA COLA SIN AZUCAR", factor: 6.399947488 },
  { nombre: "COCA-COLA ZERO", factor: 6.399947488 },
  { nombre: "COCACOLA ZERO SUGAR Y3000", factor: 6.399947488 },
  { nombre: "FANTA NARANJA JMAF", factor: 5.394470668 },
  { nombre: "FANTA NARANJA JBE SIMPLE", factor: 5.394470668 },
  { nombre: "FANTA ZERO", factor: 5 },
  { nombre: "HI-C NARANJA MID CAL", factor: 4.399097716 },
  { nombre: "HI-C NARANJA MID CAL JS", factor: 4.399097716 },
  { nombre: "HI-C MANZANA CERO", factor: 4.399114749 },
  { nombre: "AQUARIUS POMELO ZERO", factor: 4.399220611 },
  { nombre: "MONSTER ENERGY ZERO", factor: 5 },
  { nombre: "MONSTER ANANA", factor: 5 },
  { nombre: "MONSTER GREEN", factor: 4 },
  { nombre: "MONSTER MANGO LOCO", factor: 5 },
  { nombre: "MONSTER ZERO ULTRA", factor: 5 },
  { nombre: "MONSTER ULTRA PARADISE", factor: 4 },
  { nombre: "MONSTER ROSSI", factor: 4 },
  { nombre: "MONSTER ULTRA SUNRISE", factor: 5 },
  { nombre: "MONSTER WATERMELON", factor: 5 },
  { nombre: "POWERADE FRUTAS TROPICALES", factor: 4.498931504 },
  { nombre: "POWERADE FRUTAS TROPICALES JS", factor: 4.498931504 },
  { nombre: "POWERADE MANZANA", factor: 4.498931504 },
  { nombre: "POWERADE MANZANA JS", factor: 4.498931504 },
  { nombre: "POWERADE MOUNTAIN BLAST", factor: 4.498931504 },
  { nombre: "POWERADE MOUNTAIN BLAST JS", factor: 4.498931504 },
  { nombre: "POWERADE UVA", factor: 4.398881326 },
  { nombre: "POWERADE UVA JS", factor: 4.398881326 },
  { nombre: "POWERADE MANGO TROPICAL", factor: 5.960641774 },
  { nombre: "POWERADE MARACUYA", factor: 4.398955438 },
  { nombre: "POWERADE ANANA", factor: 4.398659007 },
  { nombre: "SCHWEPPES POMELO JMAF", factor: 4.398415061 },
  { nombre: "SCHWEPPES POMELO JBE SIMPLE", factor: 4.398415061 },
  { nombre: "SCHWEPPES POMELO SIN AZUCAR", factor: 4.399956 },
  { nombre: "SCHWEPPES POMELO ZERO", factor: 4.399956 },
  { nombre: "SCHWEEPPES TONICA JMAF", factor: 6.993985173 },
  { nombre: "SCHWEEPPES TONICA JS", factor: 6.993985173 },
  { nombre: "SCHWEEPPES TONICA SIN AZUCAR", factor: 6.4 },
  { nombre: "SMART WATER", factor: 11 },
  { nombre: "SMART WATER CON GAS", factor: 7.000105002 },
  { nombre: "SPRITE ICE", factor: 6.4 },
  { nombre: "SPRITE SIN AZUCAR", factor: 6.4 },
  { nombre: "SPRITE SIN LIMA REDUCIDA", factor: 6.398362019 },
  { nombre: "SPRITE SIN LIMA REDUCIDA JS", factor: 6.398362019 },
  { nombre: "FANTA NARANJA JMAF (QUASI)", factor: 9.282896264 },
  { nombre: "QUASI SCH TONICA", factor: 0 },
  { nombre: "QUASI SPRITE REDUCIDA", factor: 7.984031936 },
  { nombre: "SPRITE LEES SUGAR", factor: 6.39590662 },
  { nombre: "SPRITE LEES SUGAR JS", factor: 6.396929474 },
  { nombre: "SW TONICA LIMON Y SAL", factor: 4.997126652 },
  { nombre: "SW GINGER ALE", factor: 6.398611467 },
  { nombre: "AQ POMELO ZERO", factor: 6.398611467 }
];

const formatosPorLinea = {
  "LINEA 1": [
    { nombre: "0.3 L", litros: 0.3, envasesHora: 25200 },
    { nombre: "0.5 L", litros: 0.5, envasesHora: 25200 },
    { nombre: "0.995 L", litros: 0.995, envasesHora: 18000 },
    { nombre: "1 L", litros: 1, envasesHora: 18000 },
    { nombre: "1.5 L", litros: 1.5, envasesHora: 12000 }
  ],
  "LINEA 2": [
    { nombre: "0.220 L", litros: 0.220, envasesHora: 57000 },
    { nombre: "0.354 L", litros: 0.354, envasesHora: 57000 },
    { nombre: "0.473 L", litros: 0.473, envasesHora: 45000 }
  ],
  "LINEA 3": [
    { nombre: "0.3 L", litros: 0.3, envasesHora: 16980 },
    { nombre: "0.5 L", litros: 0.5, envasesHora: 19200 },
    { nombre: "0.591 L", litros: 0.591, envasesHora: 19200 },
    { nombre: "0.6 L", litros: 0.6, envasesHora: 19200 },
    { nombre: "0.991 L", litros: 0.991, envasesHora: 13980 },
    { nombre: "1.5 L", litros: 1.5, envasesHora: 10800 },
    { nombre: "2.25 L", litros: 2.25, envasesHora: 9000 }
  ],
  "LINEA 5": [
    { nombre: "1 L", litros: 1, envasesHora: 15000 }
  ],
  "LINEA 6": [
    { nombre: "0.2 L", litros: 0.2, envasesHora: 24000 }
  ],
  "LINEA 7": [
    { nombre: "1.5 L", litros: 1.5, envasesHora: 13800 },
    { nombre: "2.25 L", litros: 2.25, envasesHora: 9000 }
  ]
};

const $ = (id) => document.getElementById(id);

const lineaSelect = $("linea");
const bebidaSelect = $("bebida");
const jarabeInput = $("jarabe");
const formatoSelect = $("formato");
const factorInput = $("factor");
const velocidadInput = $("velocidad");
const velocidadActualInput = $("velocidadActual");
const btnCalcular = $("btnCalcular");
const btnLimpiar = $("btnLimpiar");
const resultado = $("resultado");
const fxBurst = $("fxBurst");

function resetResultadoVisual() {
  resultado.innerHTML = `<div class="resultado-vacio">Completá los datos para calcular.</div>`;
}

function formatearNumero(valor, decimales = 2) {
  return Number(valor).toLocaleString("es-AR", {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales
  });
}

function normalizarDecimal(texto) {
  return String(texto || "")
    .trim()
    .replace(/\s+/g, "")
    .replace(",", ".");
}

function parseDecimalExacto(texto) {
  const limpio = normalizarDecimal(texto);
  if (limpio === "") return NaN;
  if (!/^\d*\.?\d+$/.test(limpio)) return NaN;
  return Number(limpio);
}

function parseEnteroPositivo(texto) {
  const limpio = String(texto || "").replace(/\D/g, "");
  if (limpio === "") return NaN;
  return Number(limpio);
}

function formatearTiempoHorasMinutos(horasDecimal) {
  if (!Number.isFinite(horasDecimal) || horasDecimal < 0) return "-";

  const minutosTotales = Math.round(horasDecimal * 60);
  const horas = Math.floor(minutosTotales / 60);
  const minutos = minutosTotales % 60;

  if (horas === 0) return `${minutos} min`;
  if (minutos === 0) return `${horas} h`;
  return `${horas} h ${minutos} min`;
}

function crearExplosionVisual(origenEl) {
  if (!fxBurst || !origenEl) return;

  const rect = origenEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const total = 18;

  for (let i = 0; i < total; i++) {
    const p = document.createElement("span");
    p.className = "particle";

    if (i % 3 === 1) p.classList.add("white");
    if (i % 3 === 2) p.classList.add("soft");

    const angle = (Math.PI * 2 * i) / total;
    const distance = 40 + Math.random() * 90;
    const tx = Math.cos(angle) * distance + "px";
    const ty = Math.sin(angle) * distance + "px";

    p.style.left = `${cx}px`;
    p.style.top = `${cy}px`;
    p.style.setProperty("--tx", tx);
    p.style.setProperty("--ty", ty);

    fxBurst.appendChild(p);
    setTimeout(() => p.remove(), 750);
  }
}

function cargarBebidas() {
  bebidas.forEach((b, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = b.nombre;
    bebidaSelect.appendChild(option);
  });
}

function cargarFormatosSegunLinea() {
  const linea = lineaSelect.value;

  formatoSelect.innerHTML = `<option value="" selected disabled>Seleccionar formato</option>`;
  velocidadInput.value = "";
  if (velocidadActualInput) velocidadActualInput.value = "";

  if (!linea || !formatosPorLinea[linea]) return;

  formatosPorLinea[linea].forEach((f, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${f.nombre} · ${formatearNumero(f.envasesHora, 0)} env/h`;
    formatoSelect.appendChild(option);
  });
}

function actualizarFactor() {
  if (bebidaSelect.value === "") {
    factorInput.value = "";
    return;
  }

  const bebida = bebidas[Number(bebidaSelect.value)];
  factorInput.value = bebida ? bebida.factor.toFixed(6) : "";
}

function actualizarVelocidad() {
  const linea = lineaSelect.value;
  const idx = formatoSelect.value;

  if (linea === "" || idx === "") {
    velocidadInput.value = "";
    return;
  }

  const formato = formatosPorLinea[linea][Number(idx)];
  velocidadInput.value = formato
    ? `${formatearNumero(formato.envasesHora, 0)} env/h`
    : "";
}

function calcular() {
  const linea = lineaSelect.value;
  const bebidaIdx = bebidaSelect.value;
  const formatoIdx = formatoSelect.value;

  if (linea === "") {
    resultado.innerHTML = `<div class="resultado-vacio">Seleccioná una línea.</div>`;
    return;
  }

  if (bebidaIdx === "") {
    resultado.innerHTML = `<div class="resultado-vacio">Seleccioná una bebida.</div>`;
    return;
  }

  if (formatoIdx === "") {
    resultado.innerHTML = `<div class="resultado-vacio">Seleccioná un formato.</div>`;
    return;
  }

  const bebida = bebidas[Number(bebidaIdx)];
  const formato = formatosPorLinea[linea][Number(formatoIdx)];

  const jarabeTexto = jarabeInput.value;
  const litrosJarabe = parseDecimalExacto(jarabeTexto);

  if (!Number.isFinite(litrosJarabe) || litrosJarabe <= 0) {
    resultado.innerHTML = `<div class="resultado-vacio">Ingresá una cantidad válida de litros de jarabe.</div>`;
    return;
  }

  if (!formato || !Number.isFinite(formato.litros) || formato.litros <= 0) {
    resultado.innerHTML = `<div class="resultado-vacio">Formato inválido.</div>`;
    return;
  }

  if (!Number.isFinite(formato.envasesHora) || formato.envasesHora <= 0) {
    resultado.innerHTML = `<div class="resultado-vacio">Velocidad nominal inválida para ese formato.</div>`;
    return;
  }

  const velocidadActual = velocidadActualInput
    ? parseEnteroPositivo(velocidadActualInput.value)
    : NaN;

  const velocidadUsada =
    Number.isFinite(velocidadActual) && velocidadActual > 0
      ? velocidadActual
      : formato.envasesHora;

  const litrosBebida = litrosJarabe * bebida.factor;
  const cantidadEnvases = litrosBebida / formato.litros;
  const horasFaltantes = cantidadEnvases / velocidadUsada;

  const jarabeMostrado = normalizarDecimal(jarabeTexto).replace(".", ",");
  const tiempoMostrado = formatearTiempoHorasMinutos(horasFaltantes);
  const usaActual = Number.isFinite(velocidadActual) && velocidadActual > 0;

  resultado.innerHTML = `
    <div class="bloque">
      <div class="kpi">
        <div class="titulo">Litros de bebida a envasar</div>
        <div class="valor">${formatearNumero(litrosBebida, 2)} L</div>
      </div>

      <div class="kpi">
        <div class="titulo">Cantidad teórica de envases</div>
        <div class="valor">${formatearNumero(cantidadEnvases, 0)}</div>
      </div>

      <div class="kpi">
        <div class="titulo">Velocidad nominal</div>
        <div class="valor">${formatearNumero(formato.envasesHora, 0)} env/h</div>
      </div>

      <div class="kpi">
        <div class="titulo">Velocidad usada en cálculo</div>
        <div class="valor">${formatearNumero(velocidadUsada, 0)} env/h</div>
      </div>

      <div class="kpi">
        <div class="titulo">Tiempo estimado para terminar</div>
        <div class="valor">${tiempoMostrado}</div>
      </div>

      <div class="detalle">
        <strong>Línea:</strong> ${linea}<br>
        <strong>Formato:</strong> ${formato.nombre}<br>
        <strong>Jarabe cargado:</strong> ${jarabeMostrado} L<br>
        <strong>Modo de velocidad:</strong> ${usaActual ? "Actual ingresada" : "Nominal del formato"}<br>
        <strong>Cálculo aplicado:</strong><br>
        ${jarabeMostrado} × ${formatearNumero(bebida.factor, 6)} = ${formatearNumero(litrosBebida, 2)} L<br>
        ${formatearNumero(litrosBebida, 2)} ÷ ${formato.nombre.replace(".", ",").replace(" L", "")} = ${formatearNumero(cantidadEnvases, 0)} envases<br>
        ${formatearNumero(cantidadEnvases, 0)} ÷ ${formatearNumero(velocidadUsada, 0)} = ${tiempoMostrado}
      </div>
    </div>
  `;
}

function limpiarCalculo() {
  const tieneDatos =
    lineaSelect.value !== "" ||
    bebidaSelect.value !== "" ||
    jarabeInput.value !== "" ||
    formatoSelect.value !== "" ||
    factorInput.value !== "" ||
    velocidadInput.value !== "" ||
    (velocidadActualInput && velocidadActualInput.value !== "") ||
    resultado.textContent.trim() !== "Completá los datos para calcular.";

  if (!tieneDatos) return;

  resultado.classList.remove("fade-in");
  resultado.classList.add("fade-out");

  crearExplosionVisual(btnLimpiar);

  setTimeout(() => {
    lineaSelect.value = "";
    bebidaSelect.value = "";
    jarabeInput.value = "";
    formatoSelect.innerHTML = `<option value="" selected disabled>Seleccionar formato</option>`;
    factorInput.value = "";
    velocidadInput.value = "";
    if (velocidadActualInput) velocidadActualInput.value = "";
    resetResultadoVisual();

    resultado.classList.remove("fade-out");
    resultado.classList.add("fade-in");

    setTimeout(() => {
      resultado.classList.remove("fade-in");
    }, 350);

    lineaSelect.focus();
  }, 420);
}

function iniciarAnimacionLiquida() {
  if (typeof gsap === "undefined") return;

  gsap.to("#wave1", {
    x: -80,
    y: 8,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to("#wave2", {
    x: 60,
    y: -6,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to("#wave3", {
    x: -40,
    y: 10,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".topbar-content", {
    y: -3,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

lineaSelect.addEventListener("change", () => {
  cargarFormatosSegunLinea();
  resetResultadoVisual();
});

bebidaSelect.addEventListener("change", actualizarFactor);
formatoSelect.addEventListener("change", actualizarVelocidad);
btnCalcular.addEventListener("click", calcular);
btnLimpiar.addEventListener("click", limpiarCalculo);

cargarBebidas();
actualizarFactor();
iniciarAnimacionLiquida();