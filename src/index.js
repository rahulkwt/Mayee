// import "./styles.css";
console.log("hello world!");
// document.querySelector('.popup').style.display = 'none';
// document.querySelectorAll('.blog-click').forEach(blog =>{
//     blog.addEventListener('click', function(){
//         document.querySelector('.popup').style.display = 'flex';
//         document.querySelector('.popup').querySelector('.head').innerText = blog.querySelector('.blog-head').innerText;
//         document.querySelector('.popup').querySelector('.desc').innerText = blog.querySelector('.blog-desc').innerText;
//         document.querySelector('.popup').querySelector('.imgport').src= blog.querySelector('.blog-pt').src;
//         document.body.classList.add('popup-active');
//     })
// })
document.querySelector('.cross-out').addEventListener('click', function(){
    document.querySelector('.popup').style.display = 'none';
    document.body.classList.remove('popup-active');
})
console.log('No Error');