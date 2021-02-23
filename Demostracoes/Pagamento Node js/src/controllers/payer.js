const axios = require('axios')

const storePayer = async (req, res) => {
    try {
        const { cnpjsh, tokensh } = req.headers

        if(!cnpjsh || !tokensh) throw Error('Necessário informar o cnpj e token da sh!')

        const body = req.body
        const options = {
            method: 'post',
            url: 'https://staging.pagamentobancario.com.br/api/v1/payer',
            headers: {
                cnpjsh,
                tokensh
            },
            data: body
        }
        const response = await axios(options)
        
 
        return res.json({
            resposta:'ok',
            data: response.data
        })
    } catch (error) {

        return res.json({
            error: true,
            message: error.message
        })
    }
}

const getPayer = async (req, res) => {
    try {
        const { cnpjsh, tokensh, payercpfcnpj } = req.headers
        if(!cnpjsh || !tokensh || !payercpfcnpj) throw Error('Necessário informar o cnpj e token da sh!')

        const options = {
            method: 'get',
            url: 'https://staging.pagamentobancario.com.br/api/v1/payer',
            headers: {
                cnpjsh,
                tokensh,
                payercpfcnpj
            },
        }
        const response = await axios(options)
        console.log(response)

        return res.json({
            resposta:'ok',
            data: response.data
        })
    } catch (error) {

        return res.json({
            error: true,
            message: error.message
        })
    }
}

module.exports = {storePayer, getPayer}