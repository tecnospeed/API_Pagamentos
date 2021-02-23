const axios = require('axios')

const storeRemittance = async (req, res) => {
    try {
        const { cnpjsh, tokensh, payercpfcnpj} = req.headers

        if(!cnpjsh || !tokensh || !payercpfcnpj) throw Error('Necessário informar o cnpj e token da sh!')

        const body = req.body
        console.log(body)
        const options = {
            method: 'post',
            url: 'https://staging.pagamentobancario.com.br/api/v1/remittance',
            headers: {
                cnpjsh,
                tokensh,
                payercpfcnpj
            },
            data: body
        }
        const response = await axios(options)

        console.log(response.data)
 
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

const getRemittance = async (req, res) => {
    try {
        const { cnpjsh, tokensh, payercpfcnpj, uniqueid} = req.headers
        if(!cnpjsh || !tokensh || !payercpfcnpj || !uniqueid) throw Error('Necessário informar o cnpj e token da sh!')

        const options = {
            method: 'get',
            url: 'https://staging.pagamentobancario.com.br/api/v1/remittance/' + uniqueid,
            headers: {
                cnpjsh,
                tokensh,
                payercpfcnpj
            },
        }
        const response = await axios(options)
        console.log(response.data)

        return res.json({
            resposta:'ok',
            data: response.data
        })
    } catch (error) {
        console.log(error.message)
        return res.json({
            error: true,
            message: error.message
        })
    }
}

module.exports = {storeRemittance, getRemittance}
