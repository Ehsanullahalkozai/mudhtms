// تنظیمات اتصال به دیتابیس اختصاصی سیستم وزارت شهرسازی
const SUPABASE_URL = "https://supabase.co";
const SUPABASE_KEY = "sn_publis"; 

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert(`درخواست ورود برای کارمند وزارت با ایمیل: ${email} به سرور ارسال شد.`);
});
