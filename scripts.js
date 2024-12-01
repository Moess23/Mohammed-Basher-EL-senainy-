// تطبيق تأثيرات الترانزيسيون عند التمرير
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content-section');

    // إضافة الترانزيسيون عند التمرير
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            if (sectionPosition < window.innerHeight - 50) {
                section.classList.add('active');
            }
        });
    });
});Sections();
});