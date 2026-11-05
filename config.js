// تنظیمات اتصال به دیتابیس اختصاصی سیستم وزارت شهرسازی
const SUPABASE_URL = "https://supabase.co";
const SUPABASE_KEY = "sb_publis_YOUR_KEY_HERE"; // کلید عمومی شما که با sb_publis شروع می‌شود در این خط قرار دارد

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // ارسال درخواست تایید هویت به سرور امن سوپابیس
        const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok && data.access_token) {
            alert("ورود موفقیت‌آمیز بود! در حال انتقال به داشبورد وزارت...");
            // انتقال خودکار کارمند به صفحه داشبورد سیستم تعقیب احکام
            window.location.href = "dashboard.html";
        } else {
            alert("خطا: ایمیل آدرس یا رمز عبور اشتباه است، یا حساب شما هنوز تایید نشده است.");
        }
    } catch (error) {
        alert("خطا در اتصال به سرور وزارت. لطفاً انترنت خود را چک کنید.");
    }
});
