import { TODOLIST2 } from "./adatok.js";
import Megjelenit from "./Megjelenit.js";


$(function () {
    const szuloELEM = $(".tarolo");
    new Megjelenit(TODOLIST2, szuloELEM);

    $(window).on("torles", (event) => {
       
    });

            $(window).on("kesz", (event) => {
            console.log(event.detail) //az objektum, a megjelenitsor egy példánya
            let objPeldany = event.detail;
            //console.log("kész esemény")
            objPeldany.setHatterszin();
            
            TODOLIST2[objPeldany.index].kesz=true;
            console.log(this.TODOLIST2)
        }) //itt iratkozunk fel a kész eseményre


        $(window).on("torles", (event) => {
            let objPeldany = event.detail;
            //console.log(event.detail) //az objektum, a megjelenitsor egy példánya
            TODOLIST2.splice(objPeldany.index, 1) /*ez töröl a listából*/
            //console.log("Törlés esemény")
            szuloELEM.empty();
            new Megjelenit(TODOLIST2, szuloELEM);
            /*újrapéldányosítottuk az egészet*/

        }) //itt iratkozunk fel a törlés eseményre









});
