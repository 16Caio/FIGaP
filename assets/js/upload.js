const botaoAnexo = document.getElementById('input-arquivo');
const previewArquivo = document.getElementById('preview-arquivo');

botaoAnexo.addEventListener('change', function(){
    console.log("Arquivo escolhido!");
    const arquivo = this.files[0];
    previewArquivo.innerHTML = '';
    if (arquivo != null){
        const imagemPreview = document.createElement('img');
        imagemPreview.src = (URL.createObjectURL(arquivo));
        imagemPreview.classList.add('miniatura-anexo')
        previewArquivo.appendChild(imagemPreview);
    }
});