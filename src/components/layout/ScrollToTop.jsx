import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

useEffect(() => {
  // استخدام setTimeout بيضمن إن السكرول يحصل بعد ما الصفحة الجديدة ترندر تماماً
  const timer = setTimeout(() => {
    window.scrollTo(0, 0);
    // أو لو عايزها ناعمة
    // document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  }, 0);

  return () => clearTimeout(timer);
}, [pathname]);

  return null;
}

export default ScrollToTop;

