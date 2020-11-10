using my.bookshop as my from '../db/data-model';
using { portfolio_srv as external } from  './external/portfolio_srv';
using { OP_API_BUSINESS_PARTNER_SRV as externalBP } from './external/OP_API_BUSINESS_PARTNER_SRV.csn';

service CatalogService {
    
    entity BusinessPartner as projection on my.BusinessPartner; 

    entity ExternalBusinessPartner as projection on externalBP.A_BusinessPartner;
    
    entity Portfolio as projection on external.ZCBOPF_PORTFOLIO_TP;

    function send() returns String;
}