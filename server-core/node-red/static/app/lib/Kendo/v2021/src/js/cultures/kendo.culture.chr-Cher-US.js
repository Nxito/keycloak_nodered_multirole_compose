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
    kendo.cultures["chr-Cher-US"] = {
        name: "chr-Cher-US",
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
                name: "US Dollar",
                abbr: "USD",
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
                    names: ["ᎤᎾᏙᏓᏆᏍᎬ","ᎤᎾᏙᏓᏉᏅᎯ","ᏔᎵᏁᎢᎦ","ᏦᎢᏁᎢᎦ","ᏅᎩᏁᎢᎦ","ᏧᎾᎩᎶᏍᏗ","ᎤᎾᏙᏓᏈᏕᎾ"],
                    namesAbbr: ["ᏆᏍᎬ","ᏉᏅᎯ","ᏔᎵᏁ","ᏦᎢᏁ","ᏅᎩᏁ","ᏧᎾᎩ","ᏈᏕᎾ"],
                    namesShort: ["ᏆᏍ","ᏉᏅ","ᏔᎵ","ᏦᎢ","ᏅᎩ","ᏧᎾ","ᏈᏕ"]
                },
                months: {
                    names: ["ᎤᏃᎸᏔᏅ","ᎧᎦᎵ","ᎠᏅᏱ","ᏝᏬᏂ","ᎠᏂᏍᎬᏘ","ᏕᎭᎷᏱ","ᎫᏰᏉᏂ","ᎦᎶᏂ","ᏚᎵᏍᏗ","ᏚᏂᏅᏗ","ᏅᏓᏕᏆ","ᎤᏍᎩᏱ"],
                    namesAbbr: ["ᎤᏃᎸ","ᎧᎦᎵ","ᎠᏅᏱ","ᏝᏬᏂ","ᎠᏂᏍ","ᏕᎭᎷ","ᎫᏰᏉ","ᎦᎶᏂ","ᏚᎵᏍ","ᏚᏂᏅ","ᏅᏓᏕ","ᎤᏍᎩ"]
                },
                AM: ["AM","am","AM"],
                PM: ["PM","pm","PM"],
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd,yyyy",
                    F: "dddd, MMMM dd,yyyy h:mm:ss tt",
                    g: "M/d/yyyy h:mm tt",
                    G: "M/d/yyyy h:mm:ss tt",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM, yyyy",
                    Y: "MMMM, yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 0
            }
        }
    }
})(this);
}));