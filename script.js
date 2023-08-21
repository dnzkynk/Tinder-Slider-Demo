var models = [
    {
        name: 'Deniz Kaynak',
        image: 'img/Deniz.jpg',
        link: 'https://www.instagram.com/dnz_kynk/',
        text: 'Sivaslıyım, 20 yaşındayım Oğlak burcuyum',
    },
    {
        name: 'Umut Gündoğdu',
        image: 'img/Umut.jpg',
        link: 'https://www.instagram.com/umutgundgdu/',
        text: 'Samsunluyum, 20 yaşındayım ikizler burcuyum',
    },
    {
        name: 'Celal Can Uğurlu',
        image: 'img/Celal.jpg',
        link: 'https://www.instagram.com/celallugurlu/',
        text: 'Orduluyum, 20 yaşındayım Oğlak burcuyum',
    },
    {
        name: 'Sinan Kurban',
        image: 'img/Sinan.jpg',
        link: 'https://www.instagram.com/sinankurbann_/',
        text: 'Malesef kastamonuluyum, yaşım yükselenim mars',
    },
    {
        name: 'Emre Çilo',
        image: 'img/Emre.jpg',
        link: 'https://www.instagram.com/ciloemree/',
        text: 'Rizeluyum da ha bu arada yaşım 25 dir uşağum',
    },
];

var index = 0;
slaytCount = models.length;
var interval;

var settings = {
    duration : '3000',
    random : false
}
init(settings);

showSlide(index);

document
    .querySelector('.fa-circle-arrow-left')
    .addEventListener('click', function () {
        index--;
        console.log(index);
        showSlide(index);
    });

document
    .querySelector('.fa-circle-arrow-right')
    .addEventListener('click', function () {
        index++;
        console.log(index);
        showSlide(index);
    });

    document.querySelectorAll('.arrow').forEach(function(item) {
        item.addEventListener('mouseenter',function(){
            clearInterval(interval);
        })
    });

    document.querySelectorAll('.arrow').forEach(function(item){
        item.addEventListener('mouseleave',function(){
            init(settings);

        })
    });

    function init(settings) {

        var prev;

        interval = setInterval(function(){

            if(settings.random) {
                do {
                index = Math.floor(Math.random()* slaytCount);

                }while(index == prev)
                prev = index;
            }
            else {

                if(slaytCount == index + 1) {
                    index = -1 ;
                }
                showSlide(index);
                console.log(index);
                index++;


            }
            showSlide(index);

        },settings.duration)

    


    }

    function showSlide(i) {

    index = i;

    if(i<0) {

        index = slaytCount - 1;
    }
    if(i >= slaytCount) {

        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document
        .querySelector('.card-img-top')
        .setAttribute('src', models[index].image);
    document
        .querySelector('.fa-heart-circle-plus')
        .setAttribute('href', models[index].link);
        document.querySelector('.card-text').textContent = models[index].text;
}


