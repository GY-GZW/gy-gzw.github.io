// ����һ��Audio����  
var audio = new Audio('Shed A Light(ԭ������).mp3');

// ���Բ�����Ƶ  
audio.play()
    .then(() => {
        // ���ųɹ�  
        console.log('��Ƶ���ųɹ�');
    })
    .catch((error) => {
        // ����ʧ�ܣ���������Ϊ�Զ����Ų��Ա���ֹ  
        if (error.name === 'NotAllowedError') {
            // ��ʾ�û�������Ű�ť  
            alert('��Ƶ���ű���ֹ���������Ű�ť�Լ�����');
            // ����������һЩ�߼�����ʾ�����ò��Ű�ť  
        } else {
            // ����������  
            console.error('��Ƶ����ʧ��:', error);
        }
    });