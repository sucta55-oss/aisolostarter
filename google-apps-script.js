
/**
 * GOOGLE APPS SCRIPT HANDLER FOR AI SOLOPRENEUR LANDING PAGE
 * Spreadsheet ID: 14oUgAdI1h9zBfVx_kwsdK40OoOIgd2MHXcqUEpMiI7o
 * Sheet Name: 3Days-ClickAI-Data
 */

function doPost(e) {
  // Thiết lập khóa để tránh xung đột khi nhiều người đăng ký cùng lúc
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Đợi tối đa 10 giây

  try {
    var sheetId = "14oUgAdI1h9zBfVx_kwsdK40OoOIgd2MHXcqUEpMiI7o";
    var sheetName = "3Days-ClickAI-Data";
    
    var ss = SpreadsheetApp.openById(sheetId);
    var sheet = ss.getSheetByName(sheetName);
    
    // Nếu Sheet chưa tồn tại, tự động tạo và thêm tiêu đề
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      sheet.appendRow(["Thời gian", "Tên khách hàng", "Email", "Số điện thoại"]);
      // Làm đẹp tiêu đề
      var headerRange = sheet.getRange(1, 1, 1, 4);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#EF4444"); // Màu đỏ Primary
      headerRange.setFontColor("#FFFFFF");
      headerRange.setHorizontalAlignment("center");
    }
    
    // Đọc dữ liệu gửi từ Landing Page
    var data = JSON.parse(e.postData.contents);
    
    // Ghi dữ liệu vào cột tương ứng (A, B, C, D)
    sheet.appendRow([
      data.timestamp, // Cột A: dd/MM/yyyy HH:mm:ss
      data.name,      // Cột B: Tên
      data.email,     // Cột C: Email
      data.phone      // Cột D: Số điện thoại
    ]);
    
    // Trả về kết quả thành công
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Trả về lỗi nếu có
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } finally {
    // Giải phóng khóa
    lock.releaseLock();
  }
}

/**
 * Hàm kiểm tra nhanh trạng thái Script
 */
function doGet() {
  return ContentService.createTextOutput("Hệ thống ghi nhận dữ liệu AI Solopreneur đang hoạt động ổn định.");
}
