// 创建一个Audio对象  
var audio = new Audio('Shed A Light.mp3');

// 尝试播放音频  
audio.play()
    .then(() => {
        // 播放成功  
        console.log('音频播放成功');
    })
    .catch((error) => {
        // 播放失败，可能是因为自动播放策略被阻止  
        if (error.name === 'NotAllowedError') {
            // 提示用户点击播放按钮  
            alert('音频播放被阻止，请点击播放按钮以继续。');
            // 这里可以添加一些逻辑来显示或启用播放按钮  
        } else {
            // 其他错误处理  
            console.error('音频播放失败:', error);
        }
    });