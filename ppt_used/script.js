// script.js
const imageFolderPath = 'picture/'; // 替换为实际图片文件夹路径
        let images  = [
           'frame1_1.jpg','frame1_2.jpg','frame1_5.jpg','frame1_7.jpg','frame1_24.jpg','frame1_25.jpg','frame1_29.jpg','frame1_30.jpg','frame1_34.jpg','frame1_40.jpg','frame1_41.jpg','frame1_42.jpg','frame1_43.jpg','frame1_44.jpg','frame3_0.jpg','frame3_1.jpg','frame3_2.jpg','frame3_4.jpg','frame3_5.jpg','frame3_7.jpg','frame3_8.jpg','frame3_10.jpg','frame3_11.jpg','frame3_13.jpg','frame3_14.jpg','frame3_15.jpg','frame3_16.jpg','frame3_17.jpg','frame3_19.jpg','frame3_20.jpg','frame3_21.jpg','frame3_22.jpg','frame3_23.jpg','frame3_24.jpg','frame3_25.jpg','frame3_26.jpg','frame3_28.jpg','frame3_29.jpg','frame3_30.jpg','frame3_31.jpg','frame3_32.jpg','frame3_33.jpg','frame3_34.jpg','frame3_35.jpg','frame3_36.jpg','frame3_37.jpg','frame3_38.jpg','frame3_39.jpg','frame3_40.jpg','frame3_41.jpg','frame3_42.jpg','frame3_43.jpg','frame3_44.jpg','frame6_0.jpg','frame6_2.jpg','frame6_5.jpg','frame6_10.jpg','frame6_12.jpg','frame6_14.jpg','frame6_15.jpg','frame6_16.jpg','frame6_17.jpg','frame6_18.jpg','frame6_19.jpg','frame6_20.jpg','frame6_21.jpg','frame6_22.jpg','frame6_23.jpg','frame6_24.jpg','frame6_26.jpg','frame6_28.jpg','frame6_29.jpg','frame6_31.jpg','frame6_36.jpg','frame6_40.jpg','frame6_41.jpg','frame6_42.jpg','frame10_0.jpg','frame10_1.jpg','frame10_2.jpg','frame10_3.jpg','frame10_4.jpg','frame10_5.jpg','frame10_6.jpg','frame10_10.jpg','frame10_11.jpg','frame10_12.jpg','frame10_16.jpg','frame10_19.jpg','frame10_23.jpg','frame10_25.jpg','frame10_27.jpg','frame10_37.jpg','frame10_40.jpg','frame11_1.jpg','frame11_8.jpg','frame11_9.jpg','frame11_14.jpg','frame11_18.jpg','frame11_22.jpg','frame11_23.jpg','frame11_25.jpg','frame11_27.jpg','frame11_32.jpg','frame11_34.jpg','frame11_35.jpg','frame11_36.jpg','frame11_40.jpg','frame11_42.jpg','frame11_43.jpg','frame12_0.jpg','frame12_7.jpg','frame12_11.jpg','frame12_12.jpg','frame12_13.jpg','frame12_19.jpg','frame12_20.jpg','frame12_23.jpg','frame12_25.jpg','frame12_26.jpg','frame12_28.jpg','frame12_29.jpg','frame12_34.jpg','frame12_38.jpg','frame12_41.jpg','frame13_0.jpg','frame13_2.jpg','frame13_5.jpg','frame13_8.jpg','frame13_9.jpg','frame13_13.jpg','frame13_15.jpg','frame13_17.jpg','frame13_18.jpg','frame13_21.jpg','frame13_22.jpg','frame13_23.jpg','frame13_29.jpg','frame13_34.jpg','frame13_37.jpg','frame13_38.jpg','frame13_40.jpg','frame13_43.jpg'
            // 在此添加更多的图片路径
        ];

let currentIndex = 0;

const imageDisplay = document.getElementById('image-display');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

// 更新图片显示
function updateImage() {
    imageDisplay.src = imageFolderPath + images[currentIndex];
    imageDisplay.style.transform = 'scale(1.05)'; // 加入轻微缩放动画
    setTimeout(() => {
        imageDisplay.style.transform = 'scale(1)';
    }, 300);
}

// 按钮点击事件
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// 初始化显示第一张图片
updateImage();
