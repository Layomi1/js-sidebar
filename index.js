//  the sidebar, toggle-btn, close-btn
const sidebar = document.querySelector(".sidebar");
const menu_btn = document.querySelector(".sidebar-toggle");
const close_btn = document.querySelector(".btn-close");
// console.log(menu_btn);

menu_btn.addEventListener('click', function(){
    // console.log(sidebar.classList);
    sidebar.classList.toggle("show-sidebar");
})
    
    
close_btn.addEventListener( 'click', function (){
    sidebar.classList.remove('show-sidebar');
})














