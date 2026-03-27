function doPost(e){

var sheet=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1")

var data=JSON.parse(e.postData.contents)

sheet.appendRow([
new Date(),
data.rating,
data.mobile,
data.email,
data.feedback
])

return ContentService.createTextOutput("success")

}