//Puerto

process.env.PORT = process.env.PORT || 3000;


//ENTORNO

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


let urlDB;


if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {

    urlDB = 'mongodb+srv://gio:tzW7gbn3b4ORpRGD@cluster0-waf24.mongodb.net/cafe?retryWrites=true&w=majority';

}

process.env.URLDB = urlDB;

// mongodb + srv: //gio:<password>@cluster0-waf24.mongodb.net/test?retryWrites=true&w=majority