/** Service implementation for CatalogService */
module.exports = cds.service.impl( async function () {


    const { Portfolio } = this.entities
    const { BusinessPartner } = this.entities

    const { ExternalBusinessPartner } = this.entities
    

    const extSrv = await cds.connect.to('portfolio_srv')

    const extSrvBusinessPartner = await cds.connect.to('business_partner_srv')

    const messaging = await cds.connect.to("messaging")


    this.on('READ',Portfolio, each => test(each) )

    async function test(req){
        //return extSrv.tx(req).run(req.query)
        const tx = extSrv.transaction(req)
        const response = await tx.get('/ZCBOPF_PORTFOLIO_TP?$select=portfoliouuid,name')
        return response
    }

    this.on('READ',ExternalBusinessPartner, each => testExternalBusinessPartner(each) )


    async function testExternalBusinessPartner(req){
        //return extSrv.tx(req).run(req.query)
        const tx = extSrvBusinessPartner.transaction(req)
        const response = await tx.get('/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner?$select=BusinessPartner,BusinessPartnerFullName')
        return response
    }

    
    this.on("send", req => {

        return 'lala';
        /*messaging.tx(req).emit({
        event: 'firsttopic',
        data: { number: 42},
        headers: {}
        })
        return 'lala'*/
    })

    messaging.on('CONVISTA/BO/BusinessPartner/Changed', req => {

        const tx = cds.transaction(req)
        tx.run ([
        INSERT.into (BusinessPartner) .columns (
             'name', 'new'
            ) .values (
            req.data.KEY[0].BUSINESSPARTNER, 'X'
            )
        ])
        .catch((e) => console.log(e))        

        //srv.get(BusinessPartner).where({ID:111})
        console.log(JSON.stringify(req.data))
        
    })

    


})