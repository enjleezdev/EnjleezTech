document.addEventListener('DOMContentLoaded', function() {
    // إزالة أي كود قد يخفي القائمة على الشاشات الصغيرة
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const navUl = document.querySelector('nav ul');
    
    // التأكد من ظهور القائمة
    if (header) header.style.display = 'block';
    if (nav) nav.style.display = 'block';
    if (navUl) navUl.style.display = 'flex';
    
    // تفعيل زر تغيير اللغة
    const languageToggle = document.getElementById('language-toggle');
    
    languageToggle.addEventListener('click', function() {
        const htmlElement = document.documentElement;
        
        if (htmlElement.getAttribute('lang') === 'en') {
            // تغيير إلى العربية
            htmlElement.setAttribute('lang', 'ar');
            htmlElement.setAttribute('dir', 'rtl');
            this.textContent = 'English';
        } else {
            // تغيير إلى الإنجليزية
            htmlElement.setAttribute('lang', 'en');
            htmlElement.setAttribute('dir', 'ltr');
            this.textContent = 'العربية';
        }
        
        // حفظ تفضيل اللغة
        localStorage.setItem('language', htmlElement.getAttribute('lang'));
    });
    
    // استرجاع تفضيل اللغة المحفوظ
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'ar') {
        document.documentElement.setAttribute('lang', 'ar');
        document.documentElement.setAttribute('dir', 'rtl');
        languageToggle.textContent = 'English';
    }
    
    // تفعيل الأدراج السفلية
    const footerToggles = document.querySelectorAll('.footer-toggle');
    const closeButtons = document.querySelectorAll('.close-drawer');
    
    footerToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const drawer = document.getElementById(targetId);
            
            // إغلاق جميع الأدراج المفتوحة
            document.querySelectorAll('.drawer.active').forEach(activeDrawer => {
                if (activeDrawer.id !== targetId) {
                    activeDrawer.classList.remove('active');
                }
            });
            
            // فتح الدرج المطلوب
            drawer.classList.add('active');
        });
    });
    
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const drawer = this.closest('.drawer');
            drawer.classList.remove('active');
        });
    });
    
    // إغلاق الدرج عند النقر خارجه
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.drawer')) {
            document.querySelectorAll('.drawer.active').forEach(drawer => {
                drawer.classList.remove('active');
            });
        }
    });
    
    // تفعيل القائمة المنبثقة
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const popupMenu = document.getElementById('popup-menu');
    
    menuToggle.addEventListener('click', function() {
        popupMenu.classList.add('active');
    });
    
    closeMenu.addEventListener('click', function() {
        popupMenu.classList.remove('active');
    });
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.popup-menu') && !event.target.closest('.menu-toggle')) {
            popupMenu.classList.remove('active');
        }
    });
    
    // إغلاق القائمة عند اختيار أي رابط منها
    const popupMenuLinks = document.querySelectorAll('.popup-menu-link');
    popupMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            popupMenu.classList.remove('active');
        });
    });
});




