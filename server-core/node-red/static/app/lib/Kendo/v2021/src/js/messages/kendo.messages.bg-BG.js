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
(function ($, undefined) {
/* Validator */
if (kendo.ui.Validator) {
kendo.ui.Validator.prototype.options.messages =
$.extend(true, kendo.ui.Validator.prototype.options.messages,{
  "required": "{0} е задължително поле",
  "pattern": "{0} не е валидно",
  "min": "{0} трябва да бъде по-голямо или равно на {1}",
  "max": "{0} трябва да бъде по-малко или равно на {1}",
  "step": "{0} не е валидно",
  "email": "{0} не е валиден email",
  "url": "{0} не е валиден URL",
  "date": "{0} не е валидна дата",
  "dateCompare": "Крайната дата трябва да бъде по-голяма от началната дата"
});
}

/* TreeView */

if (kendo.ui.TreeView) {
kendo.ui.TreeView.prototype.options.messages =
$.extend(true, kendo.ui.TreeView.prototype.options.messages,{
  "loading": "Зареждане...",
  "requestFailed": "Грешка при заявка",
  "retry": "Опитай отново"
});
}

/* Upload */

if (kendo.ui.Upload) {
kendo.ui.Upload.prototype.options.localization=
$.extend(true, kendo.ui.Upload.prototype.options.localization,{
  "select": "Избери файлове...",
  "cancel": "Отказ",
  "retry": "Опитай отново",
  "remove": "Премахни",
  "uploadSelectedFiles": "Качи файловете",
  "dropFilesHere": "drop files here to upload",
  "statusUploading": "uploading",
  "statusUploaded": "uploaded",
  "statusWarning": "warning",
  "statusFailed": "failed",
  "headerStatusUploading": "Uploading...",
  "headerStatusUploaded": "Приключено"
});
}

/* Spreadsheet messages */

if (kendo.spreadsheet && kendo.spreadsheet.messages.borderPalette) {
kendo.spreadsheet.messages.borderPalette =
$.extend(true, kendo.spreadsheet.messages.borderPalette,{
  "allBorders": "Всички граници",
  "insideBorders": "Вътрешни граници",
  "insideHorizontalBorders": "Вътрешни хоризонтални граници",
  "insideVerticalBorders": "Вътрешни вертикални граници",
  "outsideBorders": "Външни граници",
  "leftBorder": "Лява граница",
  "topBorder": "Горна граница",
  "rightBorder": "Дясна граница",
  "bottomBorder": "Долна граница",
  "noBorders": "Без граница"
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.dialogs) {
kendo.spreadsheet.messages.dialogs =
$.extend(true, kendo.spreadsheet.messages.dialogs,{
  "apply": "Приложи",
  "save": "Запази",
  "cancel": "Откажи",
  "remove": "Премахни",
  "okText": "OK",
  "exportAsDialog": {
    "title": "Експортирай...",
    "labels": {
      "fileName": "Име на файл",
      "saveAsType": "Запази като",
      "exportArea": "Експортирай",
      "paperSize": "Размер на лист",
      "margins": "Отстояние",
      "orientation": "Ориентация",
      "print": "Отпечатай",
      "guidelines": "Guidelines",
      "center": "Центрирай",
      "horizontally": "Хоризонтално",
      "vertically": "Вертикално"
    }
  },
  "formatCellsDialog": {
    "title": "Форматиране",
    "categories": {
      "number": "Число",
      "currency": "Валута",
      "date": "Дата"
      }
  },
  "fontFamilyDialog": {
    "title": "Шрифт"
  },
  "fontSizeDialog": {
    "title": "Размер на шрифта"
  },
  "bordersDialog": {
    "title": "Граници"
  },
  "alignmentDialog": {
    "title": "Подравняване",
    "buttons": {
     "justtifyLeft": "Подравняване отляво",
     "justifyCenter": "Центриране",
     "justifyRight": "Подравняване отдясно",
     "justifyFull": "Двустранно подравняване",
     "alignTop": "Горно подравняване",
     "alignMiddle": "Подравняване в средата",
     "alignBottom": "Долно подравняване"
    }
  },
  "mergeDialog": {
    "title": "Обединяване на клетки",
    "buttons": {
      "mergeCells": "Обедини всичко",
      "mergeHorizontally": "Обедини по хоризонтала",
      "mergeVertically": "Обедини по вертикала",
      "unmerge": "Раздели на клетки"
    }
  },
  "freezeDialog": {
    "title": "Фиксирай прозорците",
    "buttons": {
      "freezePanes": "Фиксирай прозорците",
      "freezeRows": "Фиксирай редове",
      "freezeColumns": "Фиксирай колони",
      "unfreeze": "Освободи прозорците"
    }
  },
  "validationDialog": {
    "title": "Проверка на данни",
    "hintMessage": "Въведете валидна {0} стойност {1}.",
    "hintTitle": "Проверка {0}",
    "criteria": {
      "any": "Всяка стойност",
      "number": "Число",
      "text": "Текст",
      "date": "Дата",
      "custom": "По избор"
    },
    "comparers": {
      "greaterThan": "по-голямо от",
      "lessThan": "по-малко от",
      "between": "между",
      "notBetween": "не е между",
      "equalTo": "равно на",
      "notEqualTo": "не е равно на",
      "greaterThanOrEqualTo": "по-голямо или равно на",
      "lessThanOrEqualTo": "по-малко или равно на"
    },
    "comparerMessages": {
      "greaterThan": "по-голямо от {0}",
      "lessThan": "по-малко от {0}",
      "between": "между {0} и {1}",
      "notBetween": "не е между {0} и {1}",
      "equalTo": "равно на {0}",
      "notEqualTo": "не е равно на {0}",
      "greaterThanOrEqualTo": "по-голямо или равно на {0}",
      "lessThanOrEqualTo": "по-малко или равно на {0}",
      "custom": "което удовлетворява формулата: {0}"
    },
    "labels": {
      "criteria": "Критерии",
      "comparer": "Comparer",
      "min": "Мин",
      "max": "Макс",
      "value": "Стойност",
      "start": "Начало",
      "end": "Край",
      "onInvalidData": "При невалидни данни",
      "rejectInput": "Откажи въвеждане",
      "showWarning": "Покажи предупреждение",
      "showHint": "Покажи входно съобщение",
      "hintTitle": "Заглавие",
      "hintMessage": "Съобщение"
    },
    "placeholders": {
      "typeTitle": "Напишете заглавие",
      "typeMessage": "Напишете съобщение"
    }
  },
  "modifyMergedDialog": {
    "errorMessage": "Не може да се промени част от обединена клетка."
  },
  "useKeyboardDialog": {
    "title": "Копиране и поставяне",
    "errorMessage": "Тези команди не могат да бъдат избрани от менюто. Вместо това използвайте клавишна комбинация:",
    "labels": {
      "forCopy": "за копиране",
      "forCut": "за изрязване",
      "forPaste": "за поставяне"
    }
  },
  "unsupportedSelectionDialog": {
    "errorMessage": "Командата, която сте избрали, не може да бъде използвана с няколко селекции."
  }
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.filterMenu) {
kendo.spreadsheet.messages.filterMenu =
$.extend(true, kendo.spreadsheet.messages.filterMenu,{
  "sortAscending": "Сортирай възходящо",
  "sortDescending": "Сортирай низходящо",
  "filterByValue": "Филтрирай по стойност",
  "filterByCondition": "Филтрирай по критерий",
  "apply": "Приложи",
  "search": "Търси",
  "clear": "Премахни",
  "blanks": "(Празни места)",
  "operatorNone": "Без критерии",
  "and": "И",
  "or": "ИЛИ",
  "operators": {
    "string": {
      "contains": "Съдържа",
      "doesnotcontain": "Не съдържа",
      "startswith": "Започва с",
      "endswith": "Завършва на"
    },
    "date": {
      "eq": "Е равно на",
      "neq": "Не е равно на",
      "lt": "Е преди",
      "gt": "Е след"
    },
    "number": {
      "eq": "Е равно на",
      "neq": "Не е равно на",
      "gte": "Е по-голяма или равно на",
      "gt": "Е по-голямо от",
      "lte": "Е по-малко или равно на",
      "lt": "Е по-малко от"
    }
  }
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.colorPicker) {
kendo.spreadsheet.messages.colorPicker =
$.extend(true, kendo.spreadsheet.messages.colorPicker,{
  "reset": "Махни цвета",
  "customColor": "Избери цвят...",
  "apply": "Приложи",
  "cancel": "Откажи"
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.toolbar) {
kendo.spreadsheet.messages.toolbar =
$.extend(true, kendo.spreadsheet.messages.toolbar,{
  "addColumnLeft": "Добави колона отляво",
  "addColumnRight": "Добави колона отдясно",
  "addRowAbove": "Добави ред отгоре",
  "addRowBelow": "Добави ред отдолу",
  "alignment": "Подравняване",
  "alignmentButtons": {
    "justtifyLeft": "Подравняване отляво",
    "justifyCenter": "Центрирано",
    "justifyRight": "Подравняване отдясно",
    "justifyFull": "Двустранно подравняване",
    "alignTop": "Горно подравняване",
    "alignMiddle": "Подравняване в средата",
    "alignBottom": "Подравняване в дъното"
  },
  "backgroundColor": "Фон",
  "bold": "Удебеляване",
  "borders": "Граници",
  "copy": "Копирай",
  "cut": "Изрежи",
  "deleteColumn": "Изтрий колона",
  "deleteRow": "Изтрии ред",
  "excelImport": "Импортиране от Excel...",
  "filter": "Филтриране",
  "fontFamily": "Шрифт",
  "fontSize": "Размер на шрифт",
  "format": "Формат по избор...",
  "formatTypes": {
    "automatic": "Автоматичен",
    "number": "Число",
    "percent": "Процент",
    "financial": "Финансов",
    "currency": "Валута",
    "date": "Дата",
    "time": "Час",
    "dateTime": "Дата и час",
    "duration": "Период",
    "moreFormats": "Още формати..."
  },
  "formatDecreaseDecimal": "Намали порядъка",
  "formatIncreaseDecimal": "Увеличи порядъка",
  "freeze": "Фиксирай прозорците",
  "freezeButtons": {
    "freezePanes": "Фиксирай прозорците",
    "freezeRows": "Фиксирай редове",
    "freezeColumns": "фиксирай колони",
    "unfreeze": "Освободи прозорците"
  },
  "italic": "Курсив",
  "merge": "Обединяване на клетки",
  "mergeButtons": {
    "mergeCells": "Обединяване на всичко",
    "mergeHorizontally": "Обединяване по редове",
    "mergeVertically": "Обединяване по колони",
    "unmerge": "Разделяне на клетки"
  },
  "open": "Отвори...",
  "paste": "Поставяне",
  "quickAccess": {
    "redo": "Стъпка напред",
    "undo": "Стъпка назад"
  },
  "saveAs": "Запиши като...",
  "sort": "Сортирай",
  "sortAsc": "Сортирай възходящо",
  "sortDesc": "Сортирай низходящо",
  "sortButtons": {
    "sortSheetAsc": "Сортирай лист от A до Z",
    "sortSheetDesc": "Сортирай лист от Z до A",
    "sortRangeAsc": "Сортирай селекция от A до Z",
    "sortRangeDesc": "Сортирай селекция от Z до A"
  },
  "textColor": "Цвят на текста",
  "textWrap": "Пренасяне на текста",
  "underline": "Подчертано",
  "validation": "Проверка на данни..."
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.view) {
kendo.spreadsheet.messages.view =
$.extend(true, kendo.spreadsheet.messages.view,{
  "nameBox": "Име на клетка",
  "errors": {
    "shiftingNonblankCells": "Не може да се вмъкнат клетки поради възможност от загуба на данни. Изберете друга локация за вмъкване на клетки или изтрийте данни от края на работния лист."
  },
  "tabs": {
    "home": "Начало",
    "insert": "Вмъкване",
    "data": "Данни"
  }
});
}

/* Slider */

if (kendo.ui.Slider) {
kendo.ui.Slider.prototype.options =
$.extend(true, kendo.ui.Slider.prototype.options,{
  "increaseButtonTitle": "Увеличи",
  "decreaseButtonTitle": "Намали"
});
}

/* Numeric text box */

if (kendo.ui.NumericTextBox) {
kendo.ui.NumericTextBox.prototype.options =
$.extend(true, kendo.ui.NumericTextBox.prototype.options,{
  "upArrowText": "Увеличи стойността",
  "downArrowText": "Намали стойността"
});
}

/* MediaPlayer messages */

if (kendo.ui.MediaPlayer) {
kendo.ui.MediaPlayer.prototype.options.messages =
$.extend(true, kendo.ui.MediaPlayer.prototype.options.messages,{
  "pause": "Пауза",
  "play": "Възпроизвеждане",
  "mute": "Заглушаване на звука",
  "unmute": "Включване на звука",
  "quality": "Промяна на качеството",
  "fullscreen": "Цял екран"
});
}

/* Gantt */

if (kendo.ui.Gantt) {
kendo.ui.Gantt.prototype.options.messages =
$.extend(true, kendo.ui.Gantt.prototype.options.messages,{
  "actions": {
    "addChild": "Добави дете",
    "append": "Добави задача",
    "insertAfter": "Добави отдолу",
    "insertBefore": "Добави отгоре",
    "pdf": "Експорт към PDF"
  },
  "cancel": "Откажи",
  "deleteDependencyWindowTitle": "Изтрий връзка",
  "deleteTaskWindowTitle": "Изтрий задача",
  "destroy": "Изтрий",
  "editor": {
    "assingButton": "Задай",
    "editorTitle": "Задача",
    "end": "Край",
    "percentComplete": "Завършено",
    "plannedStart": "Планирано начало",
    "plannedEnd": "Планиран край",
    "resources": "Ресурси",
    "resourcesEditorTitle": "Ресурси",
    "resourcesHeader": "Ресурси",
    "start": "Начало",
    "title": "Заглавие",
    "unitsHeader": "Единици"
  },
  "plannedTasks": {
    "switchText": "Планирана задача",
    "offsetTooltipAdvanced": "Изпълнена предварително",
    "offsetTooltipDelay": "Закъснение",
    "seconds": "секунди",
    "minutes": "минути",
    "hours": "часa",
    "days": "дни"
  },
  "save": "Запази",
  "views": {
    "day": "Ден",
    "end": "Край",
    "month": "Месец",
    "start": "Начало",
    "week": "Седмица",
    "year": "Година"
  }
});
}

/* File browser */

if (kendo.ui.FileBrowser) {
kendo.ui.FileBrowser.prototype.options.messages =
$.extend(true, kendo.ui.FileBrowser.prototype.options.messages,{
  "uploadFile": "Качи файл",
  "orderBy": "Подреди по",
  "orderByName": "Име",
  "orderBySize": "Размер",
  "directoryNotFound": "Папка с това име не беше намерена",
  "emptyFolder": "Празна папка",
  "deleteFile": 'Сигурни ли сте че искате да изтриете "{0}"?',
  "invalidFileType": "Избраният файл \"{0}\" не е валиден. Поддържаните файлови формати са {1}.",
  "overwriteFile": "Файл с име \"{0}\" вече съществува в текущата папка. Искате ли да го презапишете?",
  "dropFilesHere": "Пуснете файл тук за да го качите",
  "search": "Търси"
});
}


/* Flat color picker */

if (kendo.ui.FlatColorPicker) {
kendo.ui.FlatColorPicker.prototype.options.messages =
$.extend(true, kendo.ui.FlatColorPicker.prototype.options.messages,{
  "apply": "Приложи",
  "cancel": "Откажи",
  "noColor": "без цвят",
  "clearColor": "Махни цвета"
});
}

/* Color picker */

if (kendo.ui.ColorPicker) {
kendo.ui.ColorPicker.prototype.options.messages =
$.extend(true, kendo.ui.ColorPicker.prototype.options.messages,{
  "apply": "Приложи",
  "cancel": "Откажи",
  "noColor": "без цвят",
  "clearColor": "Махни цвета"
});
}

/* DateRangePicker messages */

if (kendo.ui.DateRangePicker) {
kendo.ui.DateRangePicker.prototype.options.messages =
$.extend(true, kendo.ui.DateRangePicker.prototype.options.messages,{
  "startLabel": "Начало",
  "endLabel": "Край"
});
}

/* Filter menu operator messages */

if (kendo.ui.FilterMenu) {
kendo.ui.FilterMenu.prototype.options.operators =
$.extend(true, kendo.ui.FilterMenu.prototype.options.operators,{
  "string": {
    "eq": "Е равно на",
    "neq": "Не е равно на",
    "startswith": "Започва с",
    "contains": "Съдържа",
    "doesnotcontain": "Не съдържа",
    "endswith": "Завършва на"
  },
  "number": {
    "eq": "Е равно на",
    "neq": "Не е равно на",
    "gte": "Е по-голяма или равно на",
    "gt": "Е по-голямо от",
    "lte": "Е по-малко или равно на",
    "lt": "Е по-малко от"
  },
  "date": {
    "eq": "Е равно на",
    "neq": "Не е равно на",
    "gte": "Е след или равно на",
    "gt": "Е след",
    "lte": "Е преди или равно на",
    "lt": "Е преди"
  },
  "enums": {
    "eq": "E равно на",
    "neq": "Не е равно на"
  }
});
}

/* Filter cell operator messages */

if (kendo.ui.FilterCell) {
kendo.ui.FilterCell.prototype.options.operators =
$.extend(true, kendo.ui.FilterCell.prototype.options.operators,{
  "string": {
    "eq": "Е равно на",
    "neq": "Не е равно на",
    "startswith": "Започва с",
    "contains": "Съдържа",
    "doesnotcontain": "Не съдържа",
    "endswith": "Завършва на"
  },
  "number": {
    "eq": "Е равно на",
    "neq": "Не е равно на",
    "gte": "Е по-голяма или равно на",
    "gt": "Е по-голямо от",
    "lte": "Е по-малко или равно на",
    "lt": "Е по-малко от"
  },
  "date": {
    "eq": "Е равно на",
    "neq": "Не е равно на",
    "gte": "Е след или равно на",
    "gt": "Е след",
    "lte": "Е преди или равно на",
    "lt": "Е преди"
  },
  "enums": {
    "eq": "E равно на",
    "neq": "Не е равно на"
  }
});
}

/* ColumnMenu messages */

if (kendo.ui.ColumnMenu) {
kendo.ui.ColumnMenu.prototype.options.messages =
$.extend(true, kendo.ui.ColumnMenu.prototype.options.messages,{
  "sortAscending": "Сортирай възходящо",
  "sortDescending": "Сортирай низходящо",
  "filter": "Филтрирай",
  "column": "Колона",
  "columns": "Колони",
  "columnVisibility": "Видими колони",
  "clear": "Премахни",
  "cancel": "Откажи",
  "done": "Готово",
  "settings": "Настройки на колоната",
  "lock": "Заключи колоната",
  "unlock": "Отключи колоната",
  "stick" : "Залепи колоната",
  "unstick": "Отлепи колоната",
  "setColumnPosition": "Задай позиция на колоната",
  "apply": "Приложи",
  "reset": "Нулирай"
});
}

/* RecurrenceEditor messages */

if (kendo.ui.RecurrenceEditor) {
kendo.ui.RecurrenceEditor.prototype.options.messages =
$.extend(true, kendo.ui.RecurrenceEditor.prototype.options.messages,{
  "repeat": "Повторение",
  "recurrenceEditorTitle": "Конфигуратор на повторенията",
  "daily": {
    "interval": " ден(дни)",
    "repeatEvery": "Повтаряй всеки: "
  },
  "end": {
    "after": "След ",
    "occurrence": " повторение(я)",
    "label": "Край:",
    "never": "Никога",
    "on": "На ",
    "mobileLabel": "Край"
  },
  "frequencies": {
    "daily": "Ежедневно",
    "monthly": "Месечно",
    "never": "Никога",
    "weekly": "Седмично",
    "yearly": "Годишно"
  },
  "monthly": {
    "day": "Ден ",
    "interval": " месец(и)",
    "repeatEvery": "Повтаряй всеки: ",
    "repeatOn": "Повтаряй на: ",
    "date": "Дата"
  },
  "offsetPositions": {
    "first": "първи(а)",
    "fourth": "четвърти(та)",
    "last": "последен(на)",
    "second": "втори(а)",
    "third": "трети(та)"
  },
  "weekly": {
    "repeatEvery": "Повтаряй на: ",
    "repeatOn": "Повтаряй всеки: ",
    "interval": " седмица(и)"
  },
  "yearly": {
    "of": " от ",
    "repeatEvery": "Повтаряй всеки: ",
    "repeatOn": "Повтаряй на: ",
    "interval": " година(ни)",
    "month": "месец",
    "day": "ден",
    "date": "Дата"
  },
  "weekdays": {
    "day": "ден",
    "weekday": "делник",
    "weekend": "почивен ден"
  }
});
}

/* MobileRecurrenceEditor messages */

if (kendo.ui.MobileRecurrenceEditor) {
    kendo.ui.MobileRecurrenceEditor.prototype.options.messages =
    $.extend(true, kendo.ui.MobileRecurrenceEditor.prototype.options.messages, kendo.ui.RecurrenceEditor.prototype.options.messages, {
      "cancel": "Откажи",
      "update": "Запази",
      "endTitle": "Повтарянето завършва",
      "repeatTitle": "Вид повторение",
      "headerTitle": "Повтори събитието",
      "end": {
        "patterns": {
            "never": "Никога",
            "after": "След...",
            "on": "На..."
        },
        "never": "Никога",
        "after": "Приключи повторенията след",
        "on": "Приключи повторенията на"
      },
      "daily": {
        "interval": ""
      },
      "hourly": {
        "interval": ""
      },
      "weekly": {
        "interval": ""
      },
      "monthly": {
        "interval": "",
        "repeatBy": "Повтори според: ",
        "dayOfMonth": "Дата от месеца",
        "dayOfWeek": "Ден от седмицата",
        "repeatEvery": "Повтори всеки",
        "every": "Всеки",
        "day": "Ден "
      },
      "yearly": {
        "interval": "",
        "repeatBy": "Повтори според: ",
        "dayOfMonth": "Дата от месеца",
        "dayOfWeek": "Ден от седмицата",
        "repeatEvery": "Повтори всеки: ",
        "every": "Всеки",
        "month": "Месец",
        "day": "Ден"
      }
    });
}

/* Grid messages */

if (kendo.ui.Grid) {
kendo.ui.Grid.prototype.options.messages =
$.extend(true, kendo.ui.Grid.prototype.options.messages,{
  "commands": {
    "cancel": "Откажи промените",
    "canceledit": "Отказ",
    "create": "Добави",
    "destroy": "Изтриване",
    "edit": "Редактиране",
    "excel": "Експорт към Excel",
    "pdf": "Експорт към PDF",
    "save": "Запази промените",
    "select": "Избери",
    "update": "Обнови",
    "search": "Търси..."
  },
  "editable": {
    "cancelDelete": "Откажи",
    "confirmation": "Сигурни ли сте, че искате да изтриете записа?",
    "confirmDelete": "Изтрий"
  },
  "noRecords": "Няма налични записи.",
  "groupHeader": "Натиснете ctrl + space за да групирате",
  "ungroupHeader": "Натиснете ctrl + space за да разгрупирате"
});
}

/* ListBox messaages */

if (kendo.ui.ListBox) {
kendo.ui.ListBox.prototype.options.messages =
$.extend(true, kendo.ui.ListBox.prototype.options.messages,{
  "tools": {
    "remove": "Премахни",
    "moveUp": "Премести нагоре",
    "moveDown": "Премести надолу",
    "transferTo": "Прехвърли към",
    "transferFrom": "Прехвърли от",
    "transferAllTo": "Премести вс. към",
    "transferAllFrom": "Премести вс. от"
  }
});
}

/* TreeList messages */

if (kendo.ui.TreeList) {
kendo.ui.TreeList.prototype.options.messages =
$.extend(true, kendo.ui.TreeList.prototype.options.messages,{
    "noRows": "Няма налични записи.",
    "loading": "Зареждане...",
    "requestFailed": "Грешка при заявка",
    "retry": "Опитай отново",
    "commands": {
        "edit": "Редактиране",
        "update": "Обнови",
        "canceledit": "Отказ",
        "create": "Добави",
        "createchild": "Добави подзапис",
        "destroy": "Изтриване",
        "excel": "Експорт към Excel",
        "pdf": "Експорт към PDF"
    }
});
}

/* Pager messages */

if (kendo.ui.Pager) {
kendo.ui.Pager.prototype.options.messages =
$.extend(true, kendo.ui.Pager.prototype.options.messages,{
  "allPages": "Всички",
  "page": "Страница",
  "display": "{0} - {1} от {2} записи",
  "of": "от {0}",
  "empty": "Няма записи за показване!",
  "refresh": "Опресни",
  "first": "Към първата страница",
  "itemsPerPage": "записи на страница",
  "last": "Към последната страница",
  "next": "Към следващата страница",
  "previous": "Към предишната страница",
  "morePages": "Още страници"
});
}

/* TreeListPager messages */

if (kendo.ui.TreeListPager) {
    kendo.ui.TreeListPager.prototype.options.messages =
    $.extend(true, kendo.ui.TreeListPager.prototype.options.messages,{
      "allPages": "Всички",
      "page": "Страница",
      "display": "{0} - {1} от {2} записи",
      "of": "от {0}",
      "empty": "Няма записи за показване!",
      "refresh": "Опресни",
      "first": "Към първата страница",
      "itemsPerPage": "записи на страница",
      "last": "Към последната страница",
      "next": "Към следващата страница",
      "previous": "Към предишната страница",
      "morePages": "Още страници"
    });
    }

/* FilterMenu messages */

if (kendo.ui.FilterMenu) {
kendo.ui.FilterMenu.prototype.options.messages =
$.extend(true, kendo.ui.FilterMenu.prototype.options.messages,{
  "filter": "Филтрирай",
  "and": "и",
  "clear": "Премахни",
  "info": "Покажи записи със стойност, която",
  "title": "Покажи записи със стойност, която",
  "selectValue": "-Избери стойност-",
  "isFalse": "не е вярно",
  "isTrue": "е вярно",
  "or": "или",
  "cancel": "Откажи",
  "operator": "Оператор",
  "additionalOperator": "Допълнителен оператор",
  "value": "Стойност",
  "additionalValue": "Допълнителна стойност",
  "logic": "Логика",
  "done": "Готово",
  "into": "в"
});
}

/* FilterCell messages */

if (kendo.ui.FilterCell) {
kendo.ui.FilterCell.prototype.options.messages =
$.extend(true, kendo.ui.FilterCell.prototype.options.messages,{
  "filter": "Филтрирай",
  "clear": "Премахни",
  "isFalse": "не е вярно",
  "isTrue": "е вярно",
  "operator": "Оператор"
});
}

/* FilterMultiCheck messages */

if (kendo.ui.FilterMultiCheck) {
kendo.ui.FilterMultiCheck.prototype.options.messages =
$.extend(true, kendo.ui.FilterMultiCheck.prototype.options.messages,{
  "checkAll": "Избери всички",
  "clearAll": "Премахни всички",
  "clear": "Премахни",
  "filter": "Филтрирай",
  "search": "Търси",
  "cancel": "Откажи",
  "selectedItemsFormat": "{0} селектирани записи",
  "done": "Готово",
  "into": "в"
});
}

/* Groupable messages */

if (kendo.ui.Groupable) {
kendo.ui.Groupable.prototype.options.messages =
$.extend(true, kendo.ui.Groupable.prototype.options.messages,{
  "empty": "Дръпни колона и я пусни тук, за да групираш"
});
}

/* Editor messages */

if (kendo.ui.Editor) {
kendo.ui.Editor.prototype.options.messages =
$.extend(true, kendo.ui.Editor.prototype.options.messages,{
  "bold": "Получер",
  "createLink": "Направи препратка",
  "fontName": "Шрифт",
  "fontNameInherit": "(наследен шрифт)",
  "fontSize": "Размер на шрифта",
  "fontSizeInherit": "(наследен размер)",
  "formatBlock": "Избери формат",
  "indent": "Добави отстъп",
  "insertHtml": "Вмъкни HTML",
  "insertImage": "Вмъкни картина",
  "insertOrderedList": "Вмъкни номериран списък",
  "insertUnorderedList": "Вмъкни списък",
  "italic": "Курсив",
  "justifyCenter": "Центрирай",
  "justifyFull": "Подравни",
  "justifyLeft": "Подравни отляво",
  "justifyRight": "Подравни отдясно",
  "outdent": "Премахни отстъп",
  "strikethrough": "Зачертай",
  "style": "Стилове",
  "subscript": "Долен индекс",
  "superscript": "Горен индекс",
  "underline": "Подчертай",
  "unlink": "Премахни препратка",
  "deleteFile": "Сигурни ли сте че искате да изтриете \"{0}\"?",
  "directoryNotFound": "Директория с посоченото име не бе открита.",
  "emptyFolder": "Празна папка",
  "invalidFileType": "Избраният файл \"{0}\" не е валиден. Поддържаните файлови формати са {1}.",
  "orderBy": "Подреди по:",
  "orderByName": "Име",
  "orderBySize": "Големина",
  "overwriteFile": "Файл с име \"{0}\" вече съществува в тази папка. Искате ли да го презапишете?",
  "uploadFile": "Качи файл",
  "backColor": "Цвят на фона",
  "foreColor": "Цвят",
  "dialogButtonSeparator": "or",
  "dialogCancel": "Cancel",
  "dialogInsert": "Insert",
  "dialogOk": "Ok",
  "imageAltText": "Alternate text",
  "imageWebAddress": "Web address",
  "linkOpenInNewWindow": "Open link in new window",
  "linkText": "Text",
  "linkToolTip": "ToolTip",
  "linkWebAddress": "Web address",
  "search": "Търси",
  "createTable": "Създай таблица",
  "dropFilesHere": "преместете с мишката файлове тук за да ги качите",
  "addColumnLeft": "Add column on the left",
  "addColumnRight": "Add column on the right",
  "addRowAbove": "Add row above",
  "addRowBelow": "Add row below",
  "deleteColumn": "Delete column",
  "deleteRow": "Delete row",
  "styles": "Стилове",
  "formatting": "Format",
  "viewHtml": "Виж HTML-а",
  "dialogUpdate": "Обнови",
  "insertFile": "Вмъкни файл",
  "tableWizard": "Асистент за Таблици",
  "tableTab": "Таблица",
  "cellTab": "Клетка",
  "accessibilityTab": "Достъпност",
  "caption": "Надпис",
  "summary": "Обобщение",
  "width": "Ширина",
  "height": "Височина",
  "cellSpacing": "Разстояние между клетките",
  "cellPadding": "Отстояние на клетките",
  "cellMargin": "Разстояние от клетките",
  "alignment": "Подравняване",
  "background": "Фон",
  "cssClass": "CSS клас",
  "id": "ID",
  "border": "Рамка",
  "borderStyle": "Стил на рамката",
  "collapseBorders": "Свиване на рамката",
  "wrapText": "Събиране на текста",
  "associateCellsWithHeaders": "Асоциирай заглавията",
  "alignLeft": "Подравни ляво",
  "alignCenter": "Подравни център",
  "alignRight": "Подравни дясно",
  "alignLeftTop": "Подравни ляво и горе",
  "alignCenterTop": "Подравни център и горе",
  "alignRightTop": "Подравни дясно и горе",
  "alignLeftMiddle": "Подравни ляво и среда",
  "alignCenterMiddle": "Подравни център и среда",
  "alignRightMiddle": "Подравни дясно и среда",
  "alignLeftBottom": "Подравни ляво и долу",
  "alignCenterBottom": "Подравни център и горе",
  "alignRightBottom": "Подравни дясно и долу",
  "alignRemove": "Премахни подравняване",
  "columns": "Колони",
  "rows": "Редове",
  "selectAllCells": "Избери всички клетки",
  "print": "Принтирай",
  "associateNone": "Без асоцииране",
  "associateScope": "Асоцииране чрез 'scope' атрибут",
  "associateIds": "Асоцииране чрез Id",
  "copyFormat": "Копирай форматирането",
  "applyFormat": "Приложи форматирането",
  "borderNone": "Без рамка"
});
}

/* Upload messages */

if (kendo.ui.Upload) {
kendo.ui.Upload.prototype.options.localization =
$.extend(true, kendo.ui.Upload.prototype.options.localization,{
  "cancel": "Спри",
  "clearSelectedFiles": "Изчисти файловете",
  "dropFilesHere": "Преместете с мишката файлове тук за да ги качите",
  "invalidMaxFileSize": "Размерът на файла е твърде голям.",
  "invalidMinFileSize": "Размерът на файла е твърде малък.",
  "invalidFileExtension": "Този тип файл не е разрешен.",
  "remove": "Премахни",
  "retry": "Опитай отново",
  "select": "Избери...",
  "statusFailed": "грешка",
  "statusUploaded": "качен",
  "statusUploading": "качва се",
  "uploadSelectedFiles": "Качи файловете",
  "headerStatusUploaded": "Готово",
  "headerStatusUploading": "Качване..."
});
}

/* Scheduler messages */

if (kendo.ui.Scheduler) {
kendo.ui.Scheduler.prototype.options.messages =
$.extend(true, kendo.ui.Scheduler.prototype.options.messages,{
  "allDay": "цял ден",
  "cancel": "Откажи",
  "date": "Дата",
  "destroy": "Изтрий",
  "editable": {
    "confirmation": "Сигурен ли сте че искате да изтриете това събитие?"
  },
  "editor": {
    "allDayEvent": "Целодневно събитие",
    "description": "Описание",
    "editorTitle": "Събитие",
    "end": "Край",
    "endTimezone": "Крайна часова зона",
    "repeat": "Повторение",
    "separateTimezones": "Използвай различни часови зони за начало и край",
    "start": "Начало",
    "startTimezone": "Начална часова зона",
    "timezone": " ",
    "timezoneEditorButton": "Часовa зона",
    "timezoneEditorTitle": "Часови зони",
    "title": "Заглавие",
    "noTimezone": "Без часова зона"
  },
  "event": "Събитие",
  "recurrenceMessages": {
    "deleteRecurring": "Сигурен ли сте че искате да изтриете това събитие или цялата серия?",
    "deleteWindowOccurrence": "Изтрий единично събитие",
    "deleteWindowSeries": "Изтрий серията",
    "deleteWindowTitle": "Изтриване на повтарящо се събитие",
    "editRecurring": "Сигурен ли сте че искате да промените това събитие или цялата серия?",
    "editWindowOccurrence": "Промени единично събитие",
    "editWindowSeries": "Промени серията",
    "editWindowTitle": "Промяна на повтарящо се действие"
  },
  "save": "Запази",
  "time": "Време",
  "today": "Днес",
  "views": {
    "agenda": "Дневен ред",
    "day": "Ден",
    "month": "Месец",
    "week": "Седмица",
    "workWeek": "Работна седмица"
  },
  "deleteWindowTitle": "Изтрий събитие",
  "showFullDay": "Покажи цял ден",
  "showWorkDay": "Покажи работни часове",
  "search": "Намери..."
});
}

/* Dialog */

if (kendo.ui.Dialog) {
kendo.ui.Dialog.prototype.options.messages =
$.extend(true, kendo.ui.Dialog.prototype.options.localization,{
  "close": "Затвори"
});
}

/* Alert */

if (kendo.ui.Alert) {
kendo.ui.Alert.prototype.options.messages =
$.extend(true, kendo.ui.Alert.prototype.options.localization,{
  "okText": "OK"
});
}

/* Confirm */

if (kendo.ui.Confirm) {
kendo.ui.Confirm.prototype.options.messages =
$.extend(true, kendo.ui.Confirm.prototype.options.localization,{
  "okText": "OK",
  "cancel": "Отказ"
});
}

/* Prompt */

if (kendo.ui.Prompt) {
kendo.ui.Prompt.prototype.options.messages =
$.extend(true, kendo.ui.Prompt.prototype.options.localization,{
  "okText": "OK",
  "cancel": "Отказ"
});
}

/* kendo.ui.progress method */
if (kendo.ui.progress) {
kendo.ui.progress.messages =
$.extend(true, kendo.ui.progress.messages, {
    loading: "Зареждане..."
});
}

/* DateInput */
if (kendo.ui.DateInput) {
  kendo.ui.DateInput.prototype.options.messages =
    $.extend(true, kendo.ui.DateInput.prototype.options.messages, {
      "year": "година",
      "month": "месец",
      "day": "ден",
      "weekday": "ден от седмицата",
      "hour": "часа",
      "minute": "минути",
      "second": "секунди",
      "dayperiod": "AM/PM"
    });
}

/* List messages */
if (kendo.ui.List) {
    kendo.ui.List.prototype.options.messages =
    $.extend(true, kendo.ui.List.prototype.options.messages,{
      "clear": "изчисти",
      "noData": "Няма налични опции."
    });
}

/* DropDownList messages */

if (kendo.ui.DropDownList) {
    kendo.ui.DropDownList.prototype.options.messages =
    $.extend(true, kendo.ui.DropDownList.prototype.options.messages, kendo.ui.List.prototype.options.messages);
}

/* ComboBox messages */

if (kendo.ui.ComboBox) {
    kendo.ui.ComboBox.prototype.options.messages =
    $.extend(true, kendo.ui.ComboBox.prototype.options.messages, kendo.ui.List.prototype.options.messages);
}

/* AutoComplete messages */

if (kendo.ui.AutoComplete) {
    kendo.ui.AutoComplete.prototype.options.messages =
    $.extend(true, kendo.ui.AutoComplete.prototype.options.messages, kendo.ui.List.prototype.options.messages);
}

/* MultiColumnComboBox messages */

if (kendo.ui.MultiColumnComboBox) {
    kendo.ui.MultiColumnComboBox.prototype.options.messages =
    $.extend(true, kendo.ui.MultiColumnComboBox.prototype.options.messages, kendo.ui.List.prototype.options.messages);
}

/* DropDownTree messages */

if (kendo.ui.DropDownTree) {
    kendo.ui.DropDownTree.prototype.options.messages =
    $.extend(true, kendo.ui.DropDownTree.prototype.options.messages,{
        "singleTag": "избрана/и опция/и",
        "clear": "изчисти",
        "deleteTag": "премахни",
        "noData": "Няма налични опции."
    });
}

/* MultiSelect messages */

if (kendo.ui.MultiSelect) {
    kendo.ui.MultiSelect.prototype.options.messages =
    $.extend(true, kendo.ui.MultiSelect.prototype.options.messages,{
        "singleTag": "избрана/и опция/и",
        "clear": "изчисти",
        "deleteTag": "премахни",
        "noData": "Няма налични опции."
    });
}

/* Chat messages */

if (kendo.ui.Chat) {
    kendo.ui.Chat.prototype.options.messages =
    $.extend(true, kendo.ui.Chat.prototype.options.messages,{
        "placeholder": "Напиши съобщение...",
        "toggleButton": "Отвори/затвори лентата с инструменти",
        "sendButton": "Изпрати съобщение"
    });
}

/* TimePicker */

if (kendo.ui.TimePicker) {
    kendo.ui.TimePicker.prototype.options.messages =
    $.extend(true, kendo.ui.TimePicker.prototype.options.messages, {
        "set": "Приложи",
        "cancel": "Отмени",
        "hour": "час",
        "minute": "минути",
        "second": "секунди",
        "milisecond": "милисекунди",
        "now": "Сега"
    });
}

/* DateTimePicker */

if (kendo.ui.DateTimePicker) {
  kendo.ui.DateTimePicker.prototype.options.messages =
  $.extend(true, kendo.ui.DateTimePicker.prototype.options.messages, {
      "set": "Приложи",
      "cancel": "Отмени",
      "hour": "час",
      "minute": "минути",
      "second": "секунди",
      "milisecond": "милисекунди",
      "now": "Сега",
      "date": "Дата",
      "time": "Час"
  });
}

/* Calendar */

if (kendo.ui.Calendar) {
  kendo.ui.Calendar.prototype.options.messages =
  $.extend(true, kendo.ui.Calendar.prototype.options.messages, {
    "today": "Днес"
  });
}

/* Wizard messages */

if (kendo.ui.Wizard) {
    kendo.ui.Wizard.prototype.options.messages =
    $.extend(true, kendo.ui.Wizard.prototype.options.messages,{
        "reset": "Нулиране",
        "previous": "Предишна",
        "next": "Следваща",
        "done": "Готово",
        "step": "Стъпка",
        "of": "от"
    });
}


/* PDFViewer messages */

if (kendo.ui.PDFViewer) {
    kendo.ui.PDFViewer.prototype.options.messages =
    $.extend(true, kendo.ui.PDFViewer.prototype.options.messages, {
        defaultFileName: "Документ",
        toolbar: {
            zoom: {
                zoomLevel: "ниво на приближение",
                zoomOut: "Отдалечи",
                zoomIn: "Приближи",
                actualWidth: "Действителна ширина",
                autoWidth: "Автоматична ширина",
                fitToWidth: "Изпълни ширината",
                fitToPage: "Покажи цяла страница"
            },
            open: "Отвори",
            exportAs: "Експортирай",
            download: "Свали",
            pager:  {
                first: "Отиди на първата страница",
                previous: "Отиди на предишната страница",
                next: "Отиди на следващата страница",
                last: "Отиди на последната страница",
                of: " от {0} ",
                page: "страница",
                pages: "страници"
            },
            print: "Разпечатай",
            toggleSelection: "Активирай селектиране",
            togglePan: "Активирай местене",
            search: "Търси"
        },
        errorMessages: {
            notSupported: "Разрешени са само файлове в PDF.",
            parseError: "Неуспешно обработване на PDF файлът.",
            notFound: "Файлът не беше открит.",
            popupBlocked: "Изскачащият прозорец беше блокиран."
        },
        dialogs: {
            exportAsDialog: {
                title: "Експортирай...",
                defaultFileName: "Документ",
                pdf: "Portable Document Format (.pdf)",
                png: "Portable Network Graphics (.png)",
                svg: "Scalable Vector Graphics (.svg)",
                labels: {
                    fileName: "Име на файла",
                    saveAsType: "Сапази като",
                    page: "Страница"
                }
            },
            okText: "ОК",
            save: "Сапази",
            cancel: "Отмени",
            search: {
                inputLabel: "Търси текст",
                matchCase: "Търси според малки/големи букви",
                next: "Следващо съвпадение",
                previous: "Предишно съвпадение",
                close: "Затвори",
                of: "от"
            }
        }
    });
}

})(window.kendo.jQuery);
}));