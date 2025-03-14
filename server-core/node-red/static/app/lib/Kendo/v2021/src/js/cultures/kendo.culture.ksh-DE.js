/** 
 * Kendo UI v2021.2.616 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/

(function(f){
    if (typeof define === 'function' && define.amd) {
        define(["kendo.core"], f);
    } else {
        f();
    }
}(function(){
(function( window, undefined ) {
    kendo.cultures["ksh-DE"] = {
        name: "ksh-DE",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n %","n %"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "Euro",
                abbr: "EUR",
                pattern: ["-n $","n $"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "€"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Sunndaach","Mohndaach","Dinnsdaach","Metwoch","Dunnersdaach","Friidaach","Samsdaach"],
                    namesAbbr: ["Su.","Mo.","Di.","Me.","Du.","Fr.","Sa."],
                    namesShort: ["Su","Mo","Di","Me","Du","Fr","Sa"]
                },
                months: {
                    names: ["Jannewa","Fäbrowa","Määz","Aprell","Mai","Juuni","Juuli","Oujoß","Septämber","Oktohber","Novämber","Dezämber"],
                    namesAbbr: ["Jan.","Fäb.","Mäz.","Apr.","Mai","Jun.","Jul.","Ouj.","Säp.","Okt.","Nov.","Dez."]
                },
                AM: ["v.M.","v.m.","V.M."],
                PM: ["n.M.","n.m.","N.M."],
                patterns: {
                    d: "d. M. yyyy",
                    D: "dddd, 'dä' d. MMMM yyyy",
                    F: "dddd, 'dä' d. MMMM yyyy HH:mm:ss",
                    g: "d. M. yyyy HH:mm",
                    G: "d. M. yyyy HH:mm:ss",
                    m: "d. MMMM",
                    M: "d. MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": ". ",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);
}));