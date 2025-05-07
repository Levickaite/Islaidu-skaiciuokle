let islaidos = [];
function sumuotiIslaidas(){
    let pirkinys = document.getElementById('pirkinys').value
    let suma = parseFloat(document.getElementById('suma').value)
    let data = document.getElementById('data').value
    let islaiduSarasas = document.getElementById('islaidu-sarasas')
    let isViso = document.getElementById('viso')

    if (pirkinys && !isNaN(suma) && data){
        islaidos.push(suma)
        let eilute = document.createElement('tr');
        let pirkinioLangas= document.createElement("td")
        pirkinioLangas.textContent = pirkinys;
        let sumosLangas = document.createElement("td")
        sumosLangas.textContent = suma.toFixed(2)
        let datosLangas =document.createElement('td')
        datosLangas.textContent=data
        eilute.appendChild(datosLangas)
        eilute.appendChild (pirkinioLangas)
        eilute.appendChild(sumosLangas)
        islaiduSarasas.appendChild(eilute);
        

        let viso =islaidos.reduce((a,b) => a+b,0)
        isViso.textContent = `Iš viso: ${viso.toFixed(2)} €`
  
    }
}
