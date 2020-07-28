var inputfile = document.getElementById('inputfile')
var image = document.getElementById('img')

inputfile.addEventListener("change", function (e) {
    var file = e.target.files
    var reader = new FileReader()
    reader.readAsDataURL(file[0])
    reader.onload = function () {
        image.src = reader.result;
    }
}, false)

// リロードなしでHTML表記をロード時に戻す
// https://sachips.byeto.jp/js/html_restore.html
// 初期HTML記述をセット
var defaultHTML;
function DefaultSave() {
    defaultHTML = document.body.innerHTML;
}
// HTML記述を初期状態に戻す
function HTMLRestore() {
    document.body.innerHTML = defaultHTML;
    // 現在表示されているページをリロードする
    // https://qiita.com/39_isao/items/1c26314d1dae8be539a5
    location.reload();
}
