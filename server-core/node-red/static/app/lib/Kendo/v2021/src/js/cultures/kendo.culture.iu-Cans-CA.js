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
    kendo.cultures["iu-Cans-CA"] = {
        name: "iu-Cans-CA",
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
                name: "Canadian Dollar",
                abbr: "CAD",
                pattern: ["-$n","$n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "$"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["ᓈᑦᑏᖑᔭ","ᓇᒡᒐᔾᔭᐅ","ᐊᐃᑉᐱᖅ","ᐱᖓᑦᓯᖅ","ᓯᑕᒻᒥᖅ","ᑕᓪᓕᕐᒥᖅ","ᓯᕙᑖᕐᕕᒃ"],
                    namesAbbr: ["ᓈᑦᑏ","ᓇᒡᒐ","ᐊᐃᑉᐱ","ᐱᖓᑦᓯ","ᓯᑕ","ᑕᓪᓕ","ᓯᕙᑖᕐᕕᒃ"],
                    namesShort: ["ᓈ","ᓇ","ᐊ","ᐱ","ᓯ","ᑕ","ᓯ"]
                },
                months: {
                    names: ["ᔮᓐᓄᐊᕆ","ᕖᕝᕗᐊᕆ","ᒫᑦᓯ","ᐄᐳᕆ","ᒪᐃ","ᔫᓂ","ᔪᓚᐃ","ᐋᒡᒌᓯ","ᓯᑎᐱᕆ","ᐅᑐᐱᕆ","ᓄᕕᐱᕆ","ᑎᓯᐱᕆ"],
                    namesAbbr: ["ᔮᓐᓄ","ᕖᕝᕗ","ᒫᑦᓯ","ᐄᐳᕆ","ᒪᐃ","ᔫᓂ","ᔪᓚᐃ","ᐋᒡᒌ","ᓯᑎᐱ","ᐅᑐᐱ","ᓄᕕᐱ","ᑎᓯᐱ"]
                },
                AM: ["AM","am","AM"],
                PM: ["PM","pm","PM"],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd,MMMM dd,yyyy",
                    F: "dddd,MMMM dd,yyyy h:mm:ss tt",
                    g: "d/M/yyyy h:mm tt",
                    G: "d/M/yyyy h:mm:ss tt",
                    m: "d MMMM",
                    M: "d MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM,yyyy",
                    Y: "MMMM,yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 0
            }
        }
    }
})(this);
}));