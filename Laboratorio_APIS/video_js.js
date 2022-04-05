
        
        if(window.File && window.FileReader && window.FileList) {
            console.log("todas las APIs soportadas");
        } else {
            alert("La API de FILE no es soportada por este navegador");
        }
        function handleFileSelect(e) {
            var files= e.target.files;
            for (var i=0, f; f= files[i]; i++) {
                if (!f.type.match("video.*")) {
                    alert("Formato no válido. Por favor, seleccione un video");
                    continue;
                }else{
                var reader= new FileReader();
                reader.onload= (function(theFile){
                    return function (e){
                        var span= document.createElement('span');
                        span.innerHTML= ['<video controls poster="image0.jpeg" id="video" src="'+ e.target.result + '" title="' + encodeURI(theFile.name) +'"/>'].join('');
                        document.getElementById("list").insertBefore(span,null);
                        document.getElementById("btns").style.display= 'inline';
                    };
                })(f);
                reader.readAsDataURL(f)
            }   
            alert("El video está cargando, por favor espere.");
            
            var archivo= document.getElementById("files");
            if(archivo){
            archivo.addEventListener("change", handleFileSelect, false);
            }
            }
        }