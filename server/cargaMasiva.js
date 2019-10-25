//importación de archivo json

 module.exports.cargaMasiva=()=>{
    let fs = require('fs');
    let modeloFlights = require ('../server/models/flights')
    setTimeout(()=>{
        let archivoOrigen ='server/assets/importjson.json';
        fs.readFile(archivoOrigen, 'utf8', async(err, data)=> {
            if (err) throw err;
            obj = JSON.parse(data);
            //console.log(data)
            //console.log(obj.length());
                let cont=0
                for (let i in obj){
                    //console.log(obj[i]);
                    let flight = new modeloFlights({
                        cliente:	obj[i].cliente,
                        market:	    obj[i].market,
                        flightini:	obj[i].flightini,
                        origen:	    obj[i].origen,
                        destino:	obj[i].destino,
                        codope:	    obj[i].codope,
                        fechainit:	obj[i].fechainit,
                        fechaend:	obj[i].fechaend,
                        frecuencia:	obj[i].frecuencia,
                        clase:	    obj[i].clase,
                        comentario:	obj[i].comentario,
                        flightope:	obj[i].flightope,
                        timedep:	obj[i].timedep,
                        timearr:	obj[i].timearr,
                        fechareg:	obj[i].fechareg
                    });
                    await flight.save((err,res)=>{
                        if (err) {
                            if (flight.cliente){
                                console.log(`cliente ${flight.cliente} ya existe`);
                                return
                            }
                            console.log( `registro ${flight.cliente} no grabo`);
                            return
                        };
                        console.log(`cliente ${flight.cliente} agregado`);
                        return
                    });
                    
                }
        })
    },500)
}

/*module.exports ={
    cargaMasiva
}*/
 