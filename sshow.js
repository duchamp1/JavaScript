myImage = new Array(	        // �摜�t�@�C�����̐ݒ�
    "img/Harada_Tomoyo.jpg",	// ���c�m��
    "img/Kikukawa_Rei.jpg",		// �e���
    "img/Koizumi_Kyoko.jpg",	// ���򍡓��q
    "img/Minamino_Yoko.jpg",	// ���z�q
    "img/Nakamori_Akina.jpg",	// ���X����
    "img/Natsume_Masako.jpg",	// �Ėډ�q
    "img/Yamaguchi_Tomoko.jpg"	// �R���q�q
);	
myNowCnt = -1;		    // ���ݕ\�����Ă���z��ԍ�
myflg = 0;		        // �ǂ�����\�����āA�ǂ������������̃t���O
function myChange(){	// �X���C�h�V���[���C���֐�
    myNowCnt = (myNowCnt<myImage.length-1) ? myNowCnt+1 : 0;		// ���̔z��ԍ�
    myflg = (myflg==0) ? 1 : 0;	                                    // �\���E��\���t���O���]
    if (myflg == 0){
        document.getElementById("idshow1").src = myImage[myNowCnt];	// ���̉摜���Z�b�g����
        document.getElementById("idshow1").className = "fadein";	// �t�F�[�h�C��
        document.getElementById("idshow2").className = "fadeout";	// �t�F�[�h�A�E�g
    }else{
        document.getElementById("idshow2").src = myImage[myNowCnt];	// ���̉摜���Z�b�g����
        document.getElementById("idshow1").className = "fadeout";	// �t�F�[�h�A�E�g
        document.getElementById("idshow2").className = "fadein";	// �t�F�[�h�C��
    }
    setTimeout( "myChange()" , 3000 );					            // 3�b�����ɉ摜���X�V����
}	
