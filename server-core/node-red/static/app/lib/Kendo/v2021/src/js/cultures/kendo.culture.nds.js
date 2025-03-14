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
    kendo.cultures["nds"] = {
        name: "nds",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ".",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n %","n %"],
                decimals: 2,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "",
                abbr: "",
                pattern: ["-n $","n $"],
                decimals: 2,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "€"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Sünndag","Maandag","Dingsdag","Middeweken","Dunnersdag","Freedag","Sünnavend"],
                    namesAbbr: ["Sü.","Ma.","Di.","Mi.","Du.","Fr.","Sa."],
                    namesShort: ["Sü.","Ma.","Di.","Mi.","Du.","Fr.","Sa."]
                },
                months: {
                    names: ["Januaar","Februaar","März","April","Mai","Juni","Juli","August","September","Oktover","November","Dezember"],
                    namesAbbr: ["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."]
                },
                AM: ["vm","vm","VM"],
                PM: ["nm","nm","NM"],
                patterns: {
                    d: "d.MM.yyyy",
                    D: "dddd, 'de' d. MMMM yyyy",
                    F: "dddd, 'de' d. MMMM yyyy 'Klock' H.mm:ss",
                    g: "d.MM.yyyy 'Kl'. H.mm",
                    G: "d.MM.yyyy 'Klock' H.mm:ss",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "'Kl'. H.mm",
                    T: "'Klock' H.mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy MMMM",
                    Y: "yyyy MMMM"
                },
                "/": ".",
                ":": ".",
                firstDay: 1
            }
        }
    }
})(this);
}));