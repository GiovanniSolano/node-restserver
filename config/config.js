//Puerto

process.env.PORT = process.env.PORT || 3000;


//ENTORNO

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//Vencimiento

process.env.CADUCIDAD_TOKEN = '48h';



//SEED
process.env.SEED = process.env.SEED || 'semilla';



let urlDB;


if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {

    urlDB = process.env.MONGO_URI;

}

process.env.URLDB = urlDB;

// mongodb + srv: //gio:<password>@cluster0-waf24.mongodb.net/test?retryWrites=true&w=majority


//Google client ID

process.env.CLIENT_ID = process.env.CLIENT_ID || '1036813487700-ado4r8euitk96vqjslh9k6ms00djhsrk.apps.googleusercontent.com';