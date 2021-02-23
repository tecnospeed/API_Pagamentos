const axios = require('axios')

const storeAccount = async (req, res) => {
    try {
        const { cnpjsh, tokensh, payercpfcnpj } = req.headers
        if(!cnpjsh || !tokensh || !payercpfcnpj) throw Error('Necessário informar o cnpj e token da sh!')

        const body = req.body
        const options = {
            method: 'post',
            url: 'https://staging.pagamentobancario.com.br/api/v1/account',
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

const getAccount = async (req,res) =>{
    try {
        const { cnpjsh, tokensh, payercpfcnpj } = req.headers
        if(!cnpjsh || !tokensh || !payercpfcnpj) throw Error('Necessário informar o cnpj e token da sh!')

        const options = {
            method: 'get',
            url: 'https://staging.pagamentobancario.com.br/api/v1/account',
            headers: {
                cnpjsh,
                tokensh,
                payercpfcnpj
            },
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

module.exports = {storeAccount, getAccount}