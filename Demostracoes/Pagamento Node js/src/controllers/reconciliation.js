const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD
const { stringify } = require('querystring')
=======
>>>>>>> eaa1a0b7a353052018b5f485f6037d8f89452b21

const postReconciliation = async (req, res) => {
    try {
        const { cnpjsh, tokensh, payercpfcnpj} = req.headers

        if(!cnpjsh || !tokensh || !payercpfcnpj) throw Error('Necessário informar o cnpj e token da sh!')


        const body = req.file
        const formData = new FormData()

        formData.append('file', fs.createReadStream(path.resolve(__dirname, `../../uploads/${body.filename}`)))

        const options = {
            method: 'post',
            url: 'https://staging.pagamentobancario.com.br/api/v1/reconciliation',
            headers: {
                cnpjsh,
                tokensh,
                payercpfcnpj,
                'content-type': 'multipart/form-data',
                ...formData.getHeaders()
            },
            data: formData

        }
        const response = await axios(options)
 
        return res.json({
            resposta:'ok',
            data: response.data
        })
    } catch (error) {
        console.log(error)
        return res.json({
            error: true,
            message: error.message
        })
        
    }
}
    
const getReconciliation = async (req, res) => {
    try {
        const { cnpjsh, tokensh, payercpfcnpj, uniqueid} = req.headers
        if(!cnpjsh || !tokensh || !payercpfcnpj || !uniqueid) throw Error('Necessário informar o cnpj e token da sh!')

        const options = {
            method: 'get',
            url: 'https://staging.pagamentobancario.com.br/api/v1/reconciliation/' + uniqueid,
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
    
module.exports = {postReconciliation, getReconciliation }
