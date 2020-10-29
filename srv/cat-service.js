module.exports = async srv => {
  //const messaging = await cds.connect.to("messaging")

  srv.on("send", req => {
    /*messaging.tx(req).emit({
      event: 'firsttopic',
      data: { number: 42},
      headers: {}
    })*/
    return 'lala'
  })



}


/** Service implementation for CatalogService */
module.exports = cds.service.impl( async function () {
    const { Portfolio } = this.entities
    const extSrv = await cds.connect.to('portfolio_srv')

    this.on('READ',Portfolio, each => test(each) )

    async function test(req){
        //return extSrv.tx(req).run(req.query)
        const tx = extSrv.transaction(req)
        const response = await tx.get('/ZCBOPF_PORTFOLIO_TP?$select=name')
        return response
    }
})