const btn = document.getElementById('btn');
const generateQRcode = () => {
  const url = document.getElementById('url').value;
  const qrContainer = document.getElementById('qrcode');
  qrContainer.innerHTML = '';
  new QRCode(qrContainer, {
    text: url,
    width: 128,
    height: 128
  });
};
btn.addEventListener('click', generateQRcode);
