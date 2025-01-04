
// ضع هنا الـ ID الخاص بالمكان الذي تريد التمرير إليه
const targetId = "pricing"; // غير "section2" إلى الـ ID الذي تريده

// استرجاع الموقع عند تحميل الصفحة
window.onload = function() {
if (targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
    console.error(`No element found with ID: ${targetId}`);
    }
}
};
