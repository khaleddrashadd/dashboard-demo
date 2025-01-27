import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const TermsModal = () => {
  return (
    <Dialog open>
      <DialogContent
        closeable={false}
        className="p-0">
        <DialogHeader>
          <DialogTitle className="text-start text-xl font-bold py-4 px-6">
            الشروط والأحكام
          </DialogTitle>
          <div className="text-start p-4">
            <div
              dir="ltr"
              className="scrollbar-custom terms text-lg text-ivory-950 font-semibold flex flex-col max-h-96 overflow-y-scroll p-4">
              <div
                dir="rtl"
                className="space-y-2">
                <DialogDescription>
                  الشروط والأحكام الخاصة بلوحة التحكم ملاك المحافظ:
                </DialogDescription>
                <DialogDescription>
                  1. تعريف لوحة التحكم لوحة التحكم: هي واجهة مخصصة للمستخدمين
                  المسجلين تتيح لهم الوصول إلى البيانات والوظائف المتعلقة بخدمات
                  التطبيق، مثل إدارة العقارات، عرض الإحصائيات، وحفظ الإعدادات.
                </DialogDescription>
                <DialogDescription>
                  2. استخدام لوحة التحكم يُتاح الوصول إلى لوحة التحكم للمستخدمين
                  المصرح لهم فقط بعد تسجيل الدخول باستخدام بيانات الاعتماد
                  الشخصية (اسم المستخدم وكلمة المرور). يُحظر مشاركة بيانات تسجيل
                  الدخول مع أي طرف ثالث.
                </DialogDescription>
                <DialogDescription>
                  3. وظائف لوحة التحكم لوحة التحكم تشمل الميزات التالية: إدارة
                  العقارات: إضافة، تعديل، أو حذف العقارات المدرجة. عرض حالة
                  العقارات (متاحة، مباعة، تحت العرض). الإحصائيات والتقارير: عرض
                  إحصائيات حول العقارات المدرجة، مثل عدد الزيارات وعدد الحجوزات.
                  تقارير مخصصة بناءً على الفترة الزمنية أو نوع العقار. إشعارات:
                  استقبال الإشعارات المتعلقة بالحجوزات أو التعديلات على القوائم.
                </DialogDescription>
                <DialogDescription>
                  4. مسؤولية المستخدمين يتحمل المستخدم المسؤولية الكاملة عن
                  الأنشطة التي تتم باستخدام حسابه على لوحة التحكم. يجب الإبلاغ
                  فورًا عن أي استخدام غير مصرح به للحساب. يُحظر تحميل أي معلومات
                  خاطئة أو مضللة عن العقارات.
                </DialogDescription>
                <DialogDescription>
                  5. قيود الاستخدام يُحظر استخدام لوحة التحكم لأي غرض غير مشروع
                  أو ينتهك القوانين واللوائح المعمول بها في المملكة العربية
                  السعودية. يُمنع التدخل في تشغيل لوحة التحكم أو محاولة الوصول
                  غير المصرح به إلى بيانات أو حسابات أخرى.
                </DialogDescription>
                <DialogDescription>
                  6. حقوق الشركة تحتفظ الشركة بالحق في: تعليق أو إلغاء حساب أي
                  مستخدم ينتهك الشروط والأحكام. إجراء تحديثات أو تغييرات على
                  لوحة التحكم دون إشعار مسبق. مراقبة النشاط على لوحة التحكم
                  لضمان الامتثال لهذه الشروط.
                </DialogDescription>
                <DialogDescription>
                  7. حدود المسؤولية الشركة غير مسؤولة عن أي خسائر تنشأ عن سوء
                  استخدام لوحة التحكم. الشركة لا تضمن خلو لوحة التحكم من الأخطاء
                  التقنية أو الأعطال، ولكنها تعمل على إصلاحها في أسرع وقت ممكن.
                </DialogDescription>
                <DialogDescription>
                  8. التحديثات على الشروط قد يتم تحديث هذه الشروط والأحكام من
                  وقت لآخر. يُنصح المستخدمون بمراجعة هذه الصفحة بانتظام لضمان
                  معرفة أي تغييرات.
                </DialogDescription>
                <DialogDescription>
                  9. الاتصال بنا في حال وجود أي استفسارات أو مشاكل متعلقة بلوحة
                  التحكم، يُرجى التواصل مع: البريد الإلكتروني: support@nfsc.com
                  رقم الهاتف: +966 [رقم الهاتف]
                </DialogDescription>
              </div>
            </div>
          </div>
        </DialogHeader>
        <DialogFooter className="p-4 flex items-end justify-end">
          <Button className="w-max">نعم، أنا أوافق</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TermsModal;
