import { emitirTextoEditor, selecionarDocumento } from './socket-front-doc.js'

const params = new URLSearchParams(window.location.search)
const nomeDocumento = params.get("nome")

const textoEditor = document.getElementById('editor-texto')
const tituloDocumento = document.getElementById('titulo-documento')

tituloDocumento.textContent = nomeDocumento || "Documento sem título"

selecionarDocumento(nomeDocumento)

textoEditor.addEventListener('keyup', () => {
    emitirTextoEditor(textoEditor.value);
})

export function atualizaTextoEditor(texto) {
    textoEditor.value = texto;
}