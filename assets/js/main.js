document.addEventListener('DOMContentLoaded', function(){
    const proyekData = [
        { title: 'BookWise', desc: 'BookWise merupakan aplikasi berbasis web yang bertujuan untuk membantu user dalam membaca buku secara online', img: './assets/img/proyek/bookwise-proyek.png'},
        { title: 'Chocosheky Profile', desc: 'Chocosheky Profile adalah Proyek yang saya kerjakan untuk menyelasaikan modul Belajar Dasar Pemrograman Web dari Dicoding yang mengimplementasikan semantic HTML', img: './assets/img/proyek/chocosheky-proyek-dicoding.png'},
        { title: 'Book Self', desc: 'Book Self adalah Proyek yang saya kerjakan untuk menyelasaikan modul Belajar Membuat Front-end Web Pemula dari Dicoding yang mengimplementasikan DOM', img: './assets/img/proyek/bookself-proyek-dicoding.png'},
        { title: 'Edi Book Store', desc: 'Edi Book Store adalah Proyek akhir yang saya kerjakan untuk menyelasaikan Studi Independent dari Software University yang mengimplementasikan Bahasa Pemrograman Python dan Framework Django', img: './assets/img/proyek/ecommerce-django-stupen.png'},
    ]

    const proyekContainer = document.getElementsByClassName('proyek')[0];
    proyekData.forEach((item) => {
        const proyekHTML = `
        <div class="card card-transition" style="width: 18rem">
            <img src="${item.img}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.desc}</p>
            </div>
        </div>
        `;
        proyekContainer.innerHTML += proyekHTML;
    })

    const sertifData = [
        {
            title: 'Belajar Dasar Pemrograman Web', img: './assets/img/sertif/sertif-dicoding-dasar-web.png'
        },
        {
            title: 'Belajar Membuat Front-end untuk Pemula', img: './assets/img/sertif/sertif-dicoding-front-end-pemula.png'
        },
        {
            title: 'Belajar Dasar Pemrograman Javascript', img: './assets/img/sertif/sertif-dicoding-js.png'
        },
        {
            title: 'Belajar Framework Bootstrap', img: './assets/img/sertif/sertif-belajar-bootstrap.png'
        },
        {
            title: 'Sertifikat Kelulusan Studi Independent - Softuni ID', img: './assets/img/sertif/sertif-kelulusan-stupen.png'
        },
        {
            title: 'Sertifikat Kepesertaan Studi Independent BATCH 7', img: './assets/img/sertif/sertif-kepesertaan-stupen.png'
        },
    ]

    const sertifContainer = document.getElementsByClassName('daftar-sertif')[0];
    sertifData.forEach((item) => {
        const sertifHTML = `
            <div class="card card-transition" style="width: 18rem">
                <img src="${item.img}" class="card-img-top" alt="..." />
                <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                </div>
            </div
        `;

        sertifContainer.innerHTML += sertifHTML;
    });
});