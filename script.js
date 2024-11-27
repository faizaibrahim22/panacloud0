const sidebar =document.querySelector('.sidebar');
const toggleButton= document.querySelector('.fa-bars');
const sidebarLinks = document.querySelectorAll('.sidebar-bar-links a');



function closeSidebar(){
    sidebar.closeList.remove('active');
    setTimeout(()=>{
        sidebar.style.display="none";
    },30);
}



toggleButton.addEventListener('click' ,()=>{


    if(sidebar.classList.contains){
        closeSidebar();
    }else{
        sidebar.style.display="block";
        setTimeout(()=>{
            sidebar.classList.add();
        },2)
    }
})

sidebarLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        closeSidebar();
    })
})