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
    kendo.cultures["mas-KE"] = {
        name: "mas-KE",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "Kenyan Shilling",
                abbr: "KES",
                pattern: ["-$n","$n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "Ksh"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Jumapílí","Jumatátu","Jumane","Jumatánɔ","Alaámisi","Jumáa","Jumamósi"],
                    namesAbbr: ["Jpi","Jtt","Jnn","Jtn","Alh","Iju","Jmo"],
                    namesShort: ["Jpi","Jtt","Jnn","Jtn","Alh","Iju","Jmo"]
                },
                months: {
                    names: ["Oladalʉ́","Arát","Ɔɛnɨ́ɔɨŋɔk","Olodoyíóríê inkókúâ","Oloilépūnyīē inkókúâ","Kújúɔrɔk","Mórusásin","Ɔlɔ́ɨ́bɔ́rárɛ","Kúshîn","Olgísan","Pʉshʉ́ka","Ntʉ́ŋʉ́s"],
                    namesAbbr: ["Dal","Ará","Ɔɛn","Doy","Lép","Rok","Sás","Bɔ́r","Kús","Gís","Shʉ́","Ntʉ́"]
                },
                AM: ["Ɛnkakɛnyá","ɛnkakɛnyá","ƐNKAKƐNYÁ"],
                PM: ["Ɛndámâ","ɛndámâ","ƐNDÁMÂ"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, d MMMM yyyy",
                    F: "dddd, d MMMM yyyy HH:mm:ss",
                    g: "dd/MM/yyyy HH:mm",
                    G: "dd/MM/yyyy HH:mm:ss",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 0
            }
        }
    }
})(this);
}));