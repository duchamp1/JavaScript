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

// �����[�h�Ȃ���HTML�\�L�����[�h���ɖ߂�
// https://sachips.byeto.jp/js/html_restore.html
// ����HTML�L�q���Z�b�g
var defaultHTML;
function DefaultSave() {
    defaultHTML = document.body.innerHTML;
}
// HTML�L�q��������Ԃɖ߂�
function HTMLRestore() {
    document.body.innerHTML = defaultHTML;
    // ���ݕ\������Ă���y�[�W�������[�h����
    // https://qiita.com/39_isao/items/1c26314d1dae8be539a5
    location.reload();
}
