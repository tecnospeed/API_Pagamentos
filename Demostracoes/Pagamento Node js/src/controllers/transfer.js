const axios = require('axios')

const paymentTransfer = async (req, res) => {
    try {
        const { cnpjsh, tokensh, payercpfcnpj } = req.headers
        if(!cnpjsh || !tokensh || !payercpfcnpj) throw Error('Necessário informar o cnpj e token da sh!')

        const body = req.body
        const options = {
            method: 'post',
            url: 'https://staging.pagamentobancario.com.br/api/v1/payment/transfer',
            headers: {
                cnpjsh,
                tokensh,
                payercpfcnpj
            },
            data: body
        }
        const response = await axios(options)
 
        return res.json({
            resposta:'ok',
            data: response.data
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {paymentTransfer}