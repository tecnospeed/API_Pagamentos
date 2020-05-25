const url = 'https://api.pagamentobancario.com.br/api/v1/statement/parser';
const fileInput = document.querySelector('#id-input');
const formData = new FormData();

formData.append('file', fileInput.files[0]);

const options = {
    method: 'POST',
    body: formData,
    headers: {
        "cnpjsh": "01001001000113",
        "tokensh": "xxxxxxxxxxxxxxxx",
        "payercpfcnpj": "01001001000113"
    }
};

fetch(url, options);