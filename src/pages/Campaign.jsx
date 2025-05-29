import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, Target, Phone, Share2, ExternalLink, GraduationCap, Heart, Lightbulb, Shield, Globe, Leaf, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";

export default function Campaign() {
  const [isVisible, setIsVisible] = useState({});
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const visionItems = [
    { icon: '🎓', text: 'תמיכה במילואימניקים' },
    { icon: '🎉', text: 'החזרת אווירת המסיבות בקמפוס' },
    { icon: '🤝', text: 'נטוורקינג בין חוגים ושנים' },
    { icon: '🧠', text: 'מענה לזכויות הסטודנטים' },
    { icon: '🌍', text: 'שילוב בית הספר הבינלאומי' },
    { icon: '🏫', text: 'קמפוס חכם ונגיש' },
    { icon: '🚍', text: 'פתרונות תחבורה' },
    { icon: '🌱', text: 'קיימות ומודעות סביבתית' },
    { icon: '👩', text: 'קידום ייצוג נשי' }
  ];

  const teamMembers = [
    {
      name: 'רז בן חיים',
      role: 'יו"ר האגודה',
      description: 'משפטים ו-MBA',
      details: 'מביא ניסיון עשיר בניהול ובהובלת פרויקטים סטודנטיאליים'
    },
    {
      name: 'ערבה בנקין שדה',
      role: 'ס. יו"ר',
      description: 'תקשורת',
      details: 'מתמחה בתקשורת אסטרטגית וקשרי סטודנטים'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">הקמפיין הלבן</h1>
            <p className="text-xl text-gray-600">אוניברסיטת רייכמן • אגודת הסטודנטים</p>
            <div className="mt-4">
              <Badge variant="outline" className="text-lg px-4 py-2 bg-blue-50 text-blue-700 border-blue-200">
                מעלים הילוך
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">באנו לעבוד בשבילכם</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            שלוש שנים שאנחנו חיים את השטח, את הקמפוס, מבפנים. אנחנו יודעים בדיוק איפה האגודה צריכה להשתפר, 
            כדי שאתם תזכו לחוויה סטודנטיאלית איכותית.
          </p>
          <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100 text-lg px-8 py-3">
            קראו את המצע המלא
          </Button>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">הצוות המוביל</h2>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <div className="w-full max-w-2xl mx-auto mb-6 rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/images/team-photo.jpg" 
                  alt="רז בן חיים וערבה בנקין שדה - הקמפיין הלבן" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col items-center justify-center"
                  style={{display: 'none'}}
                >
                  <div className="flex gap-4 mb-4">
                    <Users className="w-16 h-16 text-blue-600" />
                    <Star className="w-16 h-16 text-indigo-600" />
                  </div>
                  <p className="text-gray-600 font-semibold">תמונת הצוות תתווסף בקרוב</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">רז בן חיים</h3>
                  <Badge className="bg-blue-100 text-blue-800 mb-2">יו״ר</Badge>
                  <p className="text-sm text-gray-600">משפטים MBA • מנהל "סטודנטים בחזית"</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-pink-800 mb-2">ערבה בנקין שדה</h3>
                  <Badge className="bg-pink-100 text-pink-800 mb-2">ס. יו״ר</Badge>
                  <p className="text-sm text-gray-600">תקשורת • רכזת בית הספר סמי עופר</p>
                </div>
              </div>
              <div className="mt-6 bg-white/70 p-4 rounded-lg">
                <p className="text-gray-700 font-medium">
                  "אנחנו כאן כדי לעבוד עבורכם ולהפוך את חוויית הלימודים שלכם לטובה יותר"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">פירוט על המועמדים</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Chairman */}
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/raz-ben-haim.jpg" 
                    alt="רז בן חיים" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <Users className="w-16 h-16 text-blue-600" style={{display: 'none'}} />
                </div>
                <CardTitle className="text-2xl text-blue-800">רז בן חיים</CardTitle>
                <Badge className="bg-blue-100 text-blue-800">יו״ר</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>משפטים MBA שנה ג׳</p>
                  <p>מנהל מחלקת מועדונים</p>
                  <p>מנהל "סטודנטים בחזית"</p>
                  <p>תכנית רובינשטיין למנהיגות חוקתית</p>
                </div>
              </CardContent>
            </Card>

            {/* Vice Chairman */}
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/araba-benkin-sade.jpg" 
                    alt="ערבה בנקין שדה" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <Star className="w-16 h-16 text-pink-600" style={{display: 'none'}} />
                </div>
                <CardTitle className="text-2xl text-pink-800">ערבה בנקין שדה</CardTitle>
                <Badge className="bg-pink-100 text-pink-800">ס. יו״ר</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>תקשורת שנה ג׳</p>
                  <p>רכזת בית הספר סמי עופר לתקשורת</p>
                  <p>ראש מחלקת שיווק וסושיאל</p>
                  <p>תכנית רבין למנהיגות</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">החזון שלנו</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg leading-relaxed mb-6">
                אגודת הסטודנטים היא הקול של הסטודנטים. היא הבית של הסטודנטים, היא זו שאמורה להילחם בשבילכם, 
                לייצג אתכם, לוודא שהרצונות והדרישות שלכם לא רק נשמעים אלא גם מקבלים מענה.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">✓</div>
                  <p className="text-sm">כל מה שעובד<br/>באנו לשפר</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">✗</div>
                  <p className="text-sm">כל מה שלא עבד<br/>באנו לשנות</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">↗</div>
                  <p className="text-sm">תמורה אמיתית<br/>לכסף שלכם</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">המצע שלנו</h2>
          
          {/* Reserve Support */}
          <Card className="mb-8 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Shield className="w-6 h-6" />
                תמיכה במילואימניקים
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4 text-gray-700">
                המילואים לא נגמרים בשטח – האגודה תהיה הבית של משרתי המילואים לאורך כל התואר.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800">
                  רז מכהן כמנהל בארגון "סטודנטים בחזית" ויזם את קבוצת "המילואימניקים של רייכמן". 
                  נדאג שכל סטודנט בשירות מילואים יקבל את מה שמגיע לו: סיכומים, עדכונים, ליווי אישי וטיפול פסיכולוגי.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Fun and Atmosphere */}
          <Card className="mb-8 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Heart className="w-6 h-6" />
                פאן ואווירה בקמפוס
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4 text-gray-700">
                הסטודנטים ברייכמן לא צריכים סיבה למסיבה – פשוט מגיע לנו ליהנות.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">מה נעשה:</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• הופעות ואירועים מגבשים</li>
                    <li>• פסטיבלים וירידים</li>
                    <li>• הקרנות דרייב-אין</li>
                    <li>• פסטיבלי אוכל</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">הבטחות:</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• יחס הוגן במכירת כרטיסים</li>
                    <li>• אירועים לכל הקהלים</li>
                    <li>• ללא תורים ולחצים</li>
                    <li>• אירועי שיא לאורך השנה</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Networking */}
          <Card className="mb-8 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Users className="w-6 h-6" />
                נטוורקינג וקהילת רייכמן
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4 text-gray-700">
                הנטוורקינג הוא אחד המשאבים הייחודיים לאוניברסיטת רייכמן! המטרה שלנו היא ליצור קהילה חזקה ומגובשת.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  נקים קבוצות חשיבה ומפגשי אירוח בין בתי ספר. נפעל לחיבור בין סטודנטים שונים בקמפוס, 
                  מבתי ספר שונים ומשנים שונות. אנחנו הולכים להפוך לקמפוס הכי מאוחד והכי חזק בארץ.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Student Rights */}
          <Card className="mb-8 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
              <CardTitle className="flex items-center gap-3 text-xl">
                <GraduationCap className="w-6 h-6" />
                זכויות הסטודנטים
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4 text-gray-700">
                עבודות מתעכבות? זכויות מופרות? יש לכם כתובת אחת ברורה.
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-red-800">
                  ערבה בעלת ניסיון של שלוש שנים כנציגה ושנה כרכזת אקדמית. נחזק את נציגי המסלול, 
                  נבנה פורום אקדמי אפקטיבי ונדאג שכל פנייה תקבל מענה מהיר ומדויק.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Smart Campus */}
          <Card className="mb-8 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Lightbulb className="w-6 h-6" />
                קמפוס חכם ונגיש
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4 text-gray-700">
                נגמרו החיפושים אחרי כיתה פנויה!
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">מערכת חכמה:</h4>
                  <p className="text-sm text-orange-700">
                    תשקף בזמן אמת כיתות פנויות ומרחבי למידה זמינים, 
                    תאפשר הזמנת כיתות מראש וחיסכון בזמן.
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">מאגר לימודי:</h4>
                  <p className="text-sm text-orange-700">
                    סיכומים, עבודות וחומרים מכל בתי הספר, 
                    הכל במקום אחד, נוח ונגיש.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* International School */}
          <Card className="mb-8 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Globe className="w-6 h-6" />
                בית הספר הבינלאומי
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4 text-gray-700">
                לגישתנו, בית הספר הבינלאומי צריך להיות מעורב ברווחה ובאווירה, בקהילה וברוח המקום.
              </p>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-sm text-indigo-800">
                  נתקין תפקיד מיוחד לנציג מבית הספר הבינלאומי בהנהלת האגודה, 
                  שמטרתו תהיה לשקף את הצרכים הסטודנטיאליים ולטפל בבעיות בזמן אמת.
                  לבית הספר הבינלאומי מגיע ייצוג באגודה!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Environment */}
          <Card className="mb-8 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Leaf className="w-6 h-6" />
                סביבה ירוקה
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4 text-gray-700">
                נפעל להפוך את האגודה והקמפוס לירוקים יותר ונגישים יותר.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800">
                  נקדם יוזמות מחזור והפחתת שימוש בכלים חד-פעמיים, נקיים פעילויות ירוקות 
                  לאורך השנה ונעודד מודעות סביבתית בקרב הסטודנטים.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ערכים נוספים חשובים לנו</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">יזמות ותמיכה בעצמאיים</h3>
                <p className="text-sm text-gray-600">
                  חיזוק המעטפת ליזמים ולעצמאיים עם כלים, קשרים והזדמנויות.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">הנגשת היום שאחרי</h3>
                <p className="text-sm text-gray-600">
                  מסלולים וחיבורים שיכינו אתכם טוב יותר לקריירה ולעשייה.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">ייצוג נשי</h3>
                <p className="text-sm text-gray-600">
                  חיזוק הייצוג הנשי בכל דרגי האגודה ועידוד מנהיגות נשית.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">עבודה עם הסגל האקדמי</h3>
                <p className="text-sm text-gray-600">
                  שיח שוטף ומקצועי עם ההנהלה והענקת תעודות הערכה למרצים.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">שקיפות תקציבית</h3>
                <p className="text-sm text-gray-600">
                  ניהול כלכלי מבוסס על עקרונות של יעילות ושקיפות.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">ערכים ומורשת</h3>
                <p className="text-sm text-gray-600">
                  אירועים ברוח התקופה עם מטה החטופים ולזכר הנופלים.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">פשוט מעלים הילוך</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            אנחנו לא מבטיחים הבטחות ריקות ולא מדברים בסיסמאות. אנחנו מגיעים עם ניסיון, 
            עם תוכנית עבודה מגובשת והכי חשוב עם רצון אמיתי לשפר את מה שצריך.
          </p>
          <div className="space-y-4">
            <p className="text-lg">
              זה הזמן וההזדמנות שלכם להשפיע, לבחור באנשים שמכירים את המערכת מבפנים
            </p>
            <div className="bg-white/10 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-2xl font-bold">ניפגש בקלפי, ליד הפתק של הקמפיין הלבן!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-4">הקמפיין הלבן</h3>
          <p className="text-gray-400 mb-4">אוניברסיטת רייכמן • אגודת הסטודנטים</p>
          <p className="text-sm text-gray-500">
            באנו לעבוד עבורכם בשקיפות מלאה ולמען מי שבאמת חשוב – אתם.
          </p>
        </div>
      </footer>
    </div>
  );
}