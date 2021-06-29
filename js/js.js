document.addEventListener('DOMContentLoaded', (event) => {
    let drawer_div = document.querySelector(".header_drawer");
    let hamico_div = document.querySelector(".header_hamIco");
    let line_div = document.querySelector(".header_line");
    let logo_div = document.querySelector(".header_logo");
    let logo_g_svg = document.querySelector(".header_logo_g");
    let logo_e_svg = document.querySelector(".header_logo_e");
    let logo_ssa_svg = document.querySelector(".header_logo_ssa");
    //let drawerHeight = document.querySelector(".header_drawerItems").clientHeight;
    
    
	hamico_div.addEventListener("click" , togglemenu);
    let showMenu = false;
    function togglemenu(){
        if (!showMenu){
            drawer_div.classList.add('header_drawer--open');
            line_div.classList.add('header_line--open');
            document.querySelector(".header_logo").style.top = document.querySelector(".header_drawerItems").clientHeight - 154 + 'px';
            logo_g_svg.classList.add('header_logo_g--open');
            logo_e_svg.classList.add('header_logo_e--open');
            logo_ssa_svg.classList.add('header_logo_ssa--open');
            
            
            showMenu = true;
        }else {
            drawer_div.classList.remove('header_drawer--open');
            line_div.classList.remove('header_line--open');
            logo_div.style.top = 6 + 'rem';
            logo_g_svg.classList.remove('header_logo_g--open');
            logo_e_svg.classList.remove('header_logo_e--open');
            logo_ssa_svg.classList.remove('header_logo_ssa--open');
            
            showMenu = false;
        }   
    }
  });

 
  