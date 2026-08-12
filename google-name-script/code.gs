```javascript
/* =========================================================
   NEPAL RENEWABLE ENERGY SURVEY
   Google Apps Script
========================================================= */


/* =========================================================
   CONFIGURATION
========================================================= */

// Name of the sheet where responses will be stored.
const SHEET_NAME = "Responses";


/* =========================================================
   GET REQUEST
========================================================= */

function doGet() {

    return ContentService
        .createTextOutput(
            JSON.stringify({
                status: "success",
                message: "Nepal Renewable Energy Survey API is running."
            })
        )
        .setMimeType(
            ContentService.MimeType.JSON
        );

}


/* =========================================================
   POST REQUEST
========================================================= */

function doPost(e) {

    try {

        /*
         * The website sends the response
         * as JSON data.
         */

        const data =
            JSON.parse(e.postData.contents);


        /* -----------------------------------------
           OPEN GOOGLE SHEET
        ----------------------------------------- */

        const spreadsheet =
            SpreadsheetApp.getActiveSpreadsheet();


        let sheet =
            spreadsheet.getSheetByName(
                SHEET_NAME
            );


        /* -----------------------------------------
           CREATE SHEET IF IT DOES NOT EXIST
        ----------------------------------------- */

        if (!sheet) {

            sheet =
                spreadsheet.insertSheet(
                    SHEET_NAME
                );

        }


        /* -----------------------------------------
           CREATE HEADERS
        ----------------------------------------- */

        if (sheet.getLastRow() === 0) {

            const headers = [
                "Timestamp",

                "Q1",
                "Q2",
                "Q3",
                "Q4",
                "Q5",

                "Q6",
                "Q7",
                "Q8",
                "Q9",
                "Q10",

                "Q11",
                "Q12",
                "Q13",
                "Q14",
                "Q15",

                "Q16",
                "Q17",
                "Q18",
                "Q19",
                "Q20",
                "Q21",
                "Q22",

                "Q23",
                "Q24",
                "Q25",
                "Q26",

                "Q27",
                "Q28",

                "Q29",
                "Q30",
                "Q31",
                "Q32"
            ];


            sheet
                .getRange(
                    1,
                    1,
                    1,
                    headers.length
                )
                .setValues([headers]);


            /* Make headers look better */

            sheet
                .getRange(
                    1,
                    1,
                    1,
                    headers.length
                )
                .setFontWeight("bold");

        }


        /* -----------------------------------------
           PREPARE RESPONSE
        ----------------------------------------- */

        const row = [

            data.timestamp || new Date(),

            data.Q1 || "",
            data.Q2 || "",
            data.Q3 || "",
            data.Q4 || "",
            data.Q5 || "",

            data.Q6 || "",
            formatAnswer(data.Q7),
            formatAnswer(data.Q8),
            data.Q9 || "",
            formatAnswer(data.Q10),

            data.Q11 || "",
            data.Q12 || "",
            data.Q13 || "",
            data.Q14 || "",
            data.Q15 || "",

            data.Q16 || "",
            data.Q17 || "",
            data.Q18 || "",
            data.Q19 || "",
            data.Q20 || "",
            data.Q21 || "",
            data.Q22 || "",

            data.Q23 || "",
            data.Q24 || "",
            formatAnswer(data.Q25),
            data.Q26 || "",

            data.Q27 || "",
            data.Q28 || "",

            formatAnswer(data.Q29),
            data.Q30 || "",
            data.Q31 || "",
            data.Q32 || ""

        ];


        /* -----------------------------------------
           ADD RESPONSE TO SHEET
        ----------------------------------------- */

        sheet
            .appendRow(row);


        /* -----------------------------------------
           RETURN SUCCESS
        ----------------------------------------- */

        return ContentService
            .createTextOutput(
                JSON.stringify({
                    status: "success",
                    message: "Response recorded successfully."
                })
            )
            .setMimeType(
                ContentService.MimeType.JSON
            );


    } catch (error) {

        /* -----------------------------------------
           RETURN ERROR
        ----------------------------------------- */

        return ContentService
            .createTextOutput(
                JSON.stringify({
                    status: "error",
                    message: error.toString()
                })
            )
            .setMimeType(
                ContentService.MimeType.JSON
            );

    }

}


/* =========================================================
   FORMAT MULTIPLE-CHOICE ANSWERS
========================================================= */

function formatAnswer(answer) {

    if (Array.isArray(answer)) {

        return answer.join(" | ");

    }

    return answer || "";

}
```
