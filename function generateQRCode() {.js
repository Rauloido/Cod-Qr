function generateQRCode() {
    const data = document.getElementById('dataInput').value;
    const qrcodeDiv = document.getElementById('qrcode');
    
    // Golește div-ul anterior, dacă există
    qrcodeDiv.innerHTML = ''; 

    if (data) {
        // Creează o nouă instanță a generatorului de cod QR
        // 'qrcode' este o funcție/obiect furnizat de biblioteca inclusă
        const qr = new QRCode(qrcodeDiv, {
            text: data,
            width: 128,
            height: 128
        });
    } else {
        qrcodeDiv.innerHTML = 'Te rog introdu date.';
    }
}