using my.bookshop as my from '../db/data-model';
using { portfolio_srv as external } from  './external/portfolio_srv';

service CatalogService {
    @readonly entity Books as projection on my.Books; 
    
    entity Portfolio as projection on external.ZCBOPF_PORTFOLIO_TP;

    function send() returns String;
}