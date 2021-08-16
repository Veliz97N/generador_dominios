function Generador(){
    let dominio="";
    let variable_1=["El","Un"];
    let variable_2=["Ultimo","Mejor","Peor"];
    let extension=[".com",".cl"];
    for (let indice_variable1=0;indice_variable1<variable_1.length;indice_variable1++){
        for (let indice_variable2=0;indice_variable2<variable_2.length;indice_variable2++){
            for (let indice_variable3=0;indice_variable3<extension.length;indice_variable3++){
                dominio+=variable_1[indice_variable1]+variable_2[indice_variable2]+extension[indice_variable3];
                console.log(dominio);
                dominio="";
            }
        }
    }
}
Generador();
